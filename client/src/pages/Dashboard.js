import { useEffect, useState } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import logo from '../images/link.png';
import LinkForm from '../components/LinkForm';
import MyLinks from '../components/MyLinks';
import Customize from '../components/Customize';
import Settings from '../components/Settings';

const Dashboard = () => {
	const navigate = useNavigate();

	const location = useLocation();

  const { loading, error, data: userData } = useQuery(GET_ME, {
    pollInterval: 200,
  });

	const [linkFormVisible, setLinkFormVisible] = useState(false);
	
	const [fadeIn, setFadeIn] = useState(false);

	const [activeTab, setActiveTab] = useState('links');
	
	const toggleLinkForm = () => {
		setLinkFormVisible(!linkFormVisible);
	};

	useEffect(() => {
		setFadeIn(true);
	}, []);

	const handleClick = (tab) => {
		setActiveTab(tab);
	};

	useEffect(() => {
		if (location.pathname === '/dashboard') {
			setActiveTab('links');
		} else if (location.pathname === '/dashboard/customize') {
			setActiveTab('customize');
		} else if (location.pathname === '/dashboard/settings') {
			setActiveTab('settings');
		}
	}, [setActiveTab, location]);
	

	useEffect(() => {
		if (!Auth.loggedIn()) {
			navigate('/login');
		}
	}, [navigate]);

	return (
		<main
			className={`min-h-screen fade-in bg-slate-200 ${fadeIn ? 'visible' : ''}`}
		>
			<div className='sticky'>
				<div className='flex justify-between px-4 items-center py-2 divide-under bg-white'>
					<img className='h-12' src={logo} alt='linkify logo' />
					<div className='px-4 py-3 border border-gray-300 rounded-full'>
						<button className='font-lib'>
							<i className='bi bi-share pr-1'></i> Share
						</button>
					</div>
				</div>
				<div className='font-lib text-center flex divide-under items-center justify-around bg-white'>
					<div
						className={`py-2 w-1/3 ${
							activeTab === 'links' ? 'active-tab' : ''
						}`}
						onClick={() => {
							handleClick('links');
							navigate('/dashboard');
						}}
					>
						<i className='bi bi-link text-xl'></i>
						<h1 className='text-sm'>Links</h1>
					</div>
					<div
						className={`py-2 w-1/3 ${
							activeTab === 'customize' ? 'active-tab' : ''
						}`}
						onClick={() => {
							handleClick('customize');
							navigate('/dashboard/customize');
						}}
					>
						<i className='bi bi-palette text-xl'></i>
						<h1 className='text-sm'>Customize</h1>
					</div>
					<div
						className={`py-2 w-1/3 ${
							activeTab === 'settings' ? 'active-tab' : ''
						}`}
						onClick={() => {
							handleClick('settings');
							navigate('/dashboard/settings');
						}}
					>
						<i className='bi bi-sliders2 text-xl'></i>
						<h1 className='text-sm'>Settings</h1>
					</div>
				</div>
			</div>
			<div className='overflow-scroll'>
				{activeTab === 'links' && (
					<div className='flex flex-col items-center justify-center p-4 font-lib'>
						<button
							className='bg-indigo-400 text-white w-full py-2 mb-4 rounded-full flex justify-center'
							onClick={toggleLinkForm}
						>
							<i className='bi bi-plus-circle pr-2'></i>
							Add link
						</button>
						<LinkForm
							linkFormVisible={linkFormVisible}
							toggleLinkForm={toggleLinkForm}
						/>
						{userData && (
							<MyLinks
								username={userData.me.username}
								links={userData.me.links}
							/>
						)}
					</div>
				)}
				{activeTab === 'customize' && (
					<Outlet/>
				)}
				{activeTab === 'settings' && (
					<Outlet/>
				)}
			</div>
		</main>
	);
};

export default Dashboard;
