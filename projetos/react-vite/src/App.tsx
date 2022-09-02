// import { Container, Button } from "./AppStyles"; // ---> [1] <---
import * as C from './AppStyles' // ---> [2] <----

// ---> [1] <---
// const App = () => {

//     return (
//         <Container>
//             But by default, she don't think on me...
//             <Button>Clique aqui</Button>
//         </Container>
//     )
// }

// ---> [2] <----
const App = () => {

    return (
        <C.Container>
            But by default, she don't think on me...
            <C.Button>Clique aqui</C.Button>
        </C.Container>
    )
}

export default App;