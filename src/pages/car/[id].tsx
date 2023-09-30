import {NextPage } from "next";
import {useRouter} from "next/router";

const CarPage: NextPage = () => {

    const {asPath, pathname, query} = useRouter()
    console.log(asPath, pathname,query.id)
    return (
        <div>
            Car page
        </div>
    );
};

export default CarPage;
