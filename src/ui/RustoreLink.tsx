import { FunctionComponent } from "react";
import RuStoreImage from "../assets/RuStore.png";

const RuStoreLink: FunctionComponent = () => {
    return (
        <a href="#">
            <img src={RuStoreImage} alt="RuStore" />
        </a>
    );
};

export default RuStoreLink;
