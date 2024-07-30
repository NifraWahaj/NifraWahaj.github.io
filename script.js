document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: "MERN Film Review Platform",
            description: "Viridian — Platform for customers to explore the cafe's menu, place orders, reserve a spot, and share their valuable feedback through reviews. Behind the scenes, the cafe manages its menu, reviews and reservations.",
            frameworks: ["MongoDB", "Express.js", "React", "Node.js"],
            githubLink: "https://github.com/NifraWahaj/Viridian",
        },
        {
            name: "Recommender System",
            description: "Cadence — Allows users to input song and receive recommendations for similar tracks based on custom KNN models and custom similarity. Built with Flask for a dynamic web interface and backed by Python scripts for backend functionality.",
            frameworks: ["Python"],
            githubLink: "https://github.com/NifraWahaj/Cadence",
        },
        {
            name: "Cafe Website",
            description: "Gelato-e-Caffè — Platform for customers to explore the cafe's menu, place orders, reserve a spot, and share their valuable feedback through reviews. Behind the scenes, the cafe manages its menu, reviews and reservations.",
            frameworks: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
            githubLink: "https://github.com/NifraWahaj/Gelato-e-Caffe",
        },
        {
            name: "Pharmacy POS",
            description: "Med++ — Desktop application, implemented using Test Driven Development, tailored for streamlined sales and inventory management in pharmacy settings. This robust solution simplifies transactions, tracks inventory, and generates comprehensive reports, ensuring efficient operations within the pharmacy environment.",
            frameworks: ["Java Swing", "JUnit", "MySQL"],
            githubLink: "https://github.com/itsahmadzia/POS",
        },
       
        {
            name: "Music Web Application",
            description: "Melosphere - Developed a Java and Servlet-based web application with a primary focus on software architecture and design patterns. Enabled features such as music streaming, playlist creation, and artist following with a focus on optimal system design.",
            frameworks: ["Java", "Servlets", "Design Patterns"],
            githubLink: "https://github.com/NifraWahaj/Melosphere",
        },
       
        {
            name: "Software Testing",
            description: "Conducted exploratory testing on an existing Spring Boot project. Designed fault-discovery test cases, implemented efficient JUnit tests, and seamlessly integrated continuous testing using GitHub Actions.",
            frameworks: ["Spring Boot", "JUnit", "GitHub Actions", "Selenium"],
            githubLink: "https://github.com/NifraWahaj/E-commerce-project-springBoot",
        },
        {
            name: "Software Requirements Specification",
            description: "Navigate Fast — Guided by industry standards, the Software Requirements Specification (SRS) outlines the requirements for a mobile application aimed at elevating the campus life experience for FAST students. The document delves into system features, nonfunctional requirements, and employs visual aids such as Context Diagrams, Figma mockup designs, and use case diagrams.",
            frameworks: ["SRS", "Figma"],
            githubLink: "https://drive.google.com/file/d/1g910inFmtqilSoGlTiQqVa5VkSTufzyP/view?usp=sharing",
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;
        projectCard.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectCard.appendChild(projectDescription);

        const projectFrameworks = document.createElement('ul');
        projectFrameworks.classList.add('frameworks-list');
        project.frameworks.forEach(framework => {
            const frameworkItem = document.createElement('li');
            frameworkItem.textContent = framework;
            projectFrameworks.appendChild(frameworkItem);
        });
        projectCard.appendChild(projectFrameworks);

        const projectLink = document.createElement('a');
        projectLink.href = project.githubLink;
        projectLink.target = '_blank';
        projectLink.textContent = 'GitHub Repo';
        projectLink.classList.add('github-link');
        projectCard.appendChild(projectLink);

        projectList.appendChild(projectCard);
    });
});
