import React from "react";
import VolunteerBanner from "../components/VolunteerBanner";
import VolunteerWork from "../components/VolunteerWork";
import VolunteerApply from "../components/VolunteerApply";
import VolunteerImpact from "../components/VolunteerImpact";
import VolunteerOpportunity from "../components/VolunteerOpportunity";
import VolunteerPath from "../components/VolunteerPath";
import VolunteerReward from "../components/VolunteerReward";
import VolunteerQa from "../components/VolunteerQa";
import Footer from "../components/Footer";

function Volunteer() {
  return (
    <main>
      <VolunteerBanner />
      <VolunteerWork />
      <VolunteerApply />
      <VolunteerPath />
      <VolunteerImpact />
      <VolunteerOpportunity />
      <VolunteerReward />
      <VolunteerQa />
      <Footer />
    </main>
  );
}

export default Volunteer;
