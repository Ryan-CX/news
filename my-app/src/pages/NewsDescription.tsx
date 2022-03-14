import { Layout } from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { stateToHTML } from 'draft-js-export-html';
import ReactHtmlParser from 'react-html-parser';

type NewsItem = {
	_id: string;
	title: string;
	description: string;
	content: string;
	postedBy?: string;
	createdAt?: string;
};

const NewsDescription = () => {
	const { newsid } = useParams();

	const [newsItem, setNewsItem] = useState<NewsItem | any>();
	const getData = async () => {
		try {
			const result = await axios.post('/api/newsitems/getnewsbyid', {
				newsid: newsid,
			});

			setNewsItem(result.data);
			console.log(newsItem.title);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	return <Layout></Layout>;
};

export { NewsDescription };
