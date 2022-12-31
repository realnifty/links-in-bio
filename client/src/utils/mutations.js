import { gql } from '@apollo/client';

export const ADD_USER = gql`
	mutation AddUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			user {
				username
				_id
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation Login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_LINK = gql`
	mutation AddLink($title: String!, $url: String!) {
		addLink(title: $title, url: $url) {
			title
			url
			_id
		}
	}
`;

export const DELETE_LINK = gql`
	mutation DeleteLink($id: ID!) {
		deleteLink(_id: $id) {
			_id
		}
	}
`;

export const UPDATE_BG_COLOR = gql`
  mutation CustomizeProfile($backgroundColor: String!) {
		customizeProfile(backgroundColor: $backgroundColor) {
			backgroundColor
		}
	}
`

export const UPDATE_BTN_STYLE = gql`
	mutation CustomizeProfile($buttonStyle: String!) {
		customizeProfile(buttonStyle: $buttonStyle) {
			buttonStyle
		}
	}
`

export const UPDATE_BTN_COLOR = gql`
	mutation CustomizeProfile($buttonColor: String!) {
		customizeProfile(buttonColor: $buttonColor) {
			buttonColor
		}
	}
`