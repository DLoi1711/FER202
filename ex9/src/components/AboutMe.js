import "bootstrap/dist/css/bootstrap.min.css";
let human = {
    name: "Soobin",
}

const Infor = ({human}) => {
    return(
        <div>
            <div>My name is: {human.name}</div>
        </div>
    )
}

const AboutMe = () => {
    return(
        <div>
            <Infor human={human}/>
        </div>
    )
}

export default AboutMe; 