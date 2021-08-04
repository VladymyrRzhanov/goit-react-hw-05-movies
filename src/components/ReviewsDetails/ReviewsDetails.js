import s from "./ReviewsDetails.module.css";

const ReviewsDetails = ({ reviews }) => (
    <ul className={s.gallery}>
        {reviews.map(({ id, author, content }) => (
            <li className={s.item} key={id}>
                <div className={s.card}>
                    <p className={s.content}>{content}</p>
                </div>
                <p className={s.author}>{author}</p>
            </li>
        ))}
    </ul>
);

export default ReviewsDetails;