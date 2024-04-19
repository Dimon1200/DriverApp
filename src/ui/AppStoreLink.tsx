import { FunctionComponent } from "react";
import AppStoreImage from "../assets/AppStore.png";

const AppStoreLink: FunctionComponent = () => {
    return (
        <a href="#">
            <img src={AppStoreImage} alt="AppStore" />
        </a>
    );
};

export default AppStoreLink;
