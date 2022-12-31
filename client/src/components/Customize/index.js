import { useState, useEffect } from 'react';

import { GET_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { UPDATE_BG_COLOR, UPDATE_BTN_STYLE, UPDATE_BTN_COLOR, UPDATE_PROFILE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

import defaultPFP from '../../images/default_pfp.png';

import Background from '../Background';
import Buttons from '../Buttons';
import { useNavigate } from 'react-router-dom';

const Customize = () => {

	const { data: userData } = useQuery(GET_ME);

	const [updateBgColor] = useMutation(UPDATE_BG_COLOR);

	const [updateBtnStyle] = useMutation(UPDATE_BTN_STYLE);

	const [updateBtnColor] = useMutation(UPDATE_BTN_COLOR);

	const [updateProfile] = useMutation(UPDATE_PROFILE);

	const [showBgColorPicker, setShowBgColorPicker] = useState(false);

	const [bgColor, setBgColor] = useState('#000000');

	const navigate = useNavigate();

	useEffect(() => {
    if (userData && userData.me && userData.me.backgroundColor) {
      setBgColor(userData.me.backgroundColor);
    }
  }, [userData]);

	const handleBgColorChange = async (bgColor) => {
		
		try {
			await updateBgColor({
				variables: {
					backgroundColor: bgColor.hex
				}
			})
		} catch (e) {
			console.error(e);
		}

		setBgColor(bgColor.hex);
		setShowBgColorPicker(false);
	};

	const handleBgInputChange = (e) => {
		setBgColor(e.target.value);
	};

	const handleBgInputBlur = async () => {
		try {
			await updateBgColor({
				variables: {
					backgroundColor: bgColor,
				},
			});
		} catch (e) {
			console.error(e);
		}
	};

	const [btnStyle, setBtnStyle] = useState('solid');

	useEffect(() => {
		if (userData && userData.me && userData.me.buttonStyle) {
			setBtnStyle(userData.me.buttonStyle);
		}
	}, [userData]);

	const handleBtnStyleChange = async (btnStyle) => {
		try {
			await updateBtnStyle({
				variables: { buttonStyle: btnStyle },
			});
		} catch (e) {
			console.error(e);
		}
	};

	const [showBtnColorPicker, setShowBtnColorPicker] = useState(false);

	const [btnColor, setBtnColor] = useState('#000000');

	useEffect(() => {
		if (userData && userData.me && userData.me.buttonColor) {
			setBtnColor(userData.me.buttonColor);
		}
	}, [userData]);

	const handleBtnColorChange = async (btnColor) => {
		
		setBtnColor(btnColor.hex);
		setShowBtnColorPicker(false);

		try {
			await updateBtnColor({
				variables: { buttonColor: btnColor.hex }
			})
		} catch (e) {
			console.error(e);
		}

	};

	const handleBtnInputChange = (e) => {
		setBtnColor(e.target.value);
	};

	const handleBtnInputBlur = async () => {
		try {
			await updateBtnColor({
				variables: {
					buttonColor: btnColor,
				},
			});
		} catch (e) {
			console.error(e);
		}
	};

	const handleProfileUpdateBlur = async (e) => {
		try {
			await updateProfile({
				variables: {
					[e.target.name]: e.target.value,
				},
			});
		} catch (e) {
			console.error(e);
		}
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
							name='displayName'
							type='text'
							placeholder={userData?.me?.displayName}
							onBlur={handleProfileUpdateBlur}
						/>
						<p className='text-sm'>Bio</p>
						<textarea
							className='bg-gray-200 w-full rounded-xl px-2 py-4 outline-1'
							name='biography'
							id=''
							placeholder={userData?.me?.biography}
							onBlur={handleProfileUpdateBlur}
						></textarea>
						<div className='flex font-lib text-lg text-white items-center justify-center bg-indigo-400 w-1/2 h-10 mt-4 rounded-full'>
							<button className='w-full h-full' onClick={() => {navigate(`/${userData.me.username}`)}}>
								<i className="bi bi-eye mr-1"></i>
								 View Profile
							</button>
						</div>
					</div>
				</div>
			</div>
			<Background
				color={bgColor}
				setShowBgColorPicker={setShowBgColorPicker}
				showBgColorPicker={showBgColorPicker}
				handleBgColorChange={handleBgColorChange}
				handleBgInputChange={handleBgInputChange}
				handleBgInputBlur={handleBgInputBlur}
			/>
			<Buttons
				color={btnColor}
				setShowBtnColorPicker={setShowBtnColorPicker}
				showBtnColorPicker={showBtnColorPicker}
				handleBtnColorChange={handleBtnColorChange}
				handleBtnInputChange={handleBtnInputChange}
				btnStyle={btnStyle}
				setBtnStyle={setBtnStyle}
				handleBtnStyleChange={handleBtnStyleChange}
				handleBtnInputBlur={handleBtnInputBlur}
			/>
		</>
	);
};

export default Customize;
