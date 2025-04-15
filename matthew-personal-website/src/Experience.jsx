import './Experience.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Experience } from "./Experience";
import { useState } from 'react';

export function ExperienceCards() {
    const [experences, setExperences] = useState(Experience);
    
    return (
        <div className="experencesBg">
            <h1>Experience</h1>
            <div className="colorExperenceCards">
            <h2>Work Experience</h2>
            <div className="experenceCards">
                <div className="grid">
                    {/* Render the projects dynamically */}
                    {experences.filter((experence) => experence.type === 'workExperience').map((experence, index) => (
                        <div key={index} className="card">
                            <p className="card-company">{experence.name}</p> 
                            <p className="card-title">{experence.title}</p>
                            <p className='card-date'>{experence.date}</p>
                            <p className="card-des">{experence.Description}</p>
                        </div>
                    ))}
                </div>
                </div>
                </div>
                <h2>Leadership Experience</h2>
                <div className="experenceCards">
                <div className="grid">
                    {/* Render the projects dynamically */}
                    {experences.filter((experence) => experence.type === 'club').map((experence, index) => (
                        <div key={index} className="card">
                            <p className="card-company">{experence.name}</p> 
                            <p className="card-title">{experence.title}</p>
                            <p className='card-date'>{experence.date}</p>
                            <p className="card-des">{experence.Description}</p>
                        </div>
                    ))}
                </div>
                </div>
                <div className='colorExperenceCards'>
                <h2>Certifications</h2>
                <div className="experenceCards">
                <div className="grid">
                    {/* Render the projects dynamically */}
                    {experences.filter((experence) => experence.type === 'cert').map((experence, index) => (
                        <div key={index} className="card">
                            <p className="card-company">{experence.name}</p> 
                            <p className="card-title">{experence.title}</p>
                            <p className='card-date'>Date Issued: {experence.date}</p>
                            <p className="card-des">{experence.Description}</p>
                        </div>
                    ))}
                </div>
                </div>
                </div>
            </div>
    );
}
