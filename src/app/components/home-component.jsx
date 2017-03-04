import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const Home = ({
	jobs, education, projects, expandCard
	 }) => {
	return (
		<div className="top-container">
			<div className="self-promotion-header">
				<h1> Scott Gangemi </h1>
				<p> Really good at Googling problems away! </p>
			</div>
			<div className="work-container">
				<h1> Work </h1>
				{jobs.map(function(job) {
					return (
						<div className="card-container" onClick={() => expandCard()}>
							<div className="top-content">
								<h1 className="top-title"> {job.CompanyName} </h1>
								<p className="top-title"> {job.Role} </p>
								<p className="top-subtitle"> {job.TimePeriod} </p>
							</div>
							<div className="bottom-content">
								<ul className="bottom-list">
								{job.Achievements.map(function(achievement) {
									return (
										<li className="bottom-list-item"> {achievement} </li>
									)
								})}
								</ul>
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
				}.bind(this))}
			</div>
			<div className="education-container">
				<h1> Education </h1>
				{education.map(function(school) {
					return (
					<div className="card-container" onClick={() => expandCard()}>
						<div className="top-content">
							<h1 className="top-title"> {school.University} </h1>
							<h1 className="top-title"> {school.Degree} </h1>
							<p className="top-subtitle"> {school.Period} </p>
						</div>
						<div className="bottom-content">
							<p className="bottom-title">Major in {school.Major} </p>
							<ul className="bottom-list">
								{school.Highlights.map(function(highlight) {
									return (
										<li className="bottom-list-item"> {highlight} </li>
									)
								})}
							</ul>
						</div>
					</div>
					)
				}.bind(this))}
			</div>
			<div className="projects-container">
				<h1> Projects </h1>
				{projects.map(function(project) {
					console.log(project)
					return (
						<div className="card-container" onClick={() => expandCard()}>
							<div className="top-content">
								<h1 className="top-title"> {project.Name} </h1>
								<p className="top-subtitle"> {project.Description} </p>
								<p className="top-subtitle"> {project.DateCreated} </p>
							</div>
							<div className="bottom-content">
								<p className="bottom-info"> {project.Reflection} </p>
								<ul className="bottom-list">
									{project.TechUsed.map(function(tech){
										return (
											<li className="bottom-list-item"> {tech} </li>
										)
									})}
								</ul>
							</div>
						</div>
					)
				}.bind(this))}
			</div>
		</div>
	)
}

export default Home

//Object.keys(this.state.items).forEach(function (key) {
	//<HOC category={category}/>