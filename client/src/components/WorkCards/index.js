import './index.css'
import github from '../../assets/icons/github.svg';


const WorkCards = () => {
    const works = [
        {
            title: "ShopShop",
            github: "https://github.com/RayTakemura/shop-shop",
            deployedLink: "https://shop-shop-rst.herokuapp.com/",
            description: "E-commerce website. This app allows users to add items into their shopping cart. To checkout, the user must either sign-up or log into their account."
        },
        {
            title: "StreamSearch",
            github: "https://github.com/RayTakemura/StreamSearch",
            deployedLink: "https://awesome-stream-search.herokuapp.com/",
            description: "MERN stack group project. The user can search their favorite movies/stream of any streaming platforms and access them directly to the link to the desired show."
        },
        {
            title: "BookSearch",
            github: "https://github.com/RayTakemura/book-seach-engine",
            deployedLink: "https://shrouded-basin-87924.herokuapp.com/",
            description: "MERN stack project that allows users to search for their favorite books and save the book into their list if they're logged in."
        },
        {
            title: "WeatherDashboard",
            github: "https://github.com/RayTakemura/calendarApp",
            deployedLink: "https://raytakemura.github.io/calendarApp/",
            description: "Calendar app all done in vanilla HTML, CSS, and JavaScript files. This project uses third-party API such as Bootstrap and jQuery"
        },
        {
            title: "CodeQuiz",
            github: "https://github.com/RayTakemura/codeQuiz",
            deployedLink: "https://raytakemura.github.io/codeQuiz/",
            description: "A simple quiz in single page DOM manipulation."
            
        },
    ];

    return (
        <>
            {
                works.map((work, i) => {
                    return (
                        <div key={i} className="work ">
                            <h3>{work.title}</h3>
                            <div className="work-container">
                                <img className="proj-img" src={require(`../../assets/images/projects/${work.title}.png`).default} alt={work.title}/>
                                <div className="overlay">
                                    <div className="text">
                                        <a className="link" href={work.deployedLink}>Deployed Link</a>
                                        <a className="link" href={work.github}><img style={{width:"28px"}} className="github" src={github} alt="github"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </>
    )
}

export default WorkCards;