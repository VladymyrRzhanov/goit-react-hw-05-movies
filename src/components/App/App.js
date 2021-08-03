import { fetchTrendingMovies, fetchSearchMovie, fetchDetailsMovie, fetchActorsMovie, fetchReviewsMovie } from "../../service/apiFilmsService";
import { Route, Switch } from 'react-router-dom'
import Container from "../Container";
import Header from "../Header";
import Section from "../Section";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";


// fetchTrendingMovies();
// fetchSearchMovie('Jungle Cruise');
// fetchDetailsMovie(436969);
// fetchActorsMovie(522478);
// fetchReviewsMovie(451048);

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

        <Route path="/movies/:filmId">
          <Section>
            <Container>
              <MoviesPage />
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
