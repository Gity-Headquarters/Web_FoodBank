import Skeleton from "react-loading-skeleton"
import Card from "../../Elements/Card/Card"
import React from 'react';

interface DashcardLoaderProps {
    numberOfCards: number;
}
const CardPoskoLoader: React.FC<DashcardLoaderProps> = ({ numberOfCards }) => {
    return (
        <>
            {
                [...Array(numberOfCards)].map((_, index) => (
                    <div className="col-12 col-sm-6 col-lg-3 p-2 " key={index}>
                        <Card >
                            <div className="body-card ">
                                <Skeleton width={'100%'} height={200} />
                                <div className="information p-3 p-sm-2    p-xl-3">
                                    <Skeleton width={'100%'} height={34} />
                                    <div className="food d-flex align-items-center gap-2">
                                        <Skeleton circle width={30} height={30} />
                                        <Skeleton width={100} height={20} />
                                    </div>
                                    <div className="map d-flex align-items-center gap-2">
                                        <Skeleton circle width={30} height={30} />
                                        <Skeleton width={100} height={20} />
                                    </div>
                                    <div className="time d-flex align-items-center gap-2 ">
                                        <Skeleton circle width={30} height={30} />
                                        <Skeleton width={80} height={20} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))
            }
        </>
    )
}

export default CardPoskoLoader