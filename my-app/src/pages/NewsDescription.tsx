import { Layout } from '../components/Layout';
import { convertFromRaw } from 'draft-js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsItem {
	_id: string;
	title: string;
	description: string;
	content: string | any;
	postedBy: string;
	createdAt: string;
}

const NewsDescription: React.FC = () => {
	const { newsid } = useParams();

	const [newsItem, setNewsItem] = useState<NewsItem>({
		_id: '',
		title: '',
		description: '',
		content: '',
		postedBy: '',
		createdAt: '',
	});
	const getData = async () => {
		try {
			const result = await axios.post('/api/newsitems/getnewsbyid', {
				newsid: newsid,
			});

			setNewsItem(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Layout>
			<h1>{newsItem.title}</h1>
			<p>{newsItem.description}</p>

			<p>{newsItem.content}</p>
		</Layout>
	);
};

export { NewsDescription };
