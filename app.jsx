import Header from "./components/header";
import Entry from "./components/entry";
import data from "./data";

export default function App(){

    const entryElements= data.map((item) => {
        return (
            <Entry 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="container">
            <Header />
            <main>
                {entryElements}
            </main>
        </div>
    )
}