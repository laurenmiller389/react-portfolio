//map thru the data to display images and links
function ProjectComponent({title, link, image}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image}></img>
            <a href={link}></a>
        </div>
    );
}

export default function Portfolio() {
    const projects = [
        {
            title: "The Breakroom",
            image: "./theBreakroom.png",
            link: "https://sefenydiaz.github.io/test-arcade/index.html"
        },
        {
            title: "Movie Mentor",
            image: "./movieMenor",
            link: "https://github.com/tegaomare/moviementor"
        },
        {
            title: "Work Day Scheduler",
            image: "./workDayScheduler",
            link: "https://github.com/laurenmiller389/hw5-workday"
        },
    ];

    return (
        {projects.map((project,index) => (
            <ProjectComponent 
            key={index} 
            title={project.title} 
            link={project.link}
            image={project.image}
            />
    ))}
    )
}