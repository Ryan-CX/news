import { ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react';
import { SideBar } from './SideBar';
import { useState } from 'react';
import { List } from '@material-ui/icons';
type Props = {};

export const Layout: React.FC<Props> = ({ children }) => {
	const [showSideBar, setShowSideBar] = useState(true);

	return (
		<div className='layout flex w-full'>
			<div className='sidebar'></div>
			<div className='content'></div>
			<SideBar showSideBar={showSideBar} />
			<div className='w-full'>
				<div className='header bg-primary h-20 w-full flex items-center'>
					<List
						style={{ fontSize: 60 }}
						className='folding'
						onClick={() => setShowSideBar(!showSideBar)}
					/>
				</div>
				<div className='content'> {children}</div>
			</div>
		</div>
	);
};
