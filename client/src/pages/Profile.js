import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_ME, GET_USER } from '../utils/queries';

import Auth from '../utils/auth';

import logo from '../images/link.png';
import defaultPFP from '../images/default_pfp.png';

import Share from '../components/Share';

const Profile = () => {
	const { username: userParam } = useParams();

	const { loading, data } = useQuery(userParam ? GET_USER : GET_ME, {
		variables: { username: userParam },
	});

	const user = data?.me || data?.user || {};

	const navigate = useNavigate();

	const [fadeIn, setFadeIn] = useState(false);

	const [showShare, setShowShare] = useState(false);

	useEffect(() => {
		setFadeIn(true);
	}, []);

	if (loading) {
		return (
			<main className='flex items-center justify-center h-screen w-screen'>
				<img className='animate-bounce' src={logo} alt="linkify logo" />
			</main>
		)
	}

	return (
		<>
			{user.username ? (
				<main
					className={`min-h-screen p-6 md:p-10 fade-in ${fadeIn ? 'visible' : ''}`}
					style={{ backgroundColor: user.backgroundColor }}
				>
					<Share
						showShare={showShare}
						setShowShare={setShowShare}
						user={user}
					/>
					<div
						className={`flex ${
							Auth.loggedIn() ? 'justify-between xl:justify-evenly' : 'justify-end'
						}`}
					>
						{Auth.loggedIn() && (
							<div className='bg-white w-10 h-10 flex items-center justify-center rounded-full border border-1 border-black/25'>
								<button
									onClick={() => {
										navigate('/dashboard/customize');
									}}
								>
									<i className='bi bi-pencil-square'></i>
								</button>
							</div>
						)}
						<div className='bg-white w-10 h-10 flex items-center justify-center rounded-full border border-1 border-black/25'>
							<button onClick={() => setShowShare(true)}>
								<i className='bi bi-share'></i>
							</button>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<div className='font-sora mb-4 xl:mb-6'>
							<img
								className='h-24 md:h-28 xl:h-32 mx-auto rounded-full'
								src={user?.profilePicture ? user?.profilePicture : defaultPFP}
								alt='default profile'
							/>
							<h1
								className='font-bold text-xl text-center mt-4 mb-2 xl:text-2xl xl:mt-6'
								style={{ color: user?.profileFontColor }}
							>
								{user.displayName}
							</h1>
							<p
								className='text-center xl:text-lg'
								style={{ color: user?.profileFontColor }}
							>
								{user.biography}
							</p>
						</div>
						<div className='flex flex-col w-full md:w-2/3 xl:w-1/3 text-center font-sora'>
							{user.links?.map((link) => (
								<a
									key={link._id}
									className={`py-3 my-3 
								${
									user?.buttonStyle === 'solid'
										? ''
										: user?.buttonStyle === 'solid-round'
										? 'rounded-xl'
										: user?.buttonStyle === 'solid-rounder'
										? 'rounded-full'
										: user?.buttonStyle === 'outlined'
										? 'border'
										: user?.buttonStyle === 'outlined-round'
										? 'border rounded-xl'
										: user?.buttonStyle === 'outlined-rounder'
										? 'border rounded-full'
										: user?.buttonStyle === 'shadowed'
										? 'btn-shadow'
										: user?.buttonStyle === 'shadowed-round'
										? 'btn-shadow rounded-xl'
										: user?.buttonStyle === 'shadowed-rounder'
										? 'btn-shadow rounded-full'
										: ''
								}`}
									style={
										user?.buttonStyle === 'outlined' ||
										user?.buttonStyle === 'outlined-round' ||
										user?.buttonStyle === 'outlined-rounder'
											? { borderColor: user.buttonColor, color: user.fontColor }
											: {
													backgroundColor: user.buttonColor,
													color: user.fontColor,
											  }
									}
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
								>
									{link.title}
								</a>
							))}
						</div>
					</div>
					<div
						className='flex items-center justify-center absolute inset-x-0 bottom-6'
						onClick={() => {
							navigate('/');
						}}
					>
						<img className='sticky h-10' src={logo} alt='' />
						<h1 className='font-unbounded text-2xl'>Linkify</h1>
					</div>
				</main>
			) : (
				<main>
					<div className='flex items-center justify-center p-4'>
						<img className='sticky h-10' src={logo} alt='' />
						<h1 className='font-unbounded text-2xl'>Linkify</h1>
					</div>
					<div className='px-4 text-center'>
						<h1 className='font-unbounded text-2xl mt-6'>404 Not Found ????</h1>
						<p className='font-sora mt-6'>
							The page you are looking for has either been removed or does not
							exist.
						</p>
						<a
							className='font-sora mt-6 underline text-indigo-400'
							onClick={() => {
								navigate('/');
							}}
						>
							Go to home page.
						</a>
					</div>
				</main>
			)}
		</>
	);
};

export default Profile;
