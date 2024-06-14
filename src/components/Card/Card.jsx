import "./Card.scss";

export const Card = ({ imgUrl, title }) => {
    return (
        <div className="card">
            <div className="card__img_container">
                <img src={imgUrl} alt="###" />
            </div>
            <p className="card__title">{title}</p>
        </div>
    );
};
