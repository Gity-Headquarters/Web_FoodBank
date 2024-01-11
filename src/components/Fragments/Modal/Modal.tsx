type Props = {
    id: string
    size?: string
    children: any
}

const Modal = ({ id, size, children }: Props) => {
    return (
        <div
            className="modal fade"
            id={id}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={`modal-dialog modal-dialog-centered  ${size}`}>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal