import Card from "../../Elements/Card/Card"
import Skeleton from "react-loading-skeleton";
const DashLineLoader = () => {
    return (
        <Card className="p-3" >
            <Skeleton width={140} height={27} />
            <Skeleton width={300} height={20} />
            <Skeleton width={'100%'} height={300} />
        </Card>
    )
}

export default DashLineLoader