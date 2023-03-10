import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import logo from '../images/link.png';

const Login = () => {
	const navigate = useNavigate();

	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setFadeIn(true);
	}, []);

	useEffect(() => {
		if (Auth.loggedIn()) {
			navigate('/dashboard');
		}
	}, [navigate]);

	const [formState, setFormState] = useState({ username: '', password: '' });

	const [login, { error }] = useMutation(LOGIN_USER);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
			console.log(data);
			navigate('/dashboard');
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className={`px-4 py-6 h-screen fade-in xl:flex xl:flex-col xl:items-center md:justify-center md:flex md:flex-col md:items-center md:justify-center ${fadeIn ? 'visible' : ''}`}>
			<div
				className='flex items-center'
				onClick={() => {
					navigate('/');
				}}
			>
				<img className='h-8 md:h-10 xl:h-12' src={logo} alt='linkify logo'></img>
				<h1 className='font-unbounded text-xl md:text-2xl xl:text-3xl'>Linkify</h1>
			</div>
			<h1 className='font-unbounded text-2xl font-extrabold py-4 xl:py-6 xl:text-4xl'>
				Welcome back!
			</h1>
			<form className='md:w-1/2' onSubmit={handleFormSubmit}>
				<input
					className='bg-gray-200 p-3 mb-4 w-full rounded-full font-sora outline-gray-300'
					type='username'
					name='username'
					id='username'
					placeholder='Username'
					value={formState.username}
					onChange={handleChange}
				/>
				<input
					className='bg-gray-200 p-3 w-full rounded-full font-sora outline-gray-300'
					type='password'
					name='password'
					id='password'
					placeholder='Password'
					value={formState.password}
					onChange={handleChange}
				/>
				{error && (
					<div className='font-sora text-red-600 pt-4'>Login failed</div>
				)}
				{error && error.message === 'User not found.' ? (
					<div className='font-sora text-red-600 pt-4'>User not found</div>
				) : null}
				{error && error.message === 'Incorrect credentials.' ? (
					<div className='font-sora text-red-600 pt-4'>
						Incorrect credentials
					</div>
				) : null}
				<p className='font-sora pt-4'>
					Don't have an account? Sign up{' '}
					<span className='text-indigo-400 underline'>
						<Link to='/signup'>here.</Link>
					</span>
				</p>
				<button
					className='font-unbounded font-extrabold text-white text-md p-3 mt-4 bg-indigo-400 rounded-full'
					type='submit'
				>
					Log in
				</button>
			</form>
		</main>
	);
};

export default Login;
