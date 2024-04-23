import { FunctionComponent, useState } from "react";
import Logo from "../ui/icons/Logo";
import StoreLinks from "./StoreLinks";
import Modal from "./ModalModal";
import Button from "../ui/Button";
import { VKIcon } from "../ui/icons";

const Footer: FunctionComponent = () => {
    //modal logic

    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

    const openModal: React.MouseEventHandler = () => {

        document.body.style.overflow = 'hidden';
        setIsModalOpened(true)
    }

    return (
        <>
            {isModalOpened && <Modal setIsModalOpened={setIsModalOpened} />}

            <footer>
                <div className="footer-content">
                    <div className="footer-links">
                        <Logo />
                        <StoreLinks />
                    </div>
                    <div className="footer-creditals">
                        <Button onClick={openModal} text="Обратная связь" />
                        <div className="creditals-links">
                            <a href="#">Политика конфиденциальности</a>
                            <a href="#">Пользовательское соглашение</a>
                            <a href="#"><VKIcon /></a>
                        </div>
                    </div>
                    <p className="copyright">© Copyright StartApp. 2023-2024</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
