import { useState } from 'react';

import { BlockPicker } from 'react-color';

const Buttons = (props) => {

  const { color, btnColor, setShowBtnColorPicker, showBtnColorPicker, handleBtnColorChange, handleBtnInputChange } = props;

  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleBtnSelect = (btnID) => {
    setSelectedBtn(btnID);
  };

	return (
		<div className='p-4 font-lib'>
			<h1 className='font-extrabold text-xl mb-4'>Buttons</h1>
			<div className='flex flex-col bg-white rounded-xl py-6'>
				<h1 className='ml-6 my-6 font-bold'>Solid</h1>
				<div className='flex flex-col items-center justify-center text-white'>
					<button className={`bg-black px-14 py-3 mb-6 ${selectedBtn === 'solid' ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => handleBtnSelect('solid')}>
						Your Link Here
					</button>
					<button className={`bg-black px-14 py-3 mb-6 rounded-xl ${selectedBtn === 'solid-round' ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => handleBtnSelect('solid-round')}>
						Your Link Here
					</button>
					<button className={`bg-black px-14 py-3 mb-6 rounded-full ${selectedBtn === 'solid-rounder' ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => handleBtnSelect('solid-rounder')}>
						Your Link Here
					</button>
				</div>
				<h1 className='ml-6 my-6 font-bold'>Outlined</h1>
				<div className='flex flex-col items-center justify-center'>
					<button className={`border border-black px-14 py-3 mb-6 ${selectedBtn === 'outlined' ? 'btn-select' : ''}`} style={{borderColor: color}} onClick={() => handleBtnSelect('outlined')}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 rounded-xl ${selectedBtn === 'outlined-round' ? 'btn-select' : ''}`} style={{borderColor: color}} onClick={() => handleBtnSelect('outline-round')}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 rounded-full ${selectedBtn === 'outlined-rounder' ? 'btn-select' : ''}`} style={{borderColor: color}} onClick={() => handleBtnSelect('outline-rounder')}>
						Your Link Here
					</button>
				</div>
				<h1 className='ml-6 my-6 font-bold'>Shadowed</h1>
				<div className='flex flex-col items-center justify-center text-white'>
					<button className={`border border-black px-14 py-3 mb-6 btn-shadow ${selectedBtn === 'shadowed' ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => handleBtnSelect('shadowed')}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 btn-shadow rounded-xl ${selectedBtn === 'shadowed-round' ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => handleBtnSelect('shadowed-round')}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 btn-shadow rounded-full ${selectedBtn === 'shadowed-rounder' ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => handleBtnSelect('shadowed-rounder')}>
						Your Link Here
					</button>
				</div>
          <div className='flex flex-col items-center'>
						<h1 className='mb-2 mt-4 font-bold'>Button Color</h1>
						<div className='flex'>
							<button onClick={() => {setShowBtnColorPicker(true)}} className='mr-3 p-6 inline-flex rounded-md' style={{ backgroundColor: color}}><span></span></button>
							<input className='px-2 bg-gray-200 rounded-md text-black' value={color} onChange={handleBtnInputChange} type="text" placeholder={color} />
						</div>
						{showBtnColorPicker ? (
							<BlockPicker color={btnColor} onChangeComplete={handleBtnColorChange} onBlur={() => {setShowBtnColorPicker(false)}} />
						) : null}
					</div>
      </div>
		</div>
	);
};

export default Buttons;
