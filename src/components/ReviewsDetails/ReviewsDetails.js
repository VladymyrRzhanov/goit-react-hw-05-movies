import s from "./ReviewsDetails.module.css";

const ReviewsDetails = ({ reviews }) => {
    if (reviews.length === 0) {
        return <h2>Sorry, we haven't reviews yet</h2>
    }
    
    return (
        <ul className={s.gallery}>
            {reviews.map(({ id, author, content }) => (
                <li className={s.item} key={id}>
                    <div className={s.card}>
                        <p className={s.content}>{content}</p>
                    </div>
                    <p className={s.author}>Author: {author}</p>
                </li>
            ))}
        </ul>
    );
};

export default ReviewsDetails;