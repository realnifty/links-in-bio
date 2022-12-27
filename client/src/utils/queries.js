import { gql } from '@apollo/client';

export const GET_ME = gql`
	query Me {
		me {
			username
			_id
			email
			profilePicture
			displayName
			links {
				_id
				title
				url
			}
		}
	}
`;