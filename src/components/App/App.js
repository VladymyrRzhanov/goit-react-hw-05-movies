import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import Container from "../Container";
import Header from "../Header";
import Section from "../Section";
import Loader from "../Loader";
const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('../../pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage' /* webpackChunkName: "notFound-page" */));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>

          <Route path="/" exact>
            <Section>
              <Container>
                <HomePage />
              </Container>
            </Section>
          </Route>

          <Route path="/movies" exact>
            <Section>
              <Container>
                <MoviesPage />
              </Container>
            </Section>
          </Route>

          <Route path="/movies/:slug">
            <Section>
              <Container>
                <MovieDetailsPage />
              </Container>
            </Section>
          </Route>

          <Route>
            <Section>
              <Container>
                <NotFoundPage />
              </Container>
            </Section>
          </Route>

        </Switch>
      </Suspense>
    </>
  );
};

export default App;
