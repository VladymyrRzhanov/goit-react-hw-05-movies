import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFavFilms } from "../redux/favFilms/favFilms-selectors";
import { filmsPageActions }  from "../redux/filmsPage/filmsPage-actions";
import { getPage } from "../redux/filmsPage/filmsPage-selector";
import FilmsGallery from "../components/FilmsGallery";
import * as FilmsApi from "../service/apiFilmsService";
import Loader from '../components/Loader';
import PagePagination from '../components/Pagination';


const FavouriesPsge = () => {
  const dispatch = useDispatch()
  const favFilmsGallery = useSelector(getFavFilms);
  const [totalPage, setTotalPage] = useState(null);
  const [favFilms, setFavFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);
  const page = useSelector(getPage);
  
  useEffect(() => {
   dispatch(filmsPageActions(1));
  }, [dispatch])

  useEffect(() => {
    setFilms([...favFilmsGallery.slice((page - 1) * 20, 20*(1+(page-1)))])
  }, [favFilmsGallery, page]);

  
  useEffect(() => {
    if (!films) {
      return
    }
    setFavFilms([])
    setLoading(true)
    films.map(id =>
      FilmsApi
        .fetchDetailsMovie(id)
        .then(
          film => {
            setFavFilms(state => [...state, film]);
          }
        )
        .catch(error => setError(error)))
    setLoading(false);
  }, [films]);
  
  useEffect(() => {
    setTotalPage(Math.ceil(favFilmsGallery.length / 20))
  }, [favFilmsGallery.length])



  return (
    <>
      {loading && <Loader />}
      {error && <h1>{error.message}</h1>}
      {films && <FilmsGallery films={favFilms} />}
      {!!totalPage && <PagePagination
        totalPage={totalPage}
      />}
    </>
  );
};

export default FavouriesPsge;