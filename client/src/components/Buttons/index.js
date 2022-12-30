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
					<button className={`bg-black px-14 py-3 mb-6 ${selectedBtn === 1 ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => setSelectedBtn(1)}>
						Your Link Here
					</button>
					<button className={`bg-black px-14 py-3 mb-6 rounded-xl ${selectedBtn === 2 ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => setSelectedBtn(2)}>
						Your Link Here
					</button>
					<button className={`bg-black px-14 py-3 mb-6 rounded-full ${selectedBtn === 3 ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => setSelectedBtn(3)}>
						Your Link Here
					</button>
				</div>
				<h1 className='ml-6 my-6 font-bold'>Outlined</h1>
				<div className='flex flex-col items-center justify-center'>
					<button className={`border border-black px-14 py-3 mb-6 ${selectedBtn === 4 ? 'btn-select' : ''}`} style={{borderColor: color}} onClick={() => setSelectedBtn(4)}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 rounded-xl ${selectedBtn === 5 ? 'btn-select' : ''}`} style={{borderColor: color}} onClick={() => setSelectedBtn(5)}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 rounded-full ${selectedBtn === 6 ? 'btn-select' : ''}`} style={{borderColor: color}} onClick={() => setSelectedBtn(6)}>
						Your Link Here
					</button>
				</div>
				<h1 className='ml-6 my-6 font-bold'>Shadowed</h1>
				<div className='flex flex-col items-center justify-center text-white'>
					<button className={`border border-black px-14 py-3 mb-6 btn-shadow ${selectedBtn === 7 ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => setSelectedBtn(7)}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 btn-shadow rounded-xl ${selectedBtn === 8 ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => setSelectedBtn(8)}>
						Your Link Here
					</button>
					<button className={`border border-black px-14 py-3 mb-6 btn-shadow rounded-full ${selectedBtn === 9 ? 'btn-select' : ''}`} style={{ backgroundColor: color}} onClick={() => setSelectedBtn(9)}>
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
