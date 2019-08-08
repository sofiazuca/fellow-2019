import React from "react";

function SocialMedia() {
  return (
    <div className="social">
      <a className="social__icon" href="https://www.facebook.com/TeenSmart">
        <span>
          <i className="fab fa-facebook-f fa-lg circle-icon" />
        </span>{" "}
      </a>
      <a
        className="social__icon"
        href="https://www.youtube.com/channel/UCGDhV-Ia0L-Q5ue7M2LxEgQ"
      >
        {" "}
        <span>
          <i className="fab fa-youtube fa-lg" />
        </span>{" "}
      </a>
      <a className="social__icon" href="https://www.twitter.com/teen_smart">
        {" "}
        <span>
          <i className="fab fa-twitter fa-lg" />
        </span>{" "}
      </a>
      <a className="social__icon" href="info@teensmart.net">
        <span>
          <i className="fas fa-envelope fa-lg" />
        </span>{" "}
      </a>
      <a className="social__icon" href="">
        <span>
          <i className="fab fa-skype fa-lg" />
        </span>
      </a>
    </div>
  );
}

export default SocialMedia;
