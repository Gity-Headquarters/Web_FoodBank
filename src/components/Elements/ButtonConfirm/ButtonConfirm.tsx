import './buttonConfirm.css'
type Props = {
    title: string,
    className?: string
}

function ButtonConfirm({ title, className }: Props): JSX.Element {
    return (
        <button className={`btn btn-confirm ${className}`} >{title} </button>
    )
}

export default ButtonConfirm