import "./experience.scss";
import React from "react";
import { ExperienceData } from "./exp_data";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section className="experience__wrapper">
      <h3>Experience</h3>
      <div className="experience__content">
        <ul className="experience__content--list">
          {ExperienceData.map((item, idx) => {
            return (
              <ExperienceItem
                {...item}
                key={`experience__content--listItem${idx}`}
              />
            );
          })}
        </ul>
        <img src="images/experience.svg" alt="" className="experience_img" />
      </div>
    </section>
  );
}
