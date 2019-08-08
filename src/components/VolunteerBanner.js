import React, { Component } from "react";
import axios from "axios";

export default class VolunteerBanner extends Component {
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
    const response = await axios(`http://team-green.local/api/v1/banner`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    console.log(response);
    this.setState({
      data: response.data.banner
    });

  }

  render() {
    const { data } = this.state;
    return (
      <section className="banner">
        {data ? (
          <div className="banner__wrapper">
            <div className="banner__picture">
              <div
                className="banner__picture--bg"
                style={{
                  backgroundImage: `url(http://team-green.local${data.image})`
                }}
              />
            </div>
            <div className="banner__summary">
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
              <a href={data.link.url} target="_blank">
                {data.link.title}
              </a>
            </div>
          </div>
        ) : (
          <p>...</p>
        )}
      </section>
    );
  }
}
