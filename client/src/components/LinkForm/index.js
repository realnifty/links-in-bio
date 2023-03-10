import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_LINK } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

import spinner from '../../images/spinner.svg';

const LinkForm = (props) => {
	const { linkFormVisible, toggleLinkForm } = props;

	const [title, setTitle] = useState('');

	const [url, setUrl] = useState('');

	const [addLink, loading] = useMutation(ADD_LINK, {
		update(cache, { data: { addLink } }) {
			try {
				// could potentially not exist yet, so wrap in a try...catch
				const { me } = cache.readQuery({ query: GET_ME });
				cache.writeQuery({
					query: GET_ME,
					data: { me: { ...me, links: [...me.links, addLink] } },
				});
			} catch (e) {
				console.error(e);
			}
			const { links } = cache.readQuery({ query: GET_ME });
			if (links) {
				cache.writeQuery({
					query: GET_ME,
					data: { links: [...links, addLink] },
				});
			}
		},
	});

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			await addLink({
				variables: { title, url },
				onCompleted: () => {
					toggleLinkForm();
				},
			});

			// clear form value
			setTitle('');
			setUrl('');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div
			className={`bg-white rounded-3xl w-full xl:w-1/3 p-6 mb-4 shadow-lg flex flex-col ${
				linkFormVisible ? 'appear' : 'hidden'
			}`}
		>
			<div className='flex justify-between'>
				<h1 className='font-bold'>New link</h1>
				<button onClick={toggleLinkForm}>
					<i className='bi bi-x-lg text-xl'></i>
				</button>
			</div>
			<form className='xl:flex xl:flex-col' id='addLinkForm' onSubmit={handleFormSubmit}>
				<input
					className='font-bold outline-none'
					type='text'
					placeholder='Title:'
					value={title}
					onChange={handleTitleChange}
				/>
				<input
					className='outline-none'
					type='text'
					placeholder='url:'
					value={url}
					onChange={handleUrlChange}
				/>
			</form>
			<div className='flex justify-between'>
				<div className='text-xl text-gray-400'>
					<button>
						<i className='bi bi-image pr-3'></i>
					</button>
					{/* <button><i className='bi bi-trash3'></i></button> */}
				</div>
				<button
					form='addLinkForm'
					type='submit'
					className='font-lib text-white text-md py-1 px-3 bg-indigo-400 rounded-full'
				>
					{loading.loading === false ? (
						<span>Add</span>
					) : (
						<img
							className='animate-spin h-6'
							src={spinner}
							alt='spinner loading'
						></img>
					)}
				</button>
			</div>
		</div>
	);
};

export default LinkForm;
