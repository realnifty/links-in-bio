import { useState } from 'react';

const Share = (props) => {
	const { showShare, setShowShare, userData, user } = props;

	const [copied, setCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(`linkify.mobi/${userData?.me?.username || user?.username}`);
		setCopied(true);
	};

	return (
		<>
      <div className={`bg-black opacity-50 h-screen w-screen fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 ${
					showShare ? '' : 'hidden'
				}`}>
      </div>
			<div
				className={`bg-white w-2/3 h-28 p-4 font-sora rounded-2xl absolute inset-1/2 -translate-x-1/2  share-appear z-10 ${
					showShare ? '' : 'hidden'
				}`}
			>
				<div className='flex justify-between items-center mb-2'>
					<h1 className='font-bold'>Share profile link</h1>
					<button
						onClick={() => {
							setShowShare(false);
						}}
					>
						<i className='bi bi-x-lg text-xl'></i>
					</button>
				</div>
				<div className='flex items-center'>
					<p className='mr-2'>{`linkify.mobi/${userData?.me?.username || user?.username}`}</p>
					<button onClick={copyToClipboard}>
						{copied ? (
							<i className='bi bi-clipboard2-check text-xl'></i>
						) : (
							<i className='bi bi-clipboard2 text-xl'></i>
						)}
					</button>
				</div>
			</div>
		</>
	);
};

export default Share;
