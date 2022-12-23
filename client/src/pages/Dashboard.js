import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';

import logo from '../images/link.png';
import LinkForm from '../components/LinkForm';

const Dashboard = () => {

  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setFadeIn(true);
	}, []);

  const [activeTab, setActiveTab] = useState('links');

  const handleClick = (tab) => {
		setActiveTab(tab);
  };

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
		<main className={`h-screen fade-in ${fadeIn ? 'visible' : ''}`}>
			<div>
				<div className='flex justify-between px-4 items-center py-2 divide-under'>
					<img className='h-12' src={logo} alt='linkify logo' />
					<div className='px-4 py-3 border border-gray-300 rounded-full'>
						<button className='font-lib'>
							<i className='bi bi-share pr-1'></i> Share
						</button>
					</div>
				</div>
				<div className='font-lib text-center flex divide-under items-center justify-around'>
					<div
						className={`py-2 w-1/3 ${
							activeTab === 'links' ? 'active-tab' : ''
						}`}
						onClick={() => handleClick('links')}
					>
						<i className='bi bi-link text-xl'></i>
						<h1 className='text-sm'>Links</h1>
					</div>
					<div
						className={`py-2 w-1/3 ${
							activeTab === 'customize' ? 'active-tab' : ''
						}`}
						onClick={() => handleClick('customize')}
					>
						<i className='bi bi-palette text-xl'></i>
						<h1 className='text-sm'>Customize</h1>
					</div>
					<div
						className={`py-2 w-1/3 ${
							activeTab === 'settings' ? 'active-tab' : ''
						}`}
						onClick={() => handleClick('settings')}
					>
						<i className='bi bi-sliders2 text-xl'></i>
						<h1 className='text-sm'>Settings</h1>
					</div>
				</div>
			</div>
			<div className='bg-slate-200'>
				{activeTab === 'links' && (
					<div className='flex flex-col items-center justify-center px-4 pt-4 font-lib'>
						<button className='bg-indigo-400 text-white w-full py-2 rounded-full flex justify-center'>
              <i className='bi bi-plus-circle pr-2'></i>
              Add link
            </button>
            <LinkForm/>
					</div>
				)}
			</div>
			<button className='bg-black text-white' onClick={Auth.logout}>
				Logout
			</button>
		</main>
	);
}

export default Dashboard;