import { Button } from "./components/Button";

const App = () => {

    let buttonText = 'Clique aqui'

    const eventButtonAction = (txt: string) => {
        alert(`Frase do App.tsx -> ${txt}`)
    }

    return (
        <div>
            <Button text={buttonText} clickFn={eventButtonAction} />
        </div>
    )
}

export default App;