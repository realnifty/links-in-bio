import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import logo from '../images/link.png';

const Signup = () => {

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
	
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
	
	const [formState, setFormState] = useState({ username: '', email: '', password: '' });
	
	const [password, setPassword] = useState('');

	
	const [addUser, { error }] = useMutation(ADD_USER);
	
	const validatePassword = (password) => {
		return passwordRegex.test(password);
	};
	
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
			const { data } = await addUser({
				variables: { ...formState },
			});
			
			Auth.login(data.addUser.token);
			navigate('/dashboard');
		} catch (e) {
			console.error(e);
		}
	};
	

	return (
		<main className={`px-4 py-6 h-screen fade-in xl:flex xl:flex-col xl:items-center xl:justify-center md:flex md:flex-col md:items-center md:justify-center ${fadeIn ? 'visible' : ''}`}>
			<div className='flex items-center' onClick={() => {navigate('/')}}>
				<img className='h-8 md:h-10 xl:h-12' src={logo} alt='linkify logo'></img>
				<h1 className='font-unbounded text-xl md:text-2xl xl:text-3xl'>Linkify</h1>
			</div>
			<h1 className='font-unbounded text-2xl font-extrabold py-4 md:text-3xl xl:py-6 xl:text-4xl'>
				Create an account
			</h1>
			<p className='font-sora pb-4 xl:pb-6'>
				Choose a username. You can change it later if you'd like.
			</p>
			<form className='md:w-2/3 xl:w-2/3' onSubmit={handleFormSubmit}>
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
					className='bg-gray-200 p-3 mb-4 w-full rounded-full font-sora outline-gray-300'
					type='email'
					name='email'
					id='email'
					placeholder='Email'
					value={formState.email}
					onChange={handleChange}
				/>
				<input
					className='bg-gray-200 p-3 w-full rounded-full font-sora outline-gray-300'
					type='password'
					name='password'
					id='password'
					placeholder='Password'
					value={formState.password}
					onChange={(e) => {
						setPassword(e.target.value);
						handleChange(e);
					}}
				/>
				{password !== '' && !validatePassword(password) ? (
					<p className='font-sora text-red-600 pt-4'>
						Password must contain at least one lowercase letter, one uppercase
						letter, one digit, one special character, and must be 8 - 30
						characters long.
					</p>
				) : (
					password !== '' && <p className='font-sora text-green-600 pt-4'>✓</p>
				)}
				{error && (
					<div className='font-sora text-red-600 pt-4'>Sign up failed</div>
				)}
				<p className='font-sora pt-4 xl:pt-6'>
					By creating your account you agree to the Terms of Service and our
					Privacy Notice.
				</p>
				<p className='font-sora pt-4 xl:pt-6'>
					Already have an account? Log in{' '}
					<span className='text-indigo-400 underline'>
						<Link to='/login'>here.</Link>
					</span>
				</p>
				<button
					className='font-unbounded font-extrabold text-white text-md p-3 mt-4 xl:mt-6 bg-indigo-400 rounded-full'
					type='submit'
				>
					Create account
				</button>
			</form>
		</main>
	);
};

export default Signup;
