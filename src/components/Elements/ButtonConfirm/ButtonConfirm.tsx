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
    onclick?: any
}

function ButtonConfirm({ children, className, ariaLabel, bsTogle, bsTarget, bsDismiss, onSubmit, type, onclick }: Props): JSX.Element {
    return (
        <button className={`btn btn-confirm ${className}`} aria-label={ariaLabel} data-bs-toggle={bsTogle} onSubmit={onSubmit} onClick={onclick}
            data-bs-target={bsTarget} data-bs-dismiss={bsDismiss} type={type} >{children} </button>
    )
}

export default ButtonConfirm