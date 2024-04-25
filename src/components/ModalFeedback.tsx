import React, { FunctionComponent, useState } from "react";
import Close from "../ui/icons/Close";
import Button from "../ui/Button";
import { ModalProps } from "../types/types";
import axios from "axios";
import { FeedBackError, FeedBackRequest } from "../types/FeedBackTypes";





const ModalFeedback: FunctionComponent<ModalProps> = ({ setIsModalOpened }) => {

    // form logic

    const [nameField, setNameField] = useState<string>('');
    const [emailField, setEmailField] = useState<string>('');
    const [phoneField, setPhoneField] = useState<string>('');
    const [questionField, setQuestionField] = useState<string>('');

    const [nameError, setNameError] = useState<Array<boolean | string>>([false, '']);
    const [emailError, setEmailError] = useState<Array<boolean | string>>([false, '']);
    const [phoneError, setPhoneError] = useState<Array<boolean | string>>([false, '']);
    const [questionError, setQuestionError] = useState<Array<boolean | string>>([false, '']);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {

            console.log(`${import.meta.env.VITE_API_URL}/form/feedback/`)
            const { data, status } = await axios.post<FeedBackRequest>(
                `${import.meta.env.VITE_API_URL}/form/feedback/`,
                {
                    name: nameField,
                    email: emailField,
                    phone_number: phoneField,
                    question: questionField
                }
            )

            console.log(data)
            console.log(status)

            closeModal()

        } catch (error) {
            if (axios.isAxiosError(error)) {

                if (error.response?.status == 422) {
                    error.response?.data.detail.map((item: FeedBackError) => {
                        console.log(item.loc[1])
                        console.log(item.type)

                        switch (item.loc[1]) {
                            case 'name':
                                setNameError([true, item.msg])
                                break;
                            case 'email':
                                setEmailError([true, item.msg])
                                break;
                            case 'phone':
                                setPhoneError([true, item.msg])
                                break;
                            case 'question':
                                setQuestionError([true, item.msg])
                                break;
                        }
                    })
                    console.log(error.response?.data.detail)
                } else {
                    console.log('error message: ', error.response?.data);
                    return error;
                }
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }

    }

    //modal logic

    const [modalAnimation, setModalAnimation] = useState<boolean>(true);

    const closeModal = () => {
        setModalAnimation(false)
        document.body.style.overflow = 'unset';
        setTimeout(() => {
            setIsModalOpened(false)
        }, 300)
    }

    return (
        <div className={"modal " + (modalAnimation ? 'modal-open' : 'modal-close')}>
            <div className="modal-bg" onClick={closeModal}></div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-title">
                    <h2>Обратная связь</h2>
                    <span className="close-btn"><Close onClick={closeModal} /></span>
                </div>
                <input
                    className={nameError[0] ? 'form-error' : ''}
                    type="text"
                    placeholder="Ваше имя*"
                    required 
                    onChange={e => {
                        setNameField(e.target.value)
                        setNameError([false, ''])
                    }}
                    id="name"
                />
                {nameError[0] && <label htmlFor="name">{nameError[1]}</label>}
                <input
                    className={emailError[0] ? 'form-error' : ''}
                    type="text"
                    placeholder="Email*"
                    required
                    onChange={e => {
                        setEmailField(e.target.value)
                        setEmailError([false, ''])
                    }}
                    id="email"
                />
                {emailError[0] && <label htmlFor="name">{emailError[1]}</label>}

                <input
                    className={phoneError[0] ? 'form-error' : ''}
                    type="text" placeholder="Номер телефона"
                    onChange={e => {
                        setPhoneField(e.target.value)
                        setPhoneError([false, ''])
                    }}
                    id="phone"
                />
                {phoneError[0] && <label htmlFor="name">{[phoneError][1]}</label>}
                <textarea
                    className={questionError[0] ? 'form-error' : ''}
                    placeholder="Ваш вопрос"
                    onChange={e => {
                        setQuestionField(e.target.value)
                        setQuestionError([false, ''])
                    }}
                    id="texarea"
                />
                {questionError[0] && <label htmlFor="name">{questionError[1]}</label>}

                <Button text="Обратная связь" />
            </form>
        </div>
    );
};

export default ModalFeedback;
