import Card from '../../Elements/Card/Card'
import { iconFood, iconMap, iconWatch } from '../../../image'
import { HiDotsHorizontal } from 'react-icons/hi'

type Props = {
    name: string,
    food_total?: number,
    address: string,
    time_open: string,
    image: any
    children?: React.ReactNode
}

function PoskoList({ name, food_total, address, time_open, image, children }: Props) {
    const maxLength = 24
    const shortText = address.length > maxLength ? address.slice(0, maxLength) + "..." : address
    return (
        <div className="col-12 col-sm-6 col-lg-3 p-2 ">
            <Card >
                <div className="body-card">
                    <img src={image} alt="image posko" />
                    <div className="information p-3 p-sm-2  p-xl-3 ">
                        <h3 className="fw-bold mb-3" >{name}</h3>
                        <div className="food d-flex align-items-center">
                            <img src={iconFood} alt="iconfood" />
                            <span className="text-secondary ms-2  fw-medium"  >{food_total} Foods</span>
                        </div>
                        <div className="map d-flex align-items-center">
                            <img src={iconMap} alt="" />
                            <span className="text-secondary ms-2  fw-medium" >{shortText}</span>
                        </div>
                        <div className="time d-flex align-items-center justify-content-between ">
                            <div className="time-rapper">
                                <img src={iconWatch} alt="iconWatch" />
                                <span className="text-secondary ms-2  fw-medium" >{time_open}</span>
                            </div>
                            <button className="btn border-0 p-0"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"><HiDotsHorizontal /></button>
                            <ul className="dropdown-menu p-2 border-0">
                                {children}
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PoskoList