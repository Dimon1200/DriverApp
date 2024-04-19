import { FunctionComponent } from "react";
import Logo from "../ui/icons/Logo";
import StoreLinks from "./StoreLinks";

const Header: FunctionComponent = () => {
    return (
        <header>
            <Logo />
            <StoreLinks />
        </header>
    );
};

export default Header;
