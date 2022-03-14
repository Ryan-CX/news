import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddNews } from './pages/AddNews';
import { NewsDescription } from './pages/NewsDescription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<div className='App'>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route path='/addnews' element={<AddNews />} />
					<Route path='/newsdesc/:newsid' element={<NewsDescription />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
