import logo from '../images/link.png';
const About = () => {
	return (
		<main>
			<div className='flex items-center justify-center p-4 border border-b-1'>
				<img className='sticky h-10' src={logo} alt='' />
				<h1 className='font-unbounded text-2xl'>Linkify</h1>
			</div>
			<div className='text-center my-6'>
				<h1 className='font-unbounded text-2xl'>About</h1>
			</div>
			<div className='font-sora px-4 mb-6 text-justify'>
				<p className='mb-4 text-center'>Welcome to Linkify!</p>
				<p className='mb-4'>
					<span className='font-bold'>Linkify</span> is an online platform that
					allows you to create a personalized profile where you can easily share
					all of your relevant links with others. Simply register with an email,
					username, and password, and you can start customizing your profile by
					selecting button styles and custom color schemes as well as add links for all of
					your relevant online profiles, such as your social media accounts,
					personal websites, and online portfolios.
				</p>
				<p className='mb-4'>
					With <span className='font-bold'>Linkify</span>, you can easily share
					all of your online profiles with others by simply sharing one easy-to-use link to
					your <span className='font-bold'>Linkify</span> profile. This makes it
					easy for others to access all of your links in one place,
					without having to search through multiple websites or social media
					accounts.
				</p>
				<p className='mb-4'>
					So why wait? Start using <span className='font-bold'>Linkify</span>{' '}
					today and make it easy for others to access all of your online
					profiles!
				</p>
			</div>
		</main>
	);
};

export default About;
