import locationIcon from "../images/location-icon.png"

export default function Entry(props){
    console.log(props)
    return (
        <article className="entry">
            <img src = {props.img} alt = {props.title} className="entry-img"/>
            <div className="entry-details">
                <img src= {locationIcon} alt="location icon" className="entry-location-icon"/>
                <span>{props.country}</span>
                <h2>{props.title}</h2>
                <p className="entry-date">{props.date}</p>
                <p className="entry-description">{props.description}</p>
            </div>
        </article>
    )
}