import { lazy, Suspense, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom'
import Container from "../Container";
import Header from "../Header";
import Section from "../Section";
import Loader from "../Loader";
import Footer from "../Footer";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
import Notification from "../Notification";
import { useDispatch, useSelector } from 'react-redux';
import * as authUserOperation from "../../redux/authUser/authUser-operation";
import {getIsCurrentUser, getError } from "../../redux/authUser/authUser-selector";
import { onAuthStateChanged, getAuth } from "firebase/auth";
const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../../pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const FavouritesPage = lazy(() => import('../../pages/FavouritesPage' /* webpackChunkName: "favourites-page" */));
const ViewedPage = lazy(() => import('../../pages/ViewedPage' /* webpackChunkName: "viewed-page" */));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage' /* webpackChunkName: "notFound-page" */));

const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser);
  const isError = useSelector(getError);
  const errorMessage='Incorrect mail or password. Try again'
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (setCurrentUser))
    if (currentUser?.email) {
      dispatch(authUserOperation.getCurrentUser(currentUser))
    }
  }, [currentUser, dispatch]);

  return (
    <>
        
      {isCurrentUser ? (<Loader />) : (
      
          <Header />
      )}
      {isError && <Notification message={errorMessage}/>}
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute path='/' exact>
                <Section>
                  <Container>
                    <HomePage />
                  </Container>
                </Section>
              </PublicRoute>

              <PublicRoute path='/movies' exact>
                <Section>
                  <Container>
                    <MoviesPage />
                  </Container>
                </Section>
              </PublicRoute>

              <PublicRoute path='/movies/:slug'>
                <Section>
                  <Container>
                    <MovieDetailsPage />
                  </Container>
                </Section>
              </PublicRoute>

              <PrivateRoute path='/favourites'>
                <Section>
                  <Container>
                    <FavouritesPage />
                  </Container>
                </Section>
          </PrivateRoute>
          
          <PrivateRoute path='/viewed'>
                <Section>
                  <Container>
                    <ViewedPage />
                  </Container>
                </Section>
              </PrivateRoute>
          
              <PublicRoute>
                <Section>
                  <Container>
                    <NotFoundPage />
                  </Container>
                </Section>
              </PublicRoute>

            </Switch>
          </Suspense>
          <Footer />
        
    </>
  );
};

export default App;
