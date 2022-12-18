import { Link } from 'react-router-dom';

import logo from '../images/link.png'

import Footer from '../components/Footer'

const Home = () => {
  return (
		<main className='px-4 py-6 bg-indigo-400 h-screen'>
			<div className='ActionBar flex justify-between p-4 items-center bg-white rounded-full'>
				<div className='flex items-center'>
					<img className='h-8' src={logo} alt='linkify logo'></img>
					<h1 className='font-unbounded text-xl'>Linkify</h1>
				</div>
				<div className='font-unbounded'>
					<button className='pr-4'>Log in</button>
					<button className='bg-indigo-800 text-white p-2 rounded-full'>
						<Link to='/signup'>Get started</Link>
					</button>
				</div>
			</div>
			<section className='pt-20 text-indigo-100'>
				<h1 className='font-unbounded font-extrabold text-4xl pb-5'>
					Reach a new level of engagement. All your links in one.
				</h1>
				<p className='font-lib font-bold '>
					Organize all of your social media and other important links in one
					place with Linkify. Create a custom link to share with anyone.
				</p>
			</section>
			<section className='font-unbounded flex flex-col pt-10'>
				<img
					className='h-20 w-20 bg-indigo-200 rounded-full mx-auto'
					src={logo}
					alt='linkify logo'
				/>
				<div className='text-center text-indigo-200 pt-5 flex flex-col'>
					<button className='bg-indigo-800 rounded-full p-3 my-3'>Join</button>
					<button className='bg-indigo-800 rounded-full p-3 my-3'>
						Linkify
					</button>
					<button className='bg-indigo-800 rounded-full p-3 my-3'>Today</button>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default Home