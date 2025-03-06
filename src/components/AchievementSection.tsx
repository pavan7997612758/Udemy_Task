import React from "react";
import { Achievement } from "../types/dataTypes";


interface AchievementSectionProps {
  data: Achievement[];
}

const AchievementSection: React.FC<AchievementSectionProps> = ({ data }) => {
  return (
    <div className="achievement-section">
      <h2 className="achievement-heading">See what others are achieving through learning</h2>
      <div className="achievement-container">
        {data.map((item, index) => (
          <div key={index} className="achievement-card">
            <blockquote className="quote">“</blockquote>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
            <div className="user-info">
              <img
                src={item.contents[0].image.url}
                alt={item.contents[0].heading}
                className="user-avatar"
              />
              <div>
                <div className="user-name">{item.contents[0].heading}</div>
                <div className="user-role">{item.contents[0].description}</div>
              </div>
            </div>
            <a href={item.contentUrl} className="course-link" target="_blank" rel="noreferrer">
              {item.contentUrlText} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;