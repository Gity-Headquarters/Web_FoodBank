
import CardLink from '../CardLink/CardLink'
import { GoTriangleUp } from 'react-icons/go'

type Props = {
    title: string,
    icon: any,
    total: string,
    percentase: number,
    raising: string,
    location?: string
}

function CardLinkDash({ title, icon, total, percentase, raising, location }: Props) {
    return (
        <div className="col">
            <CardLink location={location}>
                <div className="p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0 text-secondary" >{title}</p>
                        <img src={icon} alt="icon-pengguna" />
                    </div>
                    <div className="total mt-2">
                        <h2 className="m-0 fw-semibold" >{total}</h2>
                    </div>
                    <div className={`percentase d-flex gap-3 mt-2 ${raising === 'up' ? 'text-success' : 'text-danger'}`}>
                        <div className="d-flex align-items-center">
                            <p className="m-0 fw-medium " >{percentase}%</p>
                            <GoTriangleUp />
                        </div>
                        <div className="text-secondary fw-medium">
                            1 Minggu Terakhir
                        </div>
                    </div>
                </div>
            </CardLink>
        </div>
    )
}

export default CardLinkDash