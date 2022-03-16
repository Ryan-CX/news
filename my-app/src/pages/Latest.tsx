import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';

type NewsItem = {
	author: string;
	title: string;
	description: string;
	urlToImage: string;
	url: string;
};

const Latest: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
	// const navigate = useNavigate();
	const getData = async () => {
		setLoading(true);
		try {
			const result = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=us&apiKey=e070847634e5491eb300c4130f2317ea`
			);
			setLoading(false);
			setNewsItems(result.data.articles);
			toast.success('Successfully fetched news items');
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	const navigateToExternalUrl = (
		url: string,
		shouldOpenNewTab: boolean = true
	) =>
		shouldOpenNewTab
			? window.open(url, '_blank')
			: (window.location.href = url);

	return (
		<Layout>
			{loading && <Spinner />}
			{newsItems.length > 0 && (
				<div className='grid grid-cols-2 sm:grid-cols-1 gap-5 mx-20 sm:mx-5 my-10'>
					{newsItems.map((item, i) => {
						return (
							<div key={i} className='shadow-md p-3 border '>
								<h1
									className='text-primary text-lg font-bold  cursor-pointer'
									onClick={() => navigateToExternalUrl(item.url)}
								>
									{item.title}
								</h1>
								<p>{item.description}</p>
								{/* img section for rendering url from the obj */}
								<img src={item.urlToImage} alt='news' />
								<div className='flex justify-end flex-col items-end'>
									<span className='text-gray-500 text-sm'>
										By:{item.author}
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
export { Latest };
