import { SwatchesPicker } from 'react-color';

const Buttons = (props) => {
	const {
		btnColor,
		setShowBtnColorPicker,
		showBtnColorPicker,
		handleBtnColorChange,
		handleBtnInputChange,
		btnStyle,
		setBtnStyle,
		handleBtnStyleChange,
		handleBtnInputBlur,
		setShowBtnFontColorPicker,
		showBtnFontColorPicker,
		btnFontColor,
		handleBtnFontColorChange,
		handleBtnFontInputChange,
		handleBtnFontInputBlur,
		toggleBtnColorPicker,
		toggleBtnFontColorPicker,
	} = props;

	return (
		<div className='p-4 font-sora appear md:w-2/3 md:mx-auto xl:w-1/3 xl:mx-auto'>
			<h1 className='font-extrabold text-xl mb-4'>Buttons</h1>
			<div className='flex flex-col bg-white rounded-xl py-6 shadow-md'>
				<h1 className='font-bold mb-6 text-center xl:mx-auto'>Solid</h1>
				<div className='flex flex-col items-center justify-center text-white'>
					<button
						className={`bg-black px-14 py-3 mb-6 text-white ${
							btnStyle === 'solid' ? 'btn-select' : ''
						}`}
						style={{ backgroundColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('solid');
							handleBtnStyleChange('solid');
						}}
					>
						Your Link Here
					</button>
					<button
						className={`bg-black px-14 py-3 mb-6 rounded-xl text-white ${
							btnStyle === 'solid-round' ? 'btn-select' : ''
						}`}
						style={{ backgroundColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('solid-round');
							handleBtnStyleChange('solid-round');
						}}
					>
						Your Link Here
					</button>
					<button
						className={`bg-black px-14 py-3 mb-6 rounded-full text-white ${
							btnStyle === 'solid-rounder' ? 'btn-select' : ''
						}`}
						style={{ backgroundColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('solid-rounder');
							handleBtnStyleChange('solid-rounder');
						}}
					>
						Your Link Here
					</button>
				</div>
				<h1 className='font-bold mb-6 text-center xl:mx-auto'>Outlined</h1>
				<div className='flex flex-col items-center justify-center'>
					<button
						className={`border border-black px-14 py-3 mb-6 ${
							btnStyle === 'outlined' ? 'btn-select' : ''
						}`}
						style={{ borderColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('outlined');
							handleBtnStyleChange('outlined');
						}}
					>
						Your Link Here
					</button>
					<button
						className={`border border-black px-14 py-3 mb-6 rounded-xl ${
							btnStyle === 'outlined-round' ? 'btn-select' : ''
						}`}
						style={{ borderColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('outlined-round');
							handleBtnStyleChange('outlined-round');
						}}
					>
						Your Link Here
					</button>
					<button
						className={`border border-black px-14 py-3 mb-6 rounded-full ${
							btnStyle === 'outlined-rounder' ? 'btn-select' : ''
						}`}
						style={{ borderColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('outlined-rounder');
							handleBtnStyleChange('outlined-rounder');
						}}
					>
						Your Link Here
					</button>
				</div>
				<h1 className='font-bold mb-6 text-center xl:mx-auto'>Shadowed</h1>
				<div className='flex flex-col items-center justify-center text-white'>
					<button
						className={`border border-black px-14 py-3 mb-6 btn-shadow ${
							btnStyle === 'shadowed' ? 'btn-select' : ''
						}`}
						style={{ backgroundColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('shadowed');
							handleBtnStyleChange('shadowed');
						}}
					>
						Your Link Here
					</button>
					<button
						className={`border border-black px-14 py-3 mb-6 btn-shadow rounded-xl text-white ${
							btnStyle === 'shadowed-round' ? 'btn-select' : ''
						}`}
						style={{ backgroundColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('shadowed-round');
							handleBtnStyleChange('shadowed-round');
						}}
					>
						Your Link Here
					</button>
					<button
						className={`border border-black px-14 py-3 mb-6 btn-shadow rounded-full text-white ${
							btnStyle === 'shadowed-rounder' ? 'btn-select' : ''
						}`}
						style={{ backgroundColor: btnColor, color: btnFontColor }}
						onClick={() => {
							setBtnStyle('shadowed-rounder');
							handleBtnStyleChange('shadowed-rounder');
						}}
					>
						Your Link Here
					</button>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='mb-2 mt-4 font-bold'>Button Color</h1>
					<div className='flex'>
						<button
							onClick={toggleBtnColorPicker}
							className='mr-3 p-6 inline-flex rounded-md'
							style={{ backgroundColor: btnColor, color: btnFontColor }}
						>
							<span></span>
						</button>
						<input
							className='px-2 bg-gray-200 rounded-md text-black'
							value={btnColor}
							onChange={handleBtnInputChange}
							type='text'
							placeholder={btnColor}
							onBlur={handleBtnInputBlur}
						/>
					</div>
					{showBtnColorPicker ? (
						<SwatchesPicker
							color={btnColor}
							onChangeComplete={handleBtnColorChange}
						/>
					) : null}
				</div>
				<div className='flex flex-col items-center mt-6'>
					<h1 className='mb-2 mt-4 font-bold'>Button Font Color</h1>
					<div className='flex'>
						<button
							onClick={toggleBtnFontColorPicker}
							className='mr-3 p-6 inline-flex rounded-md'
							style={{ backgroundColor: btnFontColor }}
						>
							<span></span>
						</button>
						<input
							className='px-2 bg-gray-200 rounded-md text-black'
							value={btnFontColor}
							onChange={handleBtnFontInputChange}
							type='text'
							placeholder={btnFontColor}
							onBlur={handleBtnFontInputBlur}
						/>
					</div>
					{showBtnFontColorPicker ? (
						<SwatchesPicker
							color={btnFontColor}
							onChangeComplete={handleBtnFontColorChange}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Buttons;
