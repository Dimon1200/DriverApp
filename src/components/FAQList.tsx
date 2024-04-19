import FAQItem from "./FAQItem"

import qTexts from "../assets/data"// data for q&a section: string[]

const FAQList = () => {
    return (
        <ul className="faq-list">
            {qTexts.map((text, index) => <FAQItem 
                    key={index}
                    qTitle={"Вопрос #" + (index + 1)} 
                    qContent={text} 
                />)
            }
        </ul>
    )
}

export default FAQList