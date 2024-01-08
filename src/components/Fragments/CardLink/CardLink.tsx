import { Link } from "react-router-dom"
import './card-link.css'
type Props = {
    location: string,
    clasName?: string,
    children: any
}

function CardLink({ location, clasName, children }: Props) {
    return (
        <div className={`card card-link ${clasName}`}>
            <Link to={location}>
                {children}
            </Link>
        </div>
    )
}

export default CardLink