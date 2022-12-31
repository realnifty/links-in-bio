import { gql } from '@apollo/client';

export const GET_ME = gql`
	query Me {
		me {
			username
			_id
			email
			profilePicture
			displayName
			biography
			buttonStyle
			buttonColor
			backgroundColor
			fontColor
			profileFontColor
			links {
				_id
				title
				url
			}
		}
	}
`;

export const GET_USER = gql`
	query User($username: String!) {
		user(username: $username) {
			backgroundColor
			biography
			buttonColor
			buttonStyle
			displayName
			fontColor
			profileFontColor
			links {
				_id
				title
				url
			}
			username
			profilePicture
		}
	}
`;