import { Routes, Route } from 'react-router-dom'
import Nav from './components/na/NAV';
import Footer from './components/fo/FOOTER';
import Home from './components/ho/HOME';
import Blog from './components/bl/BLOG';
import PostDetails from './components/po-de/POSTDETAILS';
import './App.css';
///////////////////////////////////////////////////////////
let App = () => {
	return (
		<div id='YOUTHINKLOGO3'>
			<div id='YOUTHINKLOGO2'>
				<Nav />
				<Routes>
					<Route path='/' exact element={<Home />}></Route>
					<Route path='/blog' exact element={<Blog />}></Route>
					<Route path='/blog/:slug' element={<PostDetails />}></Route>
				</Routes>
				<Footer />
			</div>
		</div>
	);
};
///////////////////////////////////////////////////////////
export default App;
///////////////////////////////////////////////////////////