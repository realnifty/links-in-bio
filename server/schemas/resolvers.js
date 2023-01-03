const { User, Link } = require('../models');
const { GraphQLError } = require('graphql');
const { signToken } = require('../utils/auth');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const resolvers = {
	Query: {
		me: async (parent, args, contextValue) => {
			if (contextValue.user) {
				const userData = await User.findOne({ _id: contextValue.user._id })
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
		users: async () => {
			return User.find().select('-__v -password').populate('links');
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
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new GraphQLError('User not found.', {
					extensions: { code: 'NOT_FOUND' },
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
		addLink: async (parent, args, contextValue) => {
			if (contextValue.user) {
				const link = await Link.create({
					...args,
					username: contextValue.user.username,
				});

				await User.findByIdAndUpdate(
					{ _id: contextValue.user._id },
					{ $push: { links: link._id } },
					{ new: true }
				);

				return link;
			}

			throw new GraphQLError('Must be logged in.', {
				extensions: { code: 'UNAUTHENTICATED' },
			});
		},
		updateLink: async (parent, args, contextValue) => {
			if (contextValue.user) {
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
		deleteLink: async (parent, args, contextValue) => {
			if (contextValue.user) {
				const { _id } = args;
				const deletedLink = await Link.findOneAndDelete({ _id });

				if (!deletedLink) {
					throw new GraphQLError('Link not found.', {
						extensions: { code: 'NOT_FOUND' },
					});
				}

				await User.findByIdAndUpdate(
					{ _id: contextValue.user._id },
					{ $pull: { links: _id } },
					{ new: true }
				);

				return deletedLink;
			}

			throw new GraphQLError('Must be logged in.', {
				extensions: { code: 'UNAUTHENTICATED' },
			});
		},
		updateProfile: async (parent, args, contextValue) => {
			if (contextValue.user) {
				const { displayName, biography } = args;
				const updatedUser = await User.findOneAndUpdate(
					{ _id: contextValue.user._id },
					{ displayName, biography },
					{ new: true }
				);

				if (!updatedUser) {
					throw new GraphQLError('User not found.', {
						extensions: { code: 'NOT_FOUND' },
					});
				}

				return updatedUser;
			}

			throw new GraphQLError('Must be logged in.', {
				extensions: { code: 'UNAUTHENTICATED' },
			});
		},
		customizeProfile: async (parent, args, contextValue) => {
      if (contextValue.user) {
        const {
          backgroundColor,
          buttonColor,
          buttonStyle,
          fontColor,
          profileFontColor,
          profilePicture,
        } = args;
    
        let updatedFields = {
          backgroundColor,
          buttonColor,
          buttonStyle,
          fontColor,
          profileFontColor,
        };
    
        if (profilePicture) {
          try {
            const result = await cloudinary.uploader.upload(profilePicture, {
              folder: 'profilePictures',
              use_filename: true,
            });
            updatedFields.profilePicture = result.secure_url;
          } catch (error) {
            console.error(error);
          }
        }

        if (profilePicture === null) {
          updatedFields.profilePicture = null;
        }
    
        const updatedUser = await User.findOneAndUpdate(
          { _id: contextValue.user._id },
          updatedFields,
          { new: true }
        );
    
        if (!updatedUser) {
          throw new GraphQLError('User not found.', {
            extensions: { code: 'NOT_FOUND' },
          });
        }
    
        return updatedUser;
      }
    
      throw new GraphQLError('Must be logged in.', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    },
		deleteMe: async (parent, args, contextValue) => {
			if (contextValue.user) {
				const deletedUser = await User.findOneAndDelete({
					_id: contextValue.user._id,
				});

				if (!deletedUser) {
					throw new GraphQLError('User not found.', {
						extensions: { code: 'NOT_FOUND' },
					});
				}

				return deletedUser;
			}

			throw new GraphQLError('Must be logged in.', {
				extensions: { code: 'UNAUTHENTICATED' },
			});
		},
	},
};

module.exports = resolvers;
