import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	const list = [
		{ id: '1', text: 'About', nav: 'about' },
		{ id: '2', text: 'Privacy', nav: 'privacy' },
		{ id: '3', text: 'ToS', nav: 'terms' },
		{ id: '4', text: 'Cookies', nav: '' },
	];

	return (
		<footer className='pt-5'>
			<ul className='flex justify-center text-indigo-800 text-sm font-unbounded'>
				{list.map((item) => (
					<li
						onClick={() => navigate(`/${item.nav}`)}
						className='px-2'
						key={item.id}
					>
						{item.text}
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
