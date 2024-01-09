import './buttonCancel.css'
type Props = {
    className?: string
    children?: any
}

function ButtonCancel({ children, className }: Props): JSX.Element {
    return (
        <button className={`btn btn-cancel ${className}`} > {children} </button>
    )
}

export default ButtonCancel