import { useState, useEffect, useRef } from 'react';

import { GET_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import {
	UPDATE_BG_COLOR,
	UPDATE_BTN_STYLE,
	UPDATE_BTN_COLOR,
	UPDATE_PROFILE,
	UPDATE_BTN_FONT_COLOR,
	UPDATE_PROFILE_PICTURE,
} from '../../utils/mutations';
import { useMutation } from '@apollo/client';

import Background from '../Background';
import Buttons from '../Buttons';
import Fonts from '../Fonts';

import defaultPFP from '../../images/default_pfp.png';

const Customize = () => {
	const { data: userData } = useQuery(GET_ME);

	const [updateBgColor] = useMutation(UPDATE_BG_COLOR);

	const [updateBtnStyle] = useMutation(UPDATE_BTN_STYLE);

	const [updateBtnColor] = useMutation(UPDATE_BTN_COLOR);

	const [updateProfile] = useMutation(UPDATE_PROFILE);

	const [updateBtnFontColor] = useMutation(UPDATE_BTN_FONT_COLOR);

	const [updateProfilePicture] = useMutation(UPDATE_PROFILE_PICTURE);

	const [showBgColorPicker, setShowBgColorPicker] = useState(false);

	const [bgColor, setBgColor] = useState('#000000');

	useEffect(() => {
		if (userData && userData.me && userData.me.backgroundColor) {
			setBgColor(userData.me.backgroundColor);
		}
	}, [userData]);

	const toggleBgColorPicker = () => {
		setShowBgColorPicker(!showBgColorPicker);
	};

	const handleBgColorChange = async (bgColor) => {
		try {
			await updateBgColor({
				variables: {
					backgroundColor: bgColor.hex,
				},
			});
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

	const toggleBtnColorPicker = () => {
		setShowBtnColorPicker(!showBtnColorPicker);
	};

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
				variables: { buttonColor: btnColor.hex },
			});
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

	const [showBtnFontColorPicker, setShowBtnFontColorPicker] = useState(false);

	const toggleBtnFontColorPicker = () => {
		setShowBtnFontColorPicker(!showBtnFontColorPicker);
	};

	const [btnFontColor, setBtnFontColor] = useState('#000000');

	useEffect(() => {
		if (userData && userData.me && userData.me.fontColor) {
			setBtnFontColor(userData.me.fontColor);
		}
	}, [userData]);

	const handleBtnFontColorChange = async (btnFontColor) => {
		try {
			await updateBtnFontColor({
				variables: { fontColor: btnFontColor.hex },
			});
		} catch (e) {
			console.error(e);
		}
		setBtnFontColor(btnFontColor.hex);
		setShowBtnFontColorPicker(false);
	};

	const handleBtnFontInputChange = (e) => {
		setBtnFontColor(e.target.value);
	};

	const handleBtnFontInputBlur = async () => {
		try {
			await updateBtnFontColor({
				variables: {
					fontColor: btnFontColor,
				},
			});
		} catch (e) {
			console.error(e);
		}
	};

	const [profilePicture, setProfilePicture] = useState(null);

	const fileInputRef = useRef();

	const handleUploadClick = () => {
		fileInputRef.current.click();
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
	};

	const handleUpload = async (profilePicture) => {
		try {
			await updateProfilePicture({
				variables: { profilePicture: profilePicture },
			});
		} catch (e) {
			console.error(e);
		}
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setProfilePicture(reader.result);
			handleUpload(reader.result);
		};
	};

	return (
		<>
			<div className='p-4 font-sora appear'>
				<h1 className='font-extrabold text-xl mb-4'>Profile</h1>
				<div className='flex flex-col bg-white rounded-xl shadow-md'>
					<div className='flex items-center justify-between pt-6 px-6'>
						<img
							className='h-28 w-28 rounded-full'
							src={
								profilePicture === null
									? userData?.me?.profilePicture
										? userData?.me?.profilePicture
										: defaultPFP
									: profilePicture
							}
							alt='default profile'
						/>
						<div className='flex flex-col font-bold'>
							<input
								ref={fileInputRef}
								name='image'
								type='file'
								accept='image/*'
								style={{ display: 'none' }}
								onChange={handleFileInputChange}
							/>
							<button
								className='bg-indigo-400 px-3 py-2 rounded-full mb-3 text-white'
								onClick={handleUploadClick}
							>
								Select image
							</button>
							<button
								className='bg-gray-300 px-3 py-2 rounded-full'
								onClick={() => {
									setProfilePicture(null);
									handleUpload(null);
									window.location.reload();
								}}
							>
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
						<div className='flex font-sora text-lg text-white items-center justify-center bg-indigo-400 w-1/2 h-10 mt-4 rounded-full'>
							<button
								className='w-full h-full'
								onClick={() => {
									window.location.assign(`/${userData.me.username}`);
								}}
							>
								<i className='bi bi-eye mr-1'></i>
								View Profile
							</button>
						</div>
					</div>
				</div>
			</div>
			<Background
				color={bgColor}
				showBgColorPicker={showBgColorPicker}
				handleBgColorChange={handleBgColorChange}
				handleBgInputChange={handleBgInputChange}
				handleBgInputBlur={handleBgInputBlur}
				toggleBgColorPicker={toggleBgColorPicker}
			/>
			<Buttons
				btnColor={btnColor}
				btnFontColor={btnFontColor}
				setShowBtnColorPicker={setShowBtnColorPicker}
				showBtnColorPicker={showBtnColorPicker}
				handleBtnColorChange={handleBtnColorChange}
				handleBtnInputChange={handleBtnInputChange}
				btnStyle={btnStyle}
				setBtnStyle={setBtnStyle}
				handleBtnStyleChange={handleBtnStyleChange}
				handleBtnInputBlur={handleBtnInputBlur}
				setShowBtnFontColorPicker={setShowBtnFontColorPicker}
				showBtnFontColorPicker={showBtnFontColorPicker}
				handleBtnFontColorChange={handleBtnFontColorChange}
				handleBtnFontInputChange={handleBtnFontInputChange}
				handleBtnFontInputBlur={handleBtnFontInputBlur}
				toggleBtnColorPicker={toggleBtnColorPicker}
				toggleBtnFontColorPicker={toggleBtnFontColorPicker}
			/>
			<Fonts />
		</>
	);
};

export default Customize;
