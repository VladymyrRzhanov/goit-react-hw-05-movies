import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { getFavFilms } from "../redux/favFilms/favFilms-selectors";
import FilmsGallery from "../components/FilmsGallery";
import * as FilmsApi from "../service/apiFilmsService";


const LibraryPage = () => {
  const favFilmsGallery = useSelector(getFavFilms);
  const [favFilms, setFavFilms] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    if (!favFilmsGallery) {
      return
    }
    favFilmsGallery.map(id =>
      FilmsApi
        .fetchDetailsMovie(id)
        .then(
          film => {
          setFavFilms(state=>[...state,film]);
        }
        )
        .catch(error => setError(error)))
  }, [favFilmsGallery]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {favFilmsGallery && <FilmsGallery films={favFilms} />}
    </>
  );
};

export default LibraryPage;