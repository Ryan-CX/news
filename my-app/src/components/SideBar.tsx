import { Link, useLocation } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import FiberNewIcon from '@material-ui/icons/FiberNew';
interface Props {
	showSideBar: boolean;
}

export const SideBar: React.FC<Props> = ({ showSideBar }) => {
	const location = useLocation();

	const menuItems = [
		{
			title: 'Home',
			path: '/home',
		},
		{
			title: 'Posted',
			path: '/posted',
		},
		{
			title: 'AddNews',
			path: '/addnews',
		},
		{
			title: 'Profile',
			path: '/profile',
		},
		{
			title: 'Logout',
			path: '/logout',
		},
	];
	return (
		<div
			className={`min-h-screen max-h-full transition-all duration-300 bg-primary h-screen flex flex-col overflow-hidden ${
				showSideBar ? `w-60` : 'w-0'
			}`}
		>
			<div>
				<h1 className='text-4xl font-bold mt-8 text-gray-200'>
					<FiberNewIcon style={{ fontSize: 50 }} />
					NEWS
				</h1>
			</div>
			<div className='flex flex-col mt-20'>
				{menuItems.map((item, i) => {
					return (
						<Link
							key={i}
							to={`${item.path}`}
							className={`text-gray-100 hover:bg-gray-400 py-5 text-sm
                    ${
											location.pathname.includes(item.path) &&
											`bg-[#6172cf] text-yellow-200`
										}`}
						>
							<LanguageIcon className='mr-3' />
							{item.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
