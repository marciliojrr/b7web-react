const App = () => {

    const handleButtonClick = () => {
        alert('O botao foi clicado!')
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Clique aqui</button>
            <button onClick={() => { alert('O segundo botao foi clicado!') }}>Clique aqui 2</button>
        </div>
    )
}

export default App;