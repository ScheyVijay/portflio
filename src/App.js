import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
	return (
		<section>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="Gallery" element={<Gallery />} />
						<Route path="Projects" element={<Projects />} />
						<Route path="Resume" element={<Resume />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</section>
	)
}

export default App;
