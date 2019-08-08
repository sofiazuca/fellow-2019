import React, { Component } from "react";
import Wrapper from "./Wrap";
import axios from "axios";
export default class VolunteerApply extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await axios("http://team-green.local/api/v1/apply", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = response.data.apply;

    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Wrapper>
        {data ? (
          <section className="apply">
            <h1>You want to volunteer? Apply now!</h1>
            <div className="apply__banner">
              <div
                className="apply__description"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            <div className="apply__btn">
              <a href={data.link.url} target="_blank" className="btn__cta btn__cta--lg">
                {data.link.title}
              </a>
            </div>
            </div>
          </section>
        ) : (
          <p>...</p>
        )}
      </Wrapper>
    );
  }
}
