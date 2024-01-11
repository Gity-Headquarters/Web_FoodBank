import React from 'react';
import CardLink from "../../Fragments/CardLink/CardLink";
import Skeleton from "react-loading-skeleton";

interface DashcardLoaderProps {
    numberOfCards: number;
}

const DashcardLoader: React.FC<DashcardLoaderProps> = ({ numberOfCards }) => (
    <>
        {[...Array(numberOfCards)].map((_, index) => (
            <div className="col mt-4" key={index + 1}>
                <CardLink>
                    <div className="p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <Skeleton width={140} height={20} />
                            <Skeleton width={30} height={30} />
                        </div>
                        <div className="total mt-2">
                            <Skeleton width={100} height={30} />
                        </div>
                        <div className={`percentase d-flex gap-3 mt-2 `}>
                            <div className="text-secondary fw-medium">
                                <Skeleton width={190} height={20} />
                            </div>
                        </div>
                    </div>
                </CardLink>
            </div>
        ))}
    </>
);

export default DashcardLoader;
