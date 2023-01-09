import { SwatchesPicker } from 'react-color';

const Background = (props) => {
	const {
		color,
		bgColor,
		showBgColorPicker,
		handleBgColorChange,
		handleBgInputChange,
		handleBgInputBlur,
		toggleBgColorPicker,
	} = props;

	return (
		<>
			<div className='p-4 font-sora appear md:w-2/3 md:mx-auto xl:w-1/3 xl:mx-auto'>
				<h1 className='font-extrabold text-xl mb-4'>Background</h1>
				<div className='bg-white py-20 rounded-xl flex flex-col items-center justify-around shadow-md'>
					<span className='outline outline-black p-3 rounded-xl'>
						<button
							className='px-20 py-32 rounded-lg'
							style={{ backgroundColor: color }}
						></button>
					</span>
					<h1 className='mt-4 font-bold'>Solid</h1>
					<div className='flex flex-col'>
						<h1 className='mb-2 mt-4 font-bold text-center'>
							Background Color
						</h1>
						<div className='flex justify-center'>
							<button
								onClick={toggleBgColorPicker}
								className='mr-3 p-6 inline-flex rounded-md'
								style={{ backgroundColor: color }}
							>
								<span></span>
							</button>
							<input
								className='px-2 bg-gray-200 rounded-md text-black'
								value={color}
								onChange={handleBgInputChange}
								type='text'
								placeholder={color}
								onBlur={handleBgInputBlur}
							/>
						</div>
						{showBgColorPicker && (
							<SwatchesPicker
								color={bgColor}
								onChangeComplete={handleBgColorChange}
							/>
						)}
						<p className='text-center mt-6'>
							Need color inspo? Check{' '}
							<span>
								<a
									className='text-indigo-400'
									href='https://coolors.co/palettes/trending'
									target='_blank'
									rel='noopener noreferrer'
								>
									here.
								</a>
							</span>
						</p>
					</div>
					<h1 className='mt-10'>More styles coming soon...</h1>
				</div>
			</div>
		</>
	);
};

export default Background;
