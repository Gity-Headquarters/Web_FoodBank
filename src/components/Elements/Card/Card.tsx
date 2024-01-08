import './card.css'

type CardProps = {
    children: any,
    className?: string
}

function Card({ children, className }: CardProps) {
    return (
        <div className={`card card-normal ${className}`}>
            {children}
        </div>
    )
}

export default Card