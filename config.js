module.exports = {
  pathPrefix: "",
  siteUrl: "https://portfolio.abhisheksrivastava.com",
  siteTitle: "Abhishek Srivastava",
  siteDescription: "Logbook of a software developer",
  author: "Abhishek Srivastava",
  postsForArchivePage: 3,
  defaultLanguage: "en",
  disqusScript: process.env.DISQUS_SCRIPT || "",
  pages: {
    home: "/",
    blog: "blog",
    contact: "contact",
    resume: "resume",
    tag: "tags",
  },
  social: {
    github: "https://github.com/abhishek2x",
    facebook: "https://www.facebook.com/profile.php?id=100004836158167",
    twitter: "https://twitter.com/Abhishe51428266",
    instagram: "https://www.instagram.com/abhishek._.ab/",
    linkedin: "https://www.linkedin.com/in/abhishek-srivastava-49482a190/",
    medium: "https://medium.com/@abhishek2x",
    // rss: "/rss.xml",
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    "https://getform.io/f/93c1e8c1-48f4-4e2d-99b2-e2a5c7a63977",
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "",

  tags: {
    javascript: {
      name: "javascript",
      description:
        "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
      color: "#f0da50",
      link: "",
      img: "" 
    },
    nodejs: {
      name: "Node.js",
      description:
        "Node.js is a tool for executing JavaScript in a variety of environments.",
      color: "#90c53f",
    },
    rxjs: {
      name: "RxJS",
      description:
        "RxJS is a library for reactive programming using Observables, for asynchronous operations.",
      color: "#eb428e",
    },
    typescript: {
      name: "typescript",
      description:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      color: "#257acc",
    },
    reactjs: {
      name: "reactjs",
      description:
        "React is an open source JavaScript library used for designing user interfaces.",
      color: "#61dbfa",
    },
    gatsby: {
      name: "Gatsby.js",
      description:
        "A framework built over ReactJS to generate static page web application.  ",
      color: "#6f309f",
    },
    html: {
      name: "HTML",
      description:
        "A markup language that powers the web. All websites use HTML for structuring the content.",
      color: "#dd3431",
    },
    css: {
      name: "css",
      description:
        "CSS is used to style the HTML element and to give a very fancy look for the web application.",
      color: "#43ace0",
    },
    python: {
      name: "python",
      description:
        "A general purpose programming language that is widely used for developing various applications.",
      color: "#f9c646",
    },
  },
}
