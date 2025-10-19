import globe from "../images/globe.jpg"

export default function Header(){
    return (
        <header>
            <img src={globe} alt="globe" className="header-img"/>
            <h1 className="header-title">Tourzy</h1>
        </header>
    )
}