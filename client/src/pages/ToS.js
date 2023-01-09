import { useNavigate } from 'react-router-dom';

import logo from '../images/link.png';

const ToS = () => {

	const navigate = useNavigate();

	return (
		<main>
			<div className='flex items-center justify-center p-4 border border-b-1' onClick={() => {navigate('/dashboard/settings')}}>
				<img className='sticky h-10' src={logo} alt='' />
				<h1 className='font-unbounded text-2xl'>Linkify</h1>
			</div>
			<div className='md:w-2/3 md:mx-auto xl:w-1/3 xl:mx-auto'>
				<h1 className='font-unbounded text-2xl text-center my-6'>
					Terms of Service
				</h1>
				<div className='font-sora text-sm px-4 mb-6'>
					<p className='mb-4'>
						Thank you for using Linkify, which allows users to store all of
						their relevant social media and other online account links in one
						easy-to-access profile.
					</p>
					<p>
						By accessing or using our web application, you agree to be bound by
						these terms of service (the "Terms"). If you do not agree to these
						Terms, you may not access or use our web application.
					</p>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>Use of Linkify</h1>
					<p className='font-sora text-sm my-4'>
						You may use our web application only for lawful purposes and in
						accordance with these Terms. You may not use our web application:
					</p>
					<ul className='list-disc ml-4 font-sora text-sm'>
						<li className='mb-4'>
							In any way that violates any applicable federal, state, local, or
							international law or regulation.
						</li>
						<li>
							To transmit, or procure the sending of, illegal, fraudulent, or
							harmful content such as child pornonography, stolen credit card
							numbers, malware or viruses, content that promotes illegal
							activities or causes harm to individuals or groups, and fraudulent
							offers or schemes.
						</li>
					</ul>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>Intellectual Property</h1>
					<p className='font-sora text-sm my-4'>
						The content on Linkify, including text, graphics, logos, images, and
						software, is the property of Linkify or its licensors and is
						protected by copyright and other intellectual property laws.
					</p>
					<p className='font-sora text-sm my-4'>
						You may not use any content on Linkify for any commercial purpose
						without the express written consent of Linkify.
					</p>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>
						Disclaimer of Warranties
					</h1>
					<p className='font-sora text-sm my-4'>
						Linkify is provided on an "as is" and "as available" basis. Linkify
						makes no representations or warranties of any kind, express or
						implied, as to the operation of our platform or the information,
						content, materials, or products included therein.
					</p>
					<p className='font-sora text-sm my-4'>
						The content on Linkify, including text, graphics, logos, images, and
						software, is the property of Linkify or its licensors and is
						protected by copyright and other intellectual property laws.
					</p>
					<p className='font-sora text-sm my-4'>
						You may not use any content on Linkify for any commercial purpose
						without the express written consent of Linkify.
					</p>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>
						Limitation of Liability
					</h1>
					<p className='font-sora text-sm my-4'>
						Linkify will not be liable for any damages of any kind arising from
						the use of Linkify, including, but not limited to, direct, indirect,
						incidental, punitive, and consequential damages.
					</p>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>Governing Law</h1>
					<p className='font-sora text-sm my-4'>
						These Terms and your use of Linkify are governed by and construed in
						accordance with the laws of the United States of America and any
						disputes will be resolved in the courts located in the United States
						of America.
					</p>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>
						Changes to these Terms
					</h1>
					<p className='font-sora text-sm my-4'>
						We may revise these terms of service from time to time. The most
						current version of the terms will govern our relationship with you.
						We encourage you to review the terms periodically.
					</p>
				</div>
				<div className='px-4'>
					<h1 className='font-unbounded text-lg mt-6'>Contact Us</h1>
					<p className='font-sora text-sm my-4'>
						If you have any questions or concerns about our privacy practices,
						please contact us{' '}
						<a
							className='text-indigo-400 underline'
							href='mailto:lovecore@pm.me'
						>
							here
						</a>
					</p>
				</div>
				<p className='font-sora text-sm mx-4 my-10'>Effective Date: 01/04/23</p>
			</div>
		</main>
	);
};

export default ToS;
