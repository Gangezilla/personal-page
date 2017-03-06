import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Accordion, AccordionSection } from 'redux-accordion';

const Home = ({
	jobs, education, projects
	 }) => {
	return (
		<div className="top-container">
			<div className="content-container">
				<div className="contact-me">
					<a href="http://github.com/Gangezilla"> GitHub </a>
					<a href="https://www.linkedin.com/in/scott-gangemi-18146198/"> LinkedIn </a>
					<img src="" />
					<p> s.gangemi@me.com </p>
					<p> 0431 987 232 </p>
				</div>
				<div className="self-promotion-header">
					<div>
						<h1> Scott Gangemi </h1>
						<p> Web Developer + Problem Solver </p>
					</div>
					<div>
						<img src="http://www.placehold.it/150x150"/>
					</div>
				</div>
			</div>
			<div className="blurb">
				<img src="http://placehold.it/250x250"/>
				<div className="inner-blurb">
					<h1> Hey there, </h1>
					<p> I’m Scott. That's me over there. I’m a front end developer + designer and I’m passionate about solving cool problems, teaching, and seeing the impact of awesome work.</p>
					<p> I’m interested in designing and creating fantastic experiences that people will love, and then want to experience again and again. </p>
					<p> You can check out some of the things I've done below, or if you want a quick resume summary, you can grab that right here. </p>
					<a className="btn btn-blurb" href="#"> Resume </a>
				</div>
			</div>
			<div className="accordion-container">
				<div className="container work-container">
					<h1 className="title"> Work </h1>
					<Accordion singleOpen={true} styles={false}>
						{jobs.map(function(job) {
							return (
								<AccordionSection title={job.CompanyName}>
									<div className="top-content">
										<p className="top-title"> {job.Role} </p>
										<p className="top-subtitle"> {job.TimePeriod} </p>
									</div>
									<div className="bottom-content">
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
								</AccordionSection>
							)
						}.bind(this))}
					</Accordion>
				</div>
				<div className="container education-container">
					<h1 className="title"> Education </h1>
					<Accordion singleOpen={true} styles={false}>
					{education.map(function(school) {
						return (
						<AccordionSection title={school.University}>
							<div className="card-container">
								<div className="top-content">
									<p className="top-title"> {school.Degree} </p>
									<p className="top-subtitle"> {school.Period} </p>
								</div>
								<div className="bottom-content">
									<h2 className="bottom-title">Major in {school.Major} </h2>
									<h2 className="bottom-title"> Highlights </h2>
									<ul className="bottom-list">
										{school.Highlights.map(function(highlight) {
											return (
												<li className="bottom-list-item"> {highlight} </li>
											)
										})}
									</ul>
								</div>
							</div>
						</AccordionSection>
						)
					}.bind(this))}
					</Accordion>
				</div>
				<div className="container projects-container">
					<h1 className="title"> Projects </h1>
					<Accordion singleOpen={true} styles={false}>
						{projects.map(function(project) {
							console.log(project)
							return (
								<AccordionSection title={project.Name}>
									<div className="card-container">
										<div className="top-content">
											<p className="top-subtitle description"> {project.Description} </p>
											<p className="top-subtitle"> {project.DateCreated} </p>
										</div>
										<div className="bottom-content">
											<h2> Reflection </h2>
											<p className="bottom-info"> {project.Reflection} </p>
											<h2> Tech Used </h2>
											<ul className="bottom-list">
												{project.TechUsed.map(function(tech){
													return (
														<li className="bottom-list-item"> {tech} </li>
													)
												})}
											</ul>
										</div>
										<div className="btn-container">
											<a href={project.Github} className="btn"> Github </a>
											<a href={project.Link} className="btn"> View </a>
										</div>
									</div>
								</AccordionSection>
							)
						}.bind(this))}
					</Accordion>
				</div>
			</div>
			<div className="footer">
				<img src="http://placehold.it/200x200"/>
			</div>
		</div>
	)
}

export default Home