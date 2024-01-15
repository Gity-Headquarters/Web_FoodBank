
type Props = {
    title: string
    text?: string
    className?: string
}

const ListDetailTransaksi = ({ title, text }: Props) => {
    return (
        <div className="mb-3">
            <span className="text-secondary" >{title}</span>
            <p className='text-black fw-medium' >{text}</p>
        </div>
    )
}

export default ListDetailTransaksi