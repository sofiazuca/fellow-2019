import React, { Component } from "react";
import Wrapper from "./Wrap";
import axios from "axios";

export default class VolunteerReward extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      const response = await axios('http://team-green.local/api/v1/reward', {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      })

      const data = response.data.reward;

      this.setState({
          data,
          loading: false
      })
  }

  render() {
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <Wrapper>
          <section className="reward">
            <div className="reward__container">
              <h1>
                What will I get as a volunteer?
              </h1>
              <div className="reward__grid">
                  {data ? data.map((item, index) =>
                    <div className="reward__picture">
                      <div className="reward__background" style={{backgroundImage:`url(${`http://team-green.local${item.image}`})`}}></div>
                      <div className="reward__description">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  ):<p>...</p>
                  }
              </div>
            </div>
          </section>
      </Wrapper>
    );
  }
}