import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { DELETE_LINK } from '../../utils/mutations';

import spinner from '../../images/spinner-dark.svg';

const MyLinks = ({ links }) => {
	const [deleteLinkId, setDeleteLinkId] = useState(null);

	const [deleteLink, loading] = useMutation(DELETE_LINK, {
		update(cache, { data: { deleteLink } }) {
			try {
				// could potentially not exist yet, so wrap in a try...catch
				const { me } = cache.readQuery({ query: GET_ME });
				cache.writeQuery({
					query: GET_ME,
					data: {
						me: {
							...me,
							links: me.links.filter((link) => link._id !== deleteLink._id),
						},
					},
				});
			} catch (e) {
				console.error(e);
			}
		},
	});

	const handleDelete = async (linkId) => {
		setDeleteLinkId(linkId);

		try {
			await deleteLink({
				variables: {
					id: linkId,
				},
			});
		} catch (e) {
			console.error(e);
		}

		setDeleteLinkId(null);
	};

	const [toggleWarning, setToggleWarning] = useState(false);

	const warn = (linkId) => {
		setToggleWarning((prevState) => ({
			...prevState,
			[linkId]: !prevState[linkId],
		}));
	};

	return (
		<>
			{links &&
				links.map((link) => (
					<div
						key={link._id}
						className='bg-white rounded-3xl p-6 mb-4 w-full shadow-lg flex flex-col appear'
					>
						<div className='h-full w-full'>
							<h1 className='font-bold'>{link.title}</h1>
							<p className='text-md overflow-auto'>{link.url}</p>
						</div>
						<div className='flex justify-between'>
							<div className='text-xl text-gray-400 mt-2'>
								<button>
									<i className='bi bi-image pr-3'></i>
								</button>
								<button
									onClick={() => {
										warn(link._id);
									}}
								>
									<i className='bi bi-trash3'></i>
								</button>
								{loading.loading !== false && link._id === deleteLinkId && (
									<img
										className='animate-spin h-6'
										src={spinner}
										alt='spinner'
									></img>
								)}
								{toggleWarning[link._id] && (
									<div>
										<p className='text-base mt-1 text-red-600'>
											Are you sure you want to delete this link?
										</p>
										<button
											onClick={() => {
												setToggleWarning(false);
												handleDelete(link._id);
											}}
										>
											<i className='bi bi-check-circle mr-2 text-green-600'></i>
										</button>
										<button
											onClick={() => {
												setToggleWarning(false);
											}}
										>
											<i className='bi bi-x-circle text-red-600'></i>
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default MyLinks;
