
const MyLinks = () => {

  return (
    <div className='bg-white rounded-3xl p-6 w-full shadow-sm flex flex-col'>
			<form className=''>
				<h1 className='font-bold'>Title</h1>
				<p>url</p>
			</form>
			<div className='flex justify-between'>
        <div className="text-xl text-gray-400">
          <button><i className='bi bi-image pr-3'></i></button>
          <button><i className='bi bi-trash3'></i></button>
				</div>
			</div>
		</div>
  )
}

export default MyLinks