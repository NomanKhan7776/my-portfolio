import project1 from "../assets/projects/project-1.PNG";
import project2 from "../assets/projects/project-2.PNG";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `As a frontend developer, I specialize in creating visually appealing and responsive user interfaces. My skill set includes HTML and CSS for structuring and styling web pages, Bootstrap and Tailwind CSS for efficient and modern design, and JavaScript for adding interactivity. I leverage React to build dynamic, component-based applications and utilize Redux and Redux Toolkit for managing state effectively. I'm proficient in using Git and GitHub for version control and collaboration, and I have experience integrating APIs to connect frontend applications with backend services.`;

export const ABOUT_TEXT = `
As a skilled Frontend Developer, I focus on transforming ideas into engaging digital experiences. My expertise in HTML, CSS, Bootstrap, and Tailwind CSS allows me to create responsive and visually appealing web interfaces that captivate users. I leverage JavaScript and React to build dynamic and interactive applications, ensuring smooth and intuitive user interactions. My proficiency with Redux and the Redux Toolkit enhances state management, allowing for scalable and maintainable code. With a solid grasp of Git and GitHub, I maintain efficient workflows and collaborate seamlessly on projects. My experience with APIs empowers me to integrate diverse functionalities into the frontend, delivering well-rounded and high-performing web applications. I am always eager to learn and adapt, continuously improving my skill set to stay at the forefront of frontend development.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Dec 2023",
    role: "IT Support Intern",
    company: "SECP",
    description: `Provide technical assistance and support for incoming queries and issues related to computer systems, software, and hardware.
Assist in the installation, configuration, and maintenance of software applications and systems.Create and maintain documentation for IT systems, processes, and procedures.`,
    technologies: ["windows", "sofware", "Hardware"],
  },
  {
    year: "Feb 2024 - Apr 2024",
    role: "Frontend Developer Intern",
    company: "Aptech",
    description: `As a frontend developer intern, I am passionate about crafting dynamic and visually engaging web experiences. With proficiency in HTML, CSS, and JavaScript, I excel in building responsive and user-friendly interfaces. My experience with frameworks and libraries like React, Redux, and Redux Toolkit enables me to create scalable and maintainable applications. I also utilize Tailwind CSS and Bootstrap to streamline development and ensure a consistent design. My skills in version control with Git and collaboration on GitHub further enhance my ability to work effectively in team environments. I am adept at integrating APIs to enrich web applications and am committed to continuous learning and applying best practices in frontend development.`,
    technologies: [
      "HTML",
      "CSS",
      "javascript",
      "React",
      "Redux",
      "Tailwind",
      "Bootstrap",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Myntra Clone",
    image: project1,
    description:
      "This e-commerce web application is developed with React and Redux, leveraging Tailwind CSS for a responsive and visually appealing interface. It includes dynamic product listings fetched from a local server, with user interactions managed through Redux for efficient state handling. The app features a shopping bag where users can add and remove items, with real-time updates reflected in the UI. A custom hook is used for calculating and displaying bag summary details. The project demonstrates a comprehensive approach to modern frontend development, integrating various libraries and techniques to deliver a robust shopping experience.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Javascript",
      "Redux",
      "Tailwind",
      "Bootstrap",
      "Git",
    ],
    projectLink: "https://github.com/NomanKhan7776/myntra-clone",
  },
  {
    title: "To Do App",
    image: project3,
    description:
      "This project is a React-based to-do list application utilizing Redux for state management. It features an input form to add or update to-do items with a description and date, and allows users to edit or delete existing entries. A dark mode toggle is integrated for a customizable user experience. The app’s user interface is styled with Bootstrap, offering a clean and responsive layout. Redux actions and reducers manage the to-do list state, including adding, editing, and deleting items, as well as toggling the dark mode feature.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Bootstrap",
      "React-Redux",
    ],
    projectLink:
      "https://github.com/NomanKhan7776/React_Projects/tree/main/To-Do-Redux%20copy",
  },
  {
    title: "Currency Converter",
    image: project2,
    description:
      "This React-based currency conversion app enables users to convert amounts between different currencies using real-time exchange rates fetched via a custom hook. It features input fields for entering amounts and selecting currencies, with functionality to swap currencies and display conversion results. The app offers a clean, user-friendly interface with a background image and responsive design.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Custom Hooks"],
    projectLink:
      "https://github.com/NomanKhan7776/React_Projects/tree/main/currency%20Converter",
  },
];

export const CONTACT = {
  address: "Karachi, Pakistan ",
  phoneNo: "+92 308 3235 723 ",
  email: "nknomankhan30@gmail.com",
};
