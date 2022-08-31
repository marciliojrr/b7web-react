const App = () => {

    let name: string = 'marcilio';
    let lastName: string = 'junior'
    let link: string = 'https://www.google.com.br'

    return (
        <div>
            Nome: {`${name} ${lastName}`}<br />
            Link para o site: <br />
            <a href={link}>Clique aqui para acessar o Google</a>
        </div>


    )
}

export default App;