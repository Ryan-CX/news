import { Layout } from 'src/components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../components/Spinner';

type NewsItem = {
	_id: string;
	title: string;
	description: string;
	content: string;
	postedBy: {
		email: string;
		_id: string;
	};
	createdAt?: string;
};

const PostedNews: React.FC = () => {
	const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(false);
	const user = JSON.parse(localStorage.getItem('token') || '');
	const getData = async () => {
		setLoading(true);
		try {
			const result = await axios.post('/api/newsitems/getnewsbyid', {
				userid: user._id,
			});
			setLoading(false);
			setNewsItems(result.data);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return <Layout>{loading && <Spinner />}</Layout>;
};

export { PostedNews };
