import './buttonCancel.css'
type Props = {
    title: string,
    className?: string
}

function ButtonCancel({ title, className }: Props): JSX.Element {
    return (
        <button className={`btn btn-cancel ${className}`} > {title} </button>
    )
}

export default ButtonCancel