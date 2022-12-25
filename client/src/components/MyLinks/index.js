
const MyLinks = ({links}) => {

	return (
		<>
			{links && links.map((link) => (
			<div key={link._id} className='bg-white rounded-3xl p-6 mb-4 w-full shadow-sm flex flex-col'>
				<div className=''>
					<h1 className='font-bold'>{link.title}</h1>
					<p>{link.url}</p>
				</div>
				<div className='flex justify-between'>
					<div className="text-xl text-gray-400 mt-2">
						<button><i className='bi bi-image pr-3'></i></button>
						<button><i className='bi bi-trash3'></i></button>
					</div>
				</div>
			</div>
			))}
		</>
  )
}

export default MyLinks