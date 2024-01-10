import Card from '../../Elements/Card/Card'
import { iconFood, iconMap, iconWatch, poskoImage } from '../../../image'
import { HiDotsHorizontal } from 'react-icons/hi'

type Props = {
    title: string,
    totalFoods?: number,
    location: string,
    time: string,
    image: string
}

function PoskoList({ title, totalFoods, location, time, image }: Props) {
    const maxLength = 24
    const shortText = location.length > maxLength ? location.slice(0, maxLength) + "..." : location
    return (
        <div className="col-12 col-md-6 col-lg-3 p-2 ">
            <Card >
                <div className="body-card">
                    <img src={image} alt="image posko" />
                    <div className="information p-3 p-sm-2    p-xl-3">
                        <h3 className="fw-bold mb-3" >{title}</h3>
                        <div className="food d-flex align-items-center">
                            <img src={iconFood} alt="iconfood" />
                            <span className="text-secondary ms-2  fw-medium"  >{totalFoods} Foods</span>
                        </div>
                        <div className="map d-flex align-items-center">
                            <img src={iconMap} alt="" />
                            <span className="text-secondary ms-2  fw-medium" >{shortText}</span>
                        </div>
                        <div className="time d-flex align-items-center justify-content-between">
                            <div className="time-rapper">
                                <img src={iconWatch} alt="iconWatch" />
                                <span className="text-secondary ms-2  fw-medium" >{time}</span>
                            </div>
                            <button className="btn border-0 p-0" ><HiDotsHorizontal /></button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PoskoList