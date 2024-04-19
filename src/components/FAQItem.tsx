import { FunctionComponent, useState } from "react";
import Arrow from "../ui/icons/Arrow";
import { FAQItemProps } from "../types/types";

const FAQItem: FunctionComponent<FAQItemProps> = ({ qTitle, qContent }) => {

    const [isAnswerOpened, setIsAnswerOpened] = useState(false);

    return (
        <li className="faq-item" onClick={() => setIsAnswerOpened(prev => !prev)}>
            <div className="faq-shown">
                <h3>{qTitle}</h3>
                <Arrow />
            </div>
            <div className={"faq-content " + (isAnswerOpened && "opened")}>
                {qContent}
            </div>
        </li>
    );
};

export default FAQItem;
