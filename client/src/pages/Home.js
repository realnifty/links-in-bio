import { Link } from 'react-router-dom';

import logo from '../images/link.png';

import Footer from '../components/Footer';

import chef from '../images/chef.png';
import gamer from '../images/gamer.png';
import singer from '../images/singer.png';
import opto from '../images/opto.png';

const Home = () => {
	return (
		<main className='px-4 py-6 xl:px-40 xl:pt-12 md:px-10 md:pt-8 h-full bg-indigo-400 appear'>
			<div className='ActionBar flex justify-between p-4 xl:p-6 items-center bg-white rounded-full'>
				<div className='flex items-center'>
					<img className='h-8 md:h-10 xl:h-12' src={logo} alt='linkify logo'></img>
					<h1 className='font-unbounded text-xl md:text-2xl xl:text-3xl'>Linkify</h1>
				</div>
				<div className='font-unbounded md:text-lg xl:text-xl'>
					<button className='mr-4'>
						<Link to='/login'>Log in</Link>
					</button>
					<button className='bg-indigo-800 text-white p-2 md:p-3 xl:p-4 rounded-full'>
						<Link to='/signup'>Get started</Link>
					</button>
				</div>
			</div>
			<div className='pt-20 xl:pt-40 xl:pb-10 text-indigo-100 xl:flex xl:items-center'>
				<div className='xl:w-2/3 mr-20'>
					<h1 className='font-unbounded font-extrabold text-4xl xl:text-7xl pb-5'>
					Reach a new level of engagement. All your links in one.
					</h1>
					<p className='font-sora xl:text-2xl xl:w-3/4'>
						Organize all of your social media and other important links in one
						place with Linkify. Create a custom link to share with anyone.
					</p>
				</div>
				<div className='text-indigo-200 flex items-center justify-center hidden xl:block'>
					<img
						className='hero-img rounded-3xl mx-auto image-animate-left'
						src={opto}
						alt='chef example linkify'
					/>
				</div>
			</div>
			<div className='flex items-center justify-center pt-10 md:pt-20 xl:hidden '>
				<img
					className='rounded-3xl w-3/4 md:w-1/2 image-animate-left'
					src={chef}
					alt='chef example linkify'
				/>
			</div>
			<div className='flex items-center justify-center pt-10 md:pt-20 xl:hidden'>
				<img
					className='rounded-3xl w-3/4 md:w-1/2 image-animate-right'
					src={gamer}
					alt='gamer example linkify'
				/>
			</div>
			<div className='flex items-center justify-center py-10 md:py-20 xl:hidden'>
				<img
					className='rounded-3xl w-3/4 md:w-1/2 image-animate-left'
					src={singer}
					alt='singer example linkify'
				/>
			</div>
			<Footer />
		</main>
	);
};

export default Home;
