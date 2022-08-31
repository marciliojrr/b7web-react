import { Header } from "./components/Header";
import { Photo } from "./components/Photo";

const App = () => {
    return (
        <div>
            <Header title='Example' />
            <Header title='Example 2' />
            <Photo legend='Google Old Logo'>
                <img src="https://www.google.com.br/google.jpg" alt="" />
            </Photo>
            Hello World.
        </div>
    )
}

export default App;