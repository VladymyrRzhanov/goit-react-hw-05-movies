import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filmsPageActions }  from "../redux/filmsPage/filmsPage-actions";
import { getPage } from "../redux/filmsPage/filmsPage-selector";
import { getViewedFilms } from "../redux/viewFilms/viewedFilms-selectors";
import FilmsGallery from "../components/FilmsGallery";
import * as FilmsApi from "../service/apiFilmsService";
import Loader from '../components/Loader';
import PagePagination from '../components/Pagination';

const ViewedPage = () => {
  const dispatch = useDispatch()
  const viewedFilmsGallery = useSelector(getViewedFilms);
  const [viewedFilms, setViewed] = useState([])
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [films, setFilms] = useState([]);
  const page = useSelector(getPage);
  
  useEffect(() => {
   dispatch(filmsPageActions(1));
  }, [dispatch])

  useEffect(() => {
    setFilms([...viewedFilmsGallery.slice((page - 1) * 20, 20*(1+(page-1)))])
  }, [viewedFilmsGallery, page]);

  useEffect(() => {
    if (!films) {
      return
    }
    setViewed([])
    setLoading(true)
    films.map(id =>
      FilmsApi
        .fetchDetailsMovie(id)
        .then(
          film => {
            setViewed(state => [...state, film]);
          }
        )
        .catch(error => setError(error)))
    setLoading(false);
  }, [films]);

  useEffect(() => {
    setTotalPage(Math.ceil(viewedFilmsGallery.length / 20))
  }, [viewedFilmsGallery.length])

  return (
    <>
       {loading && <Loader />}
      {error && <h1>{error.message}</h1>}
      {films && <FilmsGallery films={viewedFilms} />}
       {!!totalPage && <PagePagination
          totalPage={totalPage}
        />}
    </>
  );
};

export default ViewedPage;