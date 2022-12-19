import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import logo from '../images/link.png';

const Login = () => {
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
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<main className='px-4 py-6 h-screen'>
			<div className='flex items-center'>
				<img className='h-8' src={logo} alt='linkify logo'></img>
				<h1 className='font-unbounded text-xl'>Linkify</h1>
			</div>
			<h1 className='font-unbounded text-2xl font-extrabold py-4'>
				Welcome back!
      </h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className='bg-gray-200 p-3 mb-4 w-full rounded-full'
          type='username'
          name='username'
          id='username'
          placeholder='Username'
          value={formState.username}
          onChange={handleChange}
        />
        <input
          className='bg-gray-200 p-3 w-full rounded-full'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={formState.password}
          onChange={handleChange}
        />
        {error && <div className='font-lib text-red-600 pt-4'>Login failed</div>}
        <p className='font-lib pt-4'>
          Don't have an account? Sign up{' '}
          <span className='text-indigo-400 underline'>
            <Link to='/signup'>here.</Link>
          </span>
        </p>
        <button className='font-unbounded font-extrabold text-white text-md p-3 mt-4 bg-indigo-400 rounded-full'>
          Log in
        </button>
      </form>
		</main>
	);
};

export default Login;