import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Work = ({
	job, isOpen, openSection, closeSection
	 }) => {
	const expandCard = () => {
		if (isOpen == false) {
			openSection()
		}

		else {
			closeSection()
		}
	}

	return (
		<div className="card-container">
			<div className="top-content" onClick={(e) => expandCard(e)}>
				<h1 className="top-title"> {job.CompanyName} </h1>
				<p className="top-title"> {job.Role} </p>
				<p className="top-subtitle"> {job.TimePeriod} </p>
			</div>
			<div className={isOpen ? 'bottom-content is-open' : 'bottom-content is-closed'}>
				<h2> Achievements </h2>
				<ul className="bottom-list">
				{job.Achievements.map(function(achievement) {
					return (
						<li className="bottom-list-item"> {achievement} </li>
					)
				})}
				</ul>
				<h2> Functions </h2>
				<ul className="bottom-list">
					{job.Responsibilities.map(function(resp) {
						return (
							<li className="bottom-list-item"> {resp} </li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Work