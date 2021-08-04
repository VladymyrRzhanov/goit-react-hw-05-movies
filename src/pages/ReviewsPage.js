import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewsDetails from "../components/ReviewsDetails";
import * as FilmsApi from "../service/apiFilmsService";

const ReviewsPage = () => {
    const { reviewsId } = useParams();
    const [reviews, setReviews] = useState(null);

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