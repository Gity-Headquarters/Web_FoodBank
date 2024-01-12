import './buttonCancel.css'
type Props = {
    className?: string
    children?: any
    onclick?: any,
    ariaLabel?: string,
    bsTogle?: string,
    bsTarget?: string,
    bsDismiss?: string
}

function ButtonCancel({ children, className, ariaLabel, bsTogle, bsTarget, bsDismiss, onclick }: Props): JSX.Element {
    return (
        <button className={`btn btn-cancel ${className}`}
            aria-label={ariaLabel} data-bs-toggle={bsTogle} data-bs-target={bsTarget} data-bs-dismiss={bsDismiss} onClick={onclick} > {children} </button>
    )
}

export default ButtonCancel
