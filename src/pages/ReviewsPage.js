import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewsDetails from "../components/ReviewsDetails";
import * as FilmsApi from "../service/apiFilmsService";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState(null);
    const { qwe } = useParams();
    const reviewsId = qwe.match(/[a-zA-Z0-9]+$/)[0];
console.log(qwe)
    useEffect(() => {
        FilmsApi.fetchReviewsMovie(reviewsId).then(({ results }) => setReviews(results))
    }, [reviewsId]);

    return (
        <>
            {reviews && <ReviewsDetails reviews={reviews}/>}
        </>
    );
};

export default ReviewsPage;