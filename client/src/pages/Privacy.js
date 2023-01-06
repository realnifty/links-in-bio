import logo from '../images/link.png';

const Privacy = () => {
	return (
		<main>
			<div className='flex items-center justify-center p-4 border border-b-1'>
				<img className='sticky h-10' src={logo} alt='' />
				<h1 className='font-unbounded text-2xl'>Linkify</h1>
			</div>
			<div className='text-center my-6'>
				<h1 className='font-unbounded text-2xl'>Privacy Notice</h1>
			</div>
			<div className='font-sora text-sm px-4 mb-6'>
				<p className='mb-4'>
					Thank you for using Linkify, which allows users to store all of their
					relevant social media and other online account links in one
					easy-to-access profile.
				</p>
				<p>
					This privacy notice explains how we collect, use, and share your
					personal information when you use our web application.
				</p>
			</div>
			<div className='px-4'>
				<h1 className='font-unbounded text-lg mt-6'>
					Collection of Personal Information
				</h1>
				<p className='font-sora text-sm my-4'>
					When you sign up for Linkify, we collect the following personal
					information from you:
				</p>
				<ul className='list-disc ml-4 font-sora text-sm'>
					<li>Email address</li>
					<li>Username</li>
					<li>Password</li>
				</ul>
				<p className='font-sora text-sm my-4'>
					We use this information to create your account and to allow you to log
					in to Linkify.
				</p>
				<p className='font-sora text-sm mb-6'>
					In addition, you may choose to upload photos to Linkify. These photos
					will be stored in a secure cloud-based media management service.
				</p>
			</div>
			<div className='px-4'>
				<h1 className='font-unbounded text-lg mt-6'>
					Use of Personal Information
				</h1>
				<p className='font-sora text-sm my-4'>
					We use the personal information that we collect from you to provide
					and improve our web application.
				</p>
			</div>
			<div className='px-4'>
				<h1 className='font-unbounded text-lg mt-6'>
					Sharing of Personal Information
				</h1>
				<p className='font-sora text-sm my-4'>
					We do not share your personal information with third parties, except
					in the following circumstances:
				</p>
				<ul className='list-disc ml-4 font-sora text-sm'>
					<li>With your consent</li>
					<li>As required by law</li>
					<li>To protect the rights and safety of our users and the public</li>
				</ul>
				<p className='font-sora text-sm my-4'>
					We may also share non-personal, aggregated data with third parties for
					research and analysis purposes.
				</p>
			</div>
			<div className='px-4'>
				<h1 className='font-unbounded text-lg mt-6'>
					Security of Personal Information
				</h1>
				<p className='font-sora text-sm my-4'>
					We take reasonable measures to protect your personal information from
					unauthorized access, use, or disclosure. However, no method of
					transmission over the internet or method of electronic storage is 100%
					secure. Therefore, we cannot guarantee the absolute security of your
					personal information.
				</p>
			</div>
			<div className='px-4'>
				<h1 className='font-unbounded text-lg mt-6'>
					Changes to this Privacy Notice
				</h1>
				<p className='font-sora text-sm my-4'>
					We may update this privacy notice from time to time. We will post any
					changes on this page, and we encourage you to review this privacy
					notice periodically.
				</p>
			</div>
			<div className='px-4'>
				<h1 className='font-unbounded text-lg mt-6'>Contact Us</h1>
				<p className='font-sora text-sm my-4'>
					If you have any questions or concerns about our privacy practices,
					please contact us{' '}
					<a className='text-indigo-400 underline' href='mailto:lovecore@pm.me'>
						here
					</a>
				</p>
			</div>
			<p className='font-sora text-sm mx-4 my-10'>Effective Date: 01/04/23</p>
		</main>
	);
};

export default Privacy;
