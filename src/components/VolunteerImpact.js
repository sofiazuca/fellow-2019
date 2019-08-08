import React, { Component } from "react";
import Wrapper from "./Wrap";
import axios from "axios";

export default class VolunteerImpact extends Component {
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
    const response = await axios(`http://team-green.local/api/v1/impact`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response);

    this.setState({
      impact: response.data.impact,
      hour: response.data.hour
    });
  }

  render() {
    const { impact, hour } = this.state;
    console.log({
      impact,
      hour
    });
    return (
      <Wrapper>
        {impact ? (
          <div className="impact">
            <h1 className="impact__title">{impact.title}</h1>
            <section className="impact__banner">
              <div className="hour__grid">
                {hour ? (
                  hour.map((item, index) => (
                    <div className="hour__card">
                      <div className="hour__wrapper">
                        <p className="hour__title">+{item.title}</p>
                        <div
                          className="hour__description"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>...</p>
                )}
              </div>
              <div className="impact_detail">
                <div
                  className="impact__description"
                  dangerouslySetInnerHTML={{ __html: impact.description }}
                />

                <div>
                <a
                  target="_blank"
                  className="btn__cta--impact"
                  href={impact.link.url}
                >
                  {impact.link.title}
                </a>
                </div>

              </div>
            </section>
          </div>
        ) : (
          <p>...</p>
        )}
      </Wrapper>
    );
  }
}
