import './buttonConfirm.css'
type Props = {
    children: any,
    className?: string,
    ariaLabel?: string,
    bsTogle?: string,
    bsTarget?: string,
    bsDismiss?: string,
    onSubmit?: any
    type?: any
}

function ButtonConfirm({ children, className, ariaLabel, bsTogle, bsTarget, bsDismiss, onSubmit, type }: Props): JSX.Element {
    return (
        <button className={`btn btn-confirm ${className}`} aria-label={ariaLabel} data-bs-toggle={bsTogle} onSubmit={onSubmit}
            data-bs-target={bsTarget} data-bs-dismiss={bsDismiss} type={type} >{children} </button>
    )
}

export default ButtonConfirm