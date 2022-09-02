import { Pessoa } from "./components/Pessoa";

const App = () => {

    let list = [
        { name: 'Marcilio Junior', age: 29 },
        { name: 'Michelly', age: 23 },
        { name: 'Edilza', age: 50 },
        { name: 'Marcilio', age: 51 }
    ]

    return (
        <div>
            <h2>Lista de presenca</h2>
            <ul>
                {list.map((item, index) => (
                    <Pessoa key={index} data={item} />
                ))}
            </ul>
        </div>
    )
}

export default App;