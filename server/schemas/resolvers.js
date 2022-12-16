const { User, Link } = require('./models');
const { GraphQLError } = require('graphql');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('links');
  
        return userData;
      }
  
      throw new GraphQLError('Not logged in.', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('links');
    },
    links: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Link.find();
    },
    link: async (parent, { _id }) => {
      return Link.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError('Incorrect credentials.', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError('Incorrect credentials.', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      const token = signToken(user);
      return { token, user };
    },
    addLink: async (parent, args, context) => {
      if (context.user) {
        const link = await Link.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { links: link._id } },
          { new: true }
        );

        return link;
      }

      throw new GraphQLError('Must be logged in.', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    },
    updateLink: async (parent, args, context) => {
      if (context.user) {
        const { _id, url, title } = args;
        const updatedLink = await Link.findOneAndUpdate(
          { _id },
          { url, title },
          { new: true }
        );
  
        if (!updatedLink) {
          throw new GraphQLError('Link not found.', {
            extensions: { code: 'NOT_FOUND' },
          });
        }
  
        return updatedLink;
      }
  
      throw new GraphQLError('Must be logged in.', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    },
    deleteLink: async (parent, args, context) => {
      if (context.user) {
        const { _id } = args;
        const deletedLink = await Link.findOneAndDelete({ _id });
  
        if (!deletedLink) {
          throw new GraphQLError('Link not found.', {
            extensions: { code: 'NOT_FOUND' },
          });
        }
  
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { links: _id } },
          { new: true }
        );
  
        return deletedLink;
      }
  
      throw new GraphQLError('Must be logged in.', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }
  }
};

module.exports = resolvers;
