import { FunctionComponent } from "react";
import GooglePlayImage from "../assets/Google Play.png";

const GooglePlayLink: FunctionComponent = () => {
    return (
        <a href="#">
            <img src={GooglePlayImage} alt="GooglePlay" />
        </a>
    );
};

export default GooglePlayLink;
