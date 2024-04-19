
import { MapIcon, SearchIcon, StarIcon } from "../ui/icons";
import MapInPhone from "../ui/icons/MapInPhone";
import FeatureItem from "./FeatureItem";
import StoreLinks from "./StoreLinks";
import FAQList from "./FAQList";

const MainContent = () => {


    return (
        <main>
            {/* First section with full-screen bg */}
            <section className="introduce-section">
                <h1>
                    Сервис <span className="text-accent">StartApp</span> <br />{" "}
                    совместные поездки по городу
                </h1>
            </section>
            {/* Whats the idea section */}
            <section className="concept-section">
                <div className="concept-text">
                    <h2>
                        В чем <span className="text-accent">идея?</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis non aliquid quaerat tempora labore, itaque, in
                        corrupti ea eveniet, deserunt facere soluta praesentium
                        pariatur facilis.
                    </p>
                </div>
                <div className="img-container">
                    <MapInPhone />
                </div>
            </section>
            {/* Features section */}
            <section className="features-section">
                <FeatureItem icon={<MapIcon />} text='Удобный поиск попутчиков на карте' />
                <FeatureItem icon={<StarIcon />} text='Просмотр рейтинга пользователя' />
                <FeatureItem icon={<SearchIcon />} text='Поиск водителей с которым вам по пути' />
            </section>
            {/* Proposal to download image */}
            <section className="app-section">
                <div className="app-wrapper bg-accent">
                    <div className="app-content">
                        <h2>Скачайте приложение StartApp</h2>
                        <StoreLinks />
                    </div>
                    <div className="app-images">
                        <MapInPhone />
                        <MapInPhone />
                    </div>
                </div>
            </section>
            {/* Q&A section */}
            <section className="faq-section">
                <h2>
                    <span className="text-accent">Вопросы</span> и ответы
                </h2>
                <FAQList />
            </section>
        </main>
    );
};

export default MainContent;
