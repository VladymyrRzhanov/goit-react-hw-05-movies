import { Route, Switch } from 'react-router-dom'
import Container from "../Container";
import Header from "../Header";
import Section from "../Section";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Header />

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
    </>
  )
};

export default App;
