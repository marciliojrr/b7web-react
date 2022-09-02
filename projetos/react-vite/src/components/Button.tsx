type Props = {
    text: string
    clickFn: (txt: string) => void
}

export const Button = ({ text, clickFn }: Props) => {

    const handleClick = () => {
        clickFn('Frase por parâmetro')
    }

    return (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )
}