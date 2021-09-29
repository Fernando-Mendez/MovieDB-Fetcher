import "./css/App.css";
import Card from "./components/Card";
import Error404 from "./images/404.jpg";
import { Component } from "react";

const API = "https://api.themoviedb.org/3/search/movie";
const QUERY_HEADERS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

class App extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    fetch(
      API +
        `?${new URLSearchParams({
          api_key: "468018e64d6cfa119009ede09787dea0",
          query: "dune",
        })}`,
      QUERY_HEADERS
    )
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data.results }));
  }

  render() {
    return (
      <div className="mainDiv">
        {this.state.cards.map((card) => (
          <Card
            img={
              card.poster_path === null
                ? Error404
                : "https://image.tmdb.org/t/p/original/" + card.poster_path
            }
            title={card.title}
            descr={
              card.overview === ""
                ? "Description not available."
                : card.overview
            }
          />
        ))}
      </div>
    );
  }
}

export default App;
