import React from 'react';
import { Link } from 'react-router-dom';
import './card-link.css';

type Props = {
    location?: string,
    className?: string,
    children: React.ReactNode
}

function CardLink({ location, className, children }: Props) {
    return (
        <div className={`card card-link border-0 ${className}`}>
            {location ? (
                <Link to={location}>
                    {children}
                </Link>
            ) : (
                <div>{children}</div>
            )}
        </div>
    );
}

export default CardLink;