import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import text from "./Text.json"

export default function Navbar(props) {

	const language = props.language

	const handleChangeLanguage = selectedOption => {
		console.log(selectedOption)
		props.setLanguage(selectedOption.value)
	}

	const colourStyles: StylesConfig = {
		control: (styles) => ({ ...styles, backgroundColor: 'var(--PrimaryColor)', boxShadow: "none", borderColor: "var(--SecondaryColor)" }),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isDisabled
					? undefined
					: isSelected
						? "var(--SelectedColor)"
						: isFocused
							? "var(--FocusedColor)"
							: undefined,
				color: "var(--PrimaryColor)",
				cursor: 'default',

				':active': {
					...styles[':active'],
					backgroundColor: !isDisabled
						? isSelected
							? "var(--SelectedColor)"
							: 'var(--TextColor)'
						: undefined,
				},
			};
		},
		singleValue: (styles, { data }) => ({ ...styles, color: 'var(--TextColor)' }),
	};

	return (
		<div id='navbarContainer'>
			<div className={`sidenav ${props.sidenavActive ? "active" : ""}`}>
				<Select
					classNames={{
						control: (state) =>
							state.isFocused ? 'cleanBorder' : '',
					}}
					className="languages"
					defaultValue={text.languagues[0]}
					isDisabled={false}
					isLoading={false}
					isClearable={false}
					isRtl={false}
					isSearchable={false}
					options={text.languagues}
					styles={colourStyles}
					onChange={handleChangeLanguage}
				/>
				<a onClick={x => props.setSidenavActive(false)} className="close clickable">&larr;</a>
				<ul>
					<li>
						<Link to={"Portfolio/"}>{text.accueil[language]}</Link>
					</li>
					<li>
						<Link to={"Portfolio/profile"}>{text.profile[language]}</Link>
					</li>
					<li>
						<Link to={"Portfolio/projects"}>{text.projects[language]}</Link>
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