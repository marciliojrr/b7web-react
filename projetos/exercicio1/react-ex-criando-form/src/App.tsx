import React, { useState } from 'react';

const App = () => {

    const [name, setName] = useState('Anônimo')
    const [lastName, setLastName] = useState('da Silva')
    const [age, setAge] = useState('infinitos')

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }

    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    }

    return (
        <div>
            <div>
                Nome:
                <input type="text" onChange={handleName} />
            </div>

            <div>
                Sobrenome:
                <input type="text" onChange={handleLastName} />
            </div>

            <div>
                Idade:
                <input type="text" onChange={handleAge} />
            </div>

            <hr />

            Olá {name} {lastName}, tudo bem?<br />
            Você tem {age} anos.
        </div>
    );
}

export default App;