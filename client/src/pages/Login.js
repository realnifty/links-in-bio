import {Link} from 'react-router-dom';

import logo from '../images/link.png';

const Login = () => {
	return (
		<main className='px-4 py-6 h-screen'>
			<div className='flex items-center'>
				<img className='h-8' src={logo} alt='linkify logo'></img>
				<h1 className='font-unbounded text-xl'>Linkify</h1>
			</div>
			<h1 className='font-unbounded text-2xl font-extrabold py-4'>
				Welcome back!
			</h1>
			<input
				className='bg-gray-200 p-3 mb-4 w-full rounded-full'
				type='username'
				name='username'
				id='username'
				placeholder='Username'
			/>
			<input
				className='bg-gray-200 p-3 w-full rounded-full'
				type='password'
				name='password'
				id='password'
				placeholder='Password'
			/>
			<p className='font-lib pt-4'>
				Don't have an account? Sign up{' '}
				<span className='text-indigo-400 underline'>
					<Link to='/signup'>here.</Link>
				</span>
			</p>
			<button className='font-unbounded font-extrabold text-white text-md p-3 mt-4 bg-indigo-400 rounded-full'>
				Log in
			</button>
		</main>
	);
};

export default Login;