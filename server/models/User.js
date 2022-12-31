const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const defaultPFP = '../images/default_pfp.png';

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				'Email format invalid.',
			],
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
			maxlength: 20,
			trim: true,
			match: [
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,30})/,
				'Password format invalid.',
			],
		},
		displayName: {
			type: String,
			trim: true
		},
		biography: {
			type: String,
			maxlength: 60,
			trim: true
		},
		profilePicture: {
			type: String,
			default: defaultPFP
		},
		buttonStyle: {
			type: String,
			default: 'solid'
		},
		buttonColor: {
			type: String,
			default: '#000000'
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		fontColor: {
			type: String,
			default: '#000000'
		},
		profileFontColor: {
			type: String,
			default: '#000000'
		},
		links: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Link',
			},
		],
	}
);

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;