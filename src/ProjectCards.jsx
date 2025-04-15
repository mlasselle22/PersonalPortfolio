import logo from './logo.svg';
import './ProjectCards.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Projects } from "./Projects";

export function ProjectCards() {
    const [projs, setProjs] = useState(Projects);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to handle button click and show modal
    const handleShowDescription = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <div className="projBg">
            <h1>Projects</h1>
            <div className="projCards">
                <div className="grid">
                    {/* Render the projects dynamically */}
                    {projs.map((product, index) => (
                        <div key={index} className="card">
                            <div className="card-image-container">
                            <img src={`${process.env.PUBLIC_URL}${product.imageSrc}`} alt={product.name} />
                            </div>
                            <p className="card-title">{product.name}</p>
                            <p className="card-des">{product.goal}</p>
                            <button 
                                className="button" 
                                onClick={() => handleShowDescription(product)}
                            >
                                <p className="button-text">Read More</p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal to show project description */}
            {showModal && selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={handleCloseModal}>&times;</span>
                        <h3>{selectedProject.name}</h3>
                        <p>{selectedProject.design}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
