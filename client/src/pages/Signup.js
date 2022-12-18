import logo from '../images/link.png';

const Signup = () => {
	return (
		<main className='px-4 py-6 h-screen'>
			<div className='flex items-center'>
				<img className='h-8' src={logo} alt='linkify logo'></img>
				<h1 className='font-unbounded text-xl'>Linkify</h1>
			</div>
			<h1 className='font-unbounded text-2xl font-extrabold py-4'>Create an account</h1>
			<p className='font-lib pb-4'>
				Choose a username. You can change it later if you'd like.
			</p>
			<input className='bg-gray-200 p-3 mb-4 w-full rounded-full' type='username' name='username' id='username' placeholder='Username'/>
			<input className='bg-gray-200 p-3 mb-4 w-full rounded-full' type='email' name='email' id='email' placeholder='Email'/>
			<input className='bg-gray-200 p-3 w-full rounded-full' type='password' name='password' id='password' placeholder='Password'/>
			<p className='font-lib pt-4'>
				By creating your account you agree to the Terms of Service and our
				Privacy Notice.
			</p>
			<button className='font-unbounded font-extrabold text-white text-md p-3 mt-4 bg-indigo-400 rounded-full'>Create account</button>
		</main>
	);
};

export default Signup;
