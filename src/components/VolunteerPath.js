import React, { Component } from "react";
import Wrapper from "./Wrap";
import axios from "axios";

export default class VolunteerPath extends Component {
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
    const response = await axios(`http://team-green.local/api/v1/path`, {
      method: "GET",
      header: {
        "Content-Type": "aplication/json"
      }
    });

    console.log("Path", response);
    const data = response.data.path;
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    const colors = ["#b7c674", "#fdfcd5", "#d9ae39", "#90c2d1", "#fdfcd5"];

    return (
      <Wrapper>
        <section className="path">
          <h1 className="path__title">
            Want to involve yourself as volunteer with us?
          </h1>
          <div className="path__grid">
            {data ? (
              data.map((item, index) => (
                <div className="path__card" key={index}>
                  <div
                    className="path__card--number"
                    style={{ backgroundColor: `${colors[index]}` }}
                  >
                    <span>{item.title}</span>
                  </div>
                  <div
                    className="path__description"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  {item.link["url"] ? (
                    <a href={item.link.url}>{item.link.title}</a>
                  ) : null}
                </div>
              ))
            ) : (
              <p>...</p>
            )}
          </div>
        </section>
      </Wrapper>
    );
  }
}
