import * as C from './AppStyles' // ---> [2] <----

const App = () => {

    return (
        <C.Container bg='#1b1ba49d'>
            <span>But by default, she don't think on me... </span>
            <a href='' className='link'>Link qualquer </a>
            <C.Button bg='#FF0000'>Botão grande</C.Button>
            <C.Button bg='#00FF00' small>Botão pequeno</C.Button>
        </C.Container>
    )
}

export default App;