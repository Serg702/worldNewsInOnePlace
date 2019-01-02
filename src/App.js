import React, { Component } from "react";
import Form from "./components/Form";
import NewsArticle from "./components/NewsArticle";
import { url, apiKey } from "./constants";

class App extends Component {
  state = {
    news: "",
    error: null,
    isLoading: null
  };

  toggleLoading = () => {
    if (this.state.isLoading) {
      this.setState({ ...this.state, isLoading: false });
    } else {
      this.setState({ ...this.state, isLoading: true });
    }
  };

  fetchData = input => {
    this.toggleLoading();
    const request = `${url}q=${input}&sortBy=popularity&apiKey=${apiKey}`;

    return fetch(request)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(result =>
        this.setState({
          ...this.state,
          isLoading: false,
          news: result.articles
        })
      )
      .catch(error => this.setState({ ...this.state, error: error }));
  };
  render() {
    const { isLoading, news, error } = this.state;

    if (error) {
      return <h1>{error}</h1>;
    }

    if (news) {
      return <NewsArticle value={news} />;
    }

    return (
      <div>
        {isLoading ? <h1>Loading ...</h1> : <Form fetchData={this.fetchData} />}
      </div>
    );
  }
}

export default App;
