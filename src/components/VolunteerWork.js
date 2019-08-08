import React, { Component } from 'react'
import Wrapper from "./Wrap"
import axios from 'axios'

export default class VolunteerWork extends Component {

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
    const response =  await axios(`http://team-green.local/api/v1/work`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = response.data.volunteer;
    
    this.setState({
      data,
      loading:false
    })
  }

  render() {
    const { data } = this.state;
    return (
        <Wrapper>
          <section className="work">
            <h1 className="work__title">
              What kind of volunteer work can you do with us?
            </h1>
            <div className="work__grid">
            {
              data ? data.map((item, index) =>
                <div className="work__card" key={index}>
                <h3>{item.title}</h3>
                <div dangerouslySetInnerHTML= {{__html: item.description}}></div>
              </div>) : <p>...</p>
            }
            </div>
          </section>
        </Wrapper>
    );
  }
}
