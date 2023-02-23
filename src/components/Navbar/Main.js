import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import text from "./Text.json"

export default function Navbar(props) {

	const language = props.language

	return (
		<div id='navbarContainer'>
			<div className={`sidenav ${props.sidenavActive ? "active" : ""}`}>
				<a onClick={x => props.setSidenavActive(false)} className="close clickable">&larr;</a>
				<ul>
					<li>
						<Link to={""}>{text.accueil[language]}</Link>
					</li>
					<li>
						<Link to={"profile"}>{text.profile[language]}</Link>
					</li>
					<li>
						<Link to={"projects"}>{text.projects[language]}</Link>
					</li>
				</ul>
			</div>

			<a onClick={x => props.setSidenavActive(true)} className="burgerContainer clickable">
				<span className="burger-icon">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</a>
		</div>
	);
}