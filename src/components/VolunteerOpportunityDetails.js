import React, { Component } from "react";
import Wrapper from "./Wrap";
import axios from "axios";

export default class VolunteerOpportunitiyDetails extends Component {
  render() {
    const { title, body, apply, countries, whatWillYouDo } = this.props;
    console.log(this.props);
    return (
      <Wrapper>
        <section className="item">
          <h2 className="item__title">{title}</h2>
          <section className="item__grid">
            <div>
              <h4 className="item__subtitle">What you will do</h4>
              <div
                className="item__body"
                dangerouslySetInnerHTML={{ __html: whatWillYouDo }}
              />

              <h4 className="item__subtitle">
                Countries you can apply from for this opportunity
              </h4>
              <div  className="item__sub countries" dangerouslySetInnerHTML={{ __html: countries }}></div>
            </div>
            <div>
              <h4 className="item__subtitle">What you need to become a counselor</h4>
              <div className="item__sub" dangerouslySetInnerHTML={{ __html: body }}></div>
              <button className="btn__cta--item">Apply now</button>
            </div>
          </section>
        </section>
      </Wrapper>
    );
  }
}
