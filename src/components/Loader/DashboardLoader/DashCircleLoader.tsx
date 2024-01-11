import Card from "../../Elements/Card/Card"
import Skeleton from "react-loading-skeleton";

const DashCircleLoader = () => {
    return (
        <Card className="p-3" >
            <Skeleton width={200} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton circle width={307} height={307} />
        </Card>
    )
}

export default DashCircleLoader