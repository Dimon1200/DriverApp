import { FunctionComponent } from "react";
import AppStoreLink from "../ui/AppStoreLink";
import GooglePlayLink from "../ui/GooglePlayLink";
import RuStoreLink from "../ui/RustoreLink";

const StoreLinks: FunctionComponent = () => {
    return (
        <div className="store-links">
            <AppStoreLink />
            <GooglePlayLink />
            <RuStoreLink />
        </div>
    );
};

export default StoreLinks;
