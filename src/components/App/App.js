import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import Container from "../Container";
import Header from "../Header";
import Section from "../Section";
import Loader from "../Loader";
import Footer from "../Footer";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";
const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../../pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const LibraryPage = lazy(() => import('../../pages/LibraryPage' /* webpackChunkName: "library-page" */));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage' /* webpackChunkName: "notFound-page" */));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute path='/' exact>
            {/* <Route path="/" exact> */}
            <Section>
              <Container>
                <HomePage />
              </Container>
            </Section>
            {/* </Route> */}
          </PublicRoute>
          <PublicRoute path='/movies'>
            {/* <Route path="/movies" exact> */}
            <Section>
              <Container>
                <MoviesPage />
              </Container>
            </Section>
            {/* </Route> */}
          </PublicRoute>

          <PublicRoute path='/movies/:slug'>
            {/* <Route path="/movies/:slug"> */}
            <Section>
              <Container>
                <MovieDetailsPage />
              </Container>
            </Section>
            {/* </Route> */}
          </PublicRoute>

          <PrivateRoute path='/library'>
            {/* <Route path="/movies/:slug"> */}
            <Section>
              <Container>
                <LibraryPage />
              </Container>
            </Section>
            {/* </Route> */}
          </PrivateRoute>
          
          <PublicRoute>
            {/* <Route> */}
            <Section>
              <Container>
                <NotFoundPage />
              </Container>
            </Section>
            {/* </Route> */}
          </PublicRoute>

        </Switch>
      </Suspense>
   
      <Footer />
    </>
  );
};

export default App;
