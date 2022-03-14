import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

type NewsItem = {
	_id: string;
	title: string;
	description: string;
	content: string;
	postedBy?: string;
	createdAt?: string;
};

const HomePage: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
	const navigate = useNavigate();
	const getData = async () => {
		setLoading(true);
		try {
			const result = await axios.get('/api/newsitems/getallnewsitems');
			setLoading(false);
			setNewsItems(result.data);
			toast.success('Successfully fetched news items');
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<Layout>
			{loading && <Spinner />}
			{newsItems.length > 0 && (
				<div className='grid grid-cols-2 sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-10'>
					{newsItems.map((item, i) => {
						return (
							<div
								key={i}
								className='shadow-md p-3 border cursor-pointer'
								onClick={() => navigate(`/newsdesc/${item._id}`)}
							>
								<h1 className='text-primary text-lg font-bold'>{item.title}</h1>
								<p>{item.description}</p>
								<div className='flex justify-end flex-col items-end'>
									<span className='text-gray-500 text-sm'>
										By:{item.postedBy}
									</span>
									<span className='text-gray-500 text-sm'>
										By:{item.createdAt?.slice(0, 10)}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</Layout>
	);
};
export { HomePage };
