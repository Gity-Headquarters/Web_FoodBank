import './buttonConfirm.css'
type Props = {
    title: string
}

function ButtonConfirm({ title }: Props): JSX.Element {
    return (
        <button className='btn btn-confirm' >{title} </button>
    )
}

export default ButtonConfirm