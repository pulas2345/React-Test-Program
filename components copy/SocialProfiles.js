import { motion } from "framer-motion";
import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = (props) => {
  const { link, image } = props.socialProfile;

  return (
    <span>
      <a href="https://google.com" target="_blank">
        <img
          src={image}
          style={{
            margin: "10px",
            width: "40px",
            borderRadius: "22px",
            border: "4px solid #00ccff",
            backgroundColor: "#00ccff",
            boxSizing: "border-box",
          }}
        ></img>
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <div>
      <h2>Connect with me!</h2>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
        return (
          <SocialProfile
            key={SOCIAL_PROFILE.id}
            socialProfile={SOCIAL_PROFILE}
          />
        );
      })}
    </div>
  </div>
);

export default SocialProfiles;
