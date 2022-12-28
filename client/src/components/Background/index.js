import { BlockPicker } from 'react-color';

const Background = (props) => {

  const {color, setShowColorPicker, showColorPicker, handleColorChange, handleInputChange} = props

  return (
    <>
      <div className='p-4 font-lib'>
				<h1 className='font-extrabold text-xl mb-4'>Background</h1>
				<div className='bg-white py-20 rounded-xl flex flex-col items-center justify-around'>
					<span className='outline outline-black p-3 rounded-xl'><button className='px-20 py-32 rounded-lg' style={{ backgroundColor: color}}></button></span>
					<h1 className='mt-4'>Solid</h1>
					<div className='flex flex-col'>
						<h1 className='my-2 font-bold'>Color</h1>
						<div className='flex'>
							<button onClick={() => {setShowColorPicker(true)}} className='mr-3 p-6 inline-flex rounded-md' style={{ backgroundColor: color}}><span></span></button>
							<input className='px-2 bg-gray-200 rounded-md text-black' value={color} onChange={handleInputChange} type="text" placeholder={color} />
						</div>
						{showColorPicker ? (
							<BlockPicker color={color} onChangeComplete={handleColorChange} disableAlpha={true} />
						) : null}
						<p className='text-center mt-6'>Need color inspo? Check <span><a className='text-indigo-400' href='https://coolors.co/palettes/trending' target='_blank' rel='noopener noreferrer'>here.</a></span></p>
					</div>
					<h1 className='mt-10'>More styles coming soon...</h1>
				</div>
			</div>
    </>
  )
}

export default Background