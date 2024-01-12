import './buttonConfirm.css'
type Props = {
    children: any,
    className?: string
}

function ButtonConfirm({ children, className }: Props): JSX.Element {
    return (
        <button className={`btn btn-confirm ${className}`} >{children} </button>
    )
}

export default ButtonConfirm