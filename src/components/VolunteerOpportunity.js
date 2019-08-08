import React, { Component } from "react";
import Wrapper from "./Wrap";
import VolunteerOpportunitiyDetails from "./VolunteerOpportunityDetails";
import axios from "axios";

export default class VolunteerOpportunity extends Component {
  constructor() {
    super();
    this.state = {
      selectedOpportunity: null,
      data: null
    };
    this.change = this.change.bind(this);
  }

  change(e) {
    this.setState({
      selectedOpportunity: e.target.value
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await axios(`http://team-green.local/api/v1/opportunity`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = response.data.opportunity;
    this.setState({
      data
    });
  }

  render() {
    const { selectedOpportunity, data } = this.state;
    return (
      <Wrapper>
        <section className="opportunity">
          <h1 className="opportunitiy__title">
            Take a look at our volunteer opportunities
          </h1>
          <select className="opportunitiy__select" onChange={this.change}>
            <option value=""> -- Select a Posting </option>
            {data ? (
              data.map((item, index) => (
                <option value={item.id}>{item.title}</option>
              ))
            ) : (
              <p>...</p>
            )}
          </select>
          {selectedOpportunity &&
            data.map(item => {
              const { id, title, description, apply, countries, what_will_you_do } = item;
              return (
                id === selectedOpportunity && (
                  <VolunteerOpportunitiyDetails
                    title={title}
                    body={description}
                    apply={apply}
                    countries={countries}
                    whatWillYouDo={what_will_you_do}
                  />
                )
              );
            })}
        </section>
      </Wrapper>
    );
  }
}