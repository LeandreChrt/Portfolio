import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Main';
import MainProfile from './components/Profile/Main';
import MainHome from './components/Home/Main';

function App() {

	const [language, setLanguage] = useState("en");
	const [sidenavActive, setSidenavActive] = useState(false);

	return (
		<div className='MainContainer'>
			<Navbar setSidenavActive={setSidenavActive} sidenavActive={sidenavActive} language={language} />
			<div className={`mainApp ${sidenavActive ? "sidenavActive" : ""}`}>
				<Routes>
					<Route path='/' element={<MainHome language={language} />} />
					<Route path='/profile' element={<MainProfile language={language} />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;