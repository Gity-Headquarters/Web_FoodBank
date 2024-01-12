import './buttonConfirm.css'
type Props = {
    children: any,
    className?: string,
    ariaLabel?: string,
    bsTogle?: string,
    bsTarget?: string,
    bsDismiss?: string
}

function ButtonConfirm({ children, className, ariaLabel, bsTogle, bsTarget, bsDismiss }: Props): JSX.Element {
    return (
        <button className={`btn btn-confirm ${className}`} aria-label={ariaLabel} data-bs-toggle={bsTogle}
            data-bs-target={bsTarget} data-bs-dismiss={bsDismiss} >{children} </button>
    )
}

export default ButtonConfirm