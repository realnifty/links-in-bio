import { useState } from 'react';

import defaultPFP from '../../images/default_pfp.png';

import Background from '../Background';
import Buttons from '../Buttons';

const Customize = () => {
	const [showBgColorPicker, setShowBgColorPicker] = useState(false);

	const [bgColor, setBgColor] = useState('#000000');

	const handleBgColorChange = (bgColor) => {
		setBgColor(bgColor.hex);
		setShowBgColorPicker(false);
	};

	const handleBgInputChange = (e) => {
		setBgColor(e.target.value);
	};

	const [showBtnColorPicker, setShowBtnColorPicker] = useState(false);

	const [btnColor, setBtnColor] = useState('#000000');

	const handleBtnColorChange = (btnColor) => {
		setBtnColor(btnColor.hex);
		setShowBtnColorPicker(false);
	};

	const handleBtnInputChange = (e) => {
		setBtnColor(e.target.value);
	};

	// const [showFontColorPicker, setShowFontColorPicker] = useState(false);
	
	// const [fontColor, setFontColor] = useState('#000000');

	// const handleFontColorChange = (fontColor) => {
	// 	setFontColor(fontColor.hex);
	// 	setShowFontColorPicker(false);
	// };

	// const handleFontInputChange = (e) => {
	// 	setFontColor(e.target.value);
	// };

	return (
		<>
			<div className='p-4 font-lib'>
				<h1 className='font-extrabold text-xl mb-4'>Profile</h1>
				<div className='flex flex-col bg-white rounded-xl'>
					<div className='flex items-center justify-between pt-6 px-6'>
						<img className='h-28' src={defaultPFP} alt='default profile' />
						<div className='flex flex-col font-bold'>
							<button className='bg-indigo-400 px-3 py-2 rounded-full mb-3 text-white'>
								Upload image
							</button>
							<button className='bg-gray-300 px-3 py-2 rounded-full'>
								Remove image
							</button>
						</div>
					</div>
					<div className='p-6'>
						<p className='text-sm'>Display name</p>
						<input
							className='bg-gray-200 w-full rounded-xl px-2 py-2 mb-4 outline-1'
							type='text'
							placeholder={`@username`}
						/>
						<p className='text-sm'>Bio</p>
						<textarea
							className='bg-gray-200 w-full rounded-xl px-2 py-4 outline-1'
							name=''
							id=''
						></textarea>
					</div>
				</div>
			</div>
			<Background
				color={bgColor}
				setShowBgColorPicker={setShowBgColorPicker}
				showBgColorPicker={showBgColorPicker}
				handleBgColorChange={handleBgColorChange}
				handleBgInputChange={handleBgInputChange}
			/>
			<Buttons
				color={btnColor}
				setShowBtnColorPicker={setShowBtnColorPicker}
				showBtnColorPicker={showBtnColorPicker}
				handleBtnColorChange={handleBtnColorChange}
				handleBtnInputChange={handleBtnInputChange}
			/>
		</>
	);
};

export default Customize;
