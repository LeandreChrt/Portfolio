import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Main';
import MainProfile from './components/Profile/Main';
import MainHome from './components/Home/Main';
import MainProject from './components/Projects/Main';

function App() {

	const [language, setLanguage] = useState("fr");
	const [sidenavActive, setSidenavActive] = useState(false);

	useEffect(() => {
		document.title = "Portfolio - Léandre Chretiennot"
	}, [])

	return (
		<div className='MainContainer'>
			<Navbar setSidenavActive={setSidenavActive} sidenavActive={sidenavActive} language={language} setLanguage={setLanguage} />
			<div className={`mainApp ${sidenavActive ? "sidenavActive" : ""}`}>
				<Routes>
					<Route path='/Portfolio' element={<MainHome language={language} />} />
					<Route path='/Portfolio/profile' element={<MainProfile language={language} />} />
					<Route path='/Portfolio/projects' element={<MainProject language={language} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;