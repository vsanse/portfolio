import React from "react";

export default function ExperienceItem({
  title,
  duration,
  company,
  logo,
  desc,
  skills,
}) {
  return (
    <li className="experience__item">
      <div className="experience__item--logoWrapper">
        <img src={logo} alt={company} className="experience__item--logo" />
      </div>
      <h4 className="experience__item--title">
        {title} @ {company}
      </h4>
      <p className="experience__item--duration">{duration}</p>
      <ul className="experience__item--skillsList">
        {skills.map((skill, idx) => (
          <li
            className="experience__item--skill"
            key={`experience__item--skill${idx}`}
          >
            <i className={skill.icon}></i>
            <span>{skill.title}</span>
          </li>
        ))}
      </ul>
      <ul className="experience__item--workList">
        {desc.map((item, idx) => (
          <li
            className="experience__item--work"
            key={`experience__item--work${idx}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}
