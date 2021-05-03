
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ankan",
  title: "Hi, I'm Ankan Lahiri",
  subTitle: emoji("A passionate Front-End Developer 🚀 having an experience of building Website with Web application with Html/CSS/Bootstrap/React-Js/ Nodejs / Wordpress and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1s7UQtb34FeppAnmIdTXY1CmrqGQiXEfc/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/SaklainTushar",
  linkedin: "https://www.linkedin.com/in/md-golam-saklain-8b714a179//",
  gmail: "saktus3@gmail.com",
  facebook: "https://www.facebook.com/mgstushar",
  instagram: "https://www.instagram.com/saklain_tushar/",
  twitter: "https://twitter.com/MdSkalain/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap4",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "jsp",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "servlet",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "android(java)",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Huai'an Institute of Technology",
      desc: "Huai'an, Jiangsu, China",
      logo: require("./assets/images/hyit.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2017 - April 2021",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Rajshahi Govt. City College",
      logo: require("./assets/images/rcc.png"),
      subHeader: "Higher Secondary Certificate in Science",
      duration: "2013 - 2015",
      desc: "Rajshahi, Bangladesh",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    },
    {
      schoolName: "Rowhadah High School",
       logo: require("./assets/images/rhs.png"),
      subHeader: "Secondary School Certificate in Science",
      duration: "2007 - 2013",
      desc: "Sirajganj, Bangladesh",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Red & White Innovations",
      companylogo: require("./assets/images/ic.jpg"),
      date: "September 2020 – Present",
      desc: "",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
     {
       role: "Participant",
       company: "IEEE YESIST12",
       companylogo: require("./assets/images/iee.png"),
       date: "February 2020 – Agust 2020",
       desc: ""
     }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "fc138992f81bca435e2b002d04136c881ae66491",
  githubUserName: "SaklainTushar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "My Recent Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/projectsacademia.webp"),
      link: "https://www.projectsacademia.com/"
    },
    {
      image: require("./assets/images/New-Logo.webp"),
      link: "http://event.redandwhitebd.com/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IEEE YESISTS12 Finalist",
      subtitle: "Developed Android Application and Web Application for Corona Pandemic. Finalist from 70 Projects from 10 different countries.",
      image: require("./assets/images/ieee.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1mm2rntN76h1z4A1W3-Fv0ImXxpG0s-L8/view?usp=sharing" }
        // ,
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "ACT COVID19: NATIONAL CALL Finalist",
      subtitle: "Developed an Android Application named HEALTH CODE BANGLADESH.Finalist from 1880 Projects from Bangladesh.",
      image: require("./assets/images/a2i.webp"),
      footerLink: [{ name: "Project is here", url: "https://callfornation.com/showcase/details/eyJpdiI6ImRrSm5hTjhIbnZkdUZOS1NrRis0L3c9PSIsInZhbHVlIjoib3JSRXdORjgxc3V1NGZnWTNhdEwyZz09IiwibWFjIjoiZjU3NDhkMGM1OWE4ODUwMmVlZjdmMWJmOWUzYTFjYWE1OTUzMmNlMDZkYzZmN2UyMWQxYWRiYTFhZTZmNTkyNiJ9" }]
    },

    {
      title: "Digital Security",
      subtitle: "Completed Certifcation from Deigital Security Agency.",
      image: require("./assets/images/degital.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1bqD_m50Y_GEwrNTkSQIX-b8oBHw_MmcF/view?usp=sharing" }
        // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "#",
      title: "Title Here",
      description: "Description Here"
    },
    {
      url: "#",
      title: "Title Here",
      description: "Description here"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talk to Hire",
  subtitle: emoji("If you think to develop web or android application, Then you can talk to me for develop or consultancy."),

  talks: [
    {
      title: "Build Your application & grow your business.",
      subtitle: "connect to me with facebook or email",
      slides_url: "mailto:saktus3@gmail.com",
      event_url: "https://www.facebook.com/mgstushar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801784563439",
  emailAddress: "saktus3@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName : "MdSkalain", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
