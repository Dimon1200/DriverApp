import React, { FunctionComponent, useState } from "react";
import Close from "../ui/icons/Close";
import Button from "../ui/Button";
import { ModalProps } from "../types/types";



const Modal: FunctionComponent<ModalProps> = ({setIsModalOpened}) => {

    // from logic

    const [nameField, setNameField] = useState<string>('');
    const [emailField, setEmailField] = useState<string>('');
    const [phoneField, setPhoneField] = useState<string>('');
    const [textareaField, setTextareaField] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(nameField)
        console.log(emailField)
        console.log(phoneField)
        console.log(textareaField)
    }

    //modal logic

    const [modalAnimation, setModalAnimation] = useState<boolean>(true);

    const closeModal = () => {
        setModalAnimation(false)
        setTimeout(() => {
            setIsModalOpened(false)
        }, 300)
    }

    return (
        <div className={"modal " + (modalAnimation ? 'modal-open': 'modal-close')}>
            <div className="modal-bg" onClick={closeModal}></div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-title">
                    <h2>Обратная связь</h2>
                    <Close onClick={closeModal}/>
                </div>
                <input type="text" placeholder="Ваше имя*" required onChange={e => setNameField(e.target.value)}/>
                <input type="text" placeholder="Email*" required onChange={e => setEmailField(e.target.value)}/>
                <input type="text" placeholder="Номер телефона"  onChange={e => setPhoneField(e.target.value)}/>
                <textarea placeholder="Ваш вопрос"  onChange={e => setTextareaField(e.target.value)}/>
                <Button text="Обратная связь"/>
            </form>
        </div>
    );
};

export default Modal;
