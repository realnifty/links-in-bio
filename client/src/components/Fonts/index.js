import { useEffect, useState } from 'react';

import { GET_ME } from '../../utils/queries';

import { UPDATE_PROFILE_FONT_COLOR } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';

import { SwatchesPicker } from 'react-color';

const Fonts = () => {
	const { data: userData } = useQuery(GET_ME);

	const [updateProfileFontColor] = useMutation(UPDATE_PROFILE_FONT_COLOR);

	const [profileFontColor, setProfileFontColor] = useState('#000000');

	const [showProfileFontColorPicker, setShowProfileFontColorPicker] =
		useState(false);

	const toggleProfileFontColorPicker = () => {
		setShowProfileFontColorPicker(!showProfileFontColorPicker);
	};

	useEffect(() => {
		if (userData?.me?.profileFontColor) {
			setProfileFontColor(userData.me.profileFontColor);
		}
	}, [userData]);

	const handleProfileFontColorChange = async (color) => {
		setProfileFontColor(color.hex);
		setShowProfileFontColorPicker(false);

		try {
			await updateProfileFontColor({
				variables: {
					profileFontColor: color.hex,
				},
			});
		} catch (e) {
			console.error(e);
		}
	};

	const handleProfileFontColorInputChange = (e) => {
		setProfileFontColor(e.target.value);
	};

	const handleProfileFontInputBlur = async () => {
		try {
			await updateProfileFontColor({
				variables: {
					profileFontColor: profileFontColor,
				},
			});
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='p-4 font-sora appear md:w-2/3 md:mx-auto xl:w-1/3 xl:mx-auto'>
			<h1 className='font-extrabold text-xl mb-4'>Fonts</h1>
			<div className='flex flex-col bg-white rounded-xl py-6 shadow-md'>
				<div className='flex flex-col items-center'>
					<h1 className='font-bold mb-2'>Profile Font Color</h1>
					<div className='flex'>
						<button
							onClick={toggleProfileFontColorPicker}
							className='mr-3 p-6 inline-flex rounded-md'
							style={{ backgroundColor: profileFontColor }}
						>
							<span></span>
						</button>
						<input
							className='px-2 bg-gray-200 rounded-md text-black'
							value={profileFontColor}
							onChange={handleProfileFontColorInputChange}
							type='text'
							placeholder={profileFontColor}
							onBlur={handleProfileFontInputBlur}
						/>
					</div>
					{showProfileFontColorPicker ? (
						<SwatchesPicker
							color={profileFontColor}
							onChangeComplete={handleProfileFontColorChange}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Fonts;
