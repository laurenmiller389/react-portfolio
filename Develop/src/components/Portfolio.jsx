//map thru the data to display images and links
function ProjectComponent({title, link, image}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image}></img>
        </div>
    );
}

export default function Portfolio() {
    const projects = [
        {
            title: "Random",
            link: "random link",
            image: "image src"
        },
        {
            title: "Random",
            link: "random link",
            image: "image src"
        },
    ];

    return (
        projects.map((project,index) => (
            <ProjectComponent key={index} title={project.title} link={project.link}/>
    ))
    )
}