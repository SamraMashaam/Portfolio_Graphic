import '../styles/Projects.css';
import { useState } from 'react';

function Projects(){

    //project showcase
    //each project is wrapped in project card div
    //selectedProject: if set, it will display a card with an overlay where user can
    //see the image and additional description
    //View Details button sets selectedProject

    const [selectedProject, setSelectedProject] = useState(null);
    return(
        <>
        <div className="projects">
            <div className="project-card"> 
                <h3>Naatiya Mushaira</h3>
                <p>Post made for FAST Literary Society to advertise their Naatiya-Mushaira event</p>
                <button onClick={() => setSelectedProject({
                    title: "FLS Series",
                    description: "Its style is meant to resemble traditional invitation cards like those used for weddings and other important events.",
                    image: "/Mushaira.png" 
                    })}>
                    View Details
                </button>
            </div>
            <div className="project-card">
                <h3>Tehriri Muqaabla</h3>
                <p>Yearly Recap Post made for FAST Literary Society</p>
                <button onClick={() => setSelectedProject({
                    title: "FLS Series",
                    description: "A recap post for FLS's instagram, featuring images from their Tehriri Muqaabla. A style of old camera film and scrapbooking is used.",
                    image: "/4.png" 
                    })}>
                    View Details
                </button>
            </div>
            <div className="project-card">
                <h3>FLS Orientation 2025</h3>
                <p>Yearly Recap Post made for FAST Literary Society</p>
                <button onClick={() => setSelectedProject({
                    title: "FLS Series",
                    description: "A recap post for FLS's instagram, featuring images from their 2025 Orientation session. A scrapbook-like stlye is used.",
                    image: "2.png" 
                    })}>
                    View Details
                </button>
            </div>
                <div className="project-card">
                <h3>FLS Newsletter Release</h3>
                <p>A release post for FLS's Newsletter</p>
                <button onClick={() => setSelectedProject({
                    title: "FLS Series",
                    description: "Inspired by full-page advertisements featured in old black-and-white newspapers and magazines.",
                    image: "Release.png" 
                    })}>
                    View Details
                </button>
            </div>
            <div className="project-card">
                <h3>Scavenger Hunt Flyer</h3>
                <p>Flyer made for FLS's Scavenger Hunt event</p>
                <button onClick={() => setSelectedProject({
                    title: "FLS Series",
                    description: "Based on old maps, especially treasure maps as seen in popular media.",
                    image: "Scavenger Hunt.png" 
                    })}>
                    View Details
                </button>
            </div>
        </div>
        {selectedProject && (
            <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                {selectedProject.image && (
                    <img src={selectedProject.image} alt={selectedProject.title} />
                )}
                <button onClick={() => setSelectedProject(null)}>Close</button>
                </div>
            </div>
        )};
    </>
    );
}

export default Projects;