type Props = {
    title?: string // ? = opcional
}

//export const Header = (props: Props) => {
export const Header = ({ title }: Props) => { // forma mais usada
    return (
        <header>
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
            <hr />
        </header>
    )
}
