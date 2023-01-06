import { Link } from 'react-router-dom';

import logo from '../images/link.png';

import Footer from '../components/Footer';

import chef from '../images/chef.png';
import gamer from '../images/gamer.png';
import singer from '../images/singer.png';

const Home = () => {
	return (
		<main className='px-4 py-6 bg-indigo-400 h-full appear'>
			<div className='ActionBar flex justify-between p-4 items-center bg-white rounded-full'>
				<div className='flex items-center'>
					<img className='h-8' src={logo} alt='linkify logo'></img>
					<h1 className='font-unbounded text-xl'>Linkify</h1>
				</div>
				<div className='font-unbounded'>
					<button className='pr-4'>
						<Link to='/login'>Log in</Link>
					</button>
					<button className='bg-indigo-800 text-white p-2 rounded-full'>
						<Link to='/signup'>Get started</Link>
					</button>
				</div>
			</div>
			<section className='pt-20 text-indigo-100'>
				<h1 className='font-unbounded font-extrabold text-4xl pb-5'>
					Reach a new level of engagement. All your links in one.
				</h1>
				<p className='font-sora'>
					Organize all of your social media and other important links in one
					place with Linkify. Create a custom link to share with anyone.
				</p>
			</section>
			<div className='text-center text-indigo-200 flex items-center justify-center py-10 '>
				<img
					className='rounded-3xl h-3/4 w-3/4 image-animate-left'
					src={chef}
					alt='chef example linkify'
				/>
			</div>
			<div className='text-center text-indigo-200 flex items-center justify-center py-10'>
				<img
					className='rounded-3xl h-3/4 w-3/4 image-animate-right'
					src={gamer}
					alt='gamer example linkify'
				/>
			</div>
			<div className='text-center text-indigo-200 flex items-center justify-center pb-10'>
				<img
					className='rounded-3xl h-3/4 w-3/4 image-animate-left'
					src={singer}
					alt='singer example linkify'
				/>
			</div>
			<Footer />
		</main>
	);
};

export default Home;
