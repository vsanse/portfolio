import "./skills.scss";
import React from "react";
import { SkillsData } from "./skills_data";

export default function Skills() {
  return (
    <section className="skills__wrapper">
      <h3>
        Skills &nbsp; <i class="fas fa-glasses"></i>
      </h3>
      <div className="skills__content">
        <ul className="skills__list">
          {SkillsData.map((skill, idx) => (
            <li className="skills__list--item" key={`skills__list--item${idx}`}>
              {skill.tag && (
                <span dangerouslySetInnerHTML={{ __html: skill.tag }} className={skill.animation}></span>
              )}
              <span className="skill__listItem--label">{skill.title}</span>
            </li>
          ))}
        </ul>
        <img src="images/skills.svg" alt="Skills" className="skills__img" />
      </div>
    </section>
  );
}
