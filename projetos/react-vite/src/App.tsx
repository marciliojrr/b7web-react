import { useState } from 'react'

const App = () => {

    const [numero, setNumero] = useState(0);
    const [name, setName] = useState('Marcilio')

    const handleButtonClick = () => {
        setName('Junior')
    }

    return (
        <div>
            Meu nome: {name}.<br />
            <button onClick={handleButtonClick}>Clique aqui</button><br />
            <button onClick={() => { alert('O segundo botao foi clicado!') }}>Clique aqui 2</button>
        </div>
    )
}

export default App;