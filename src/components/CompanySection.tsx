import React from "react";
import { companyData } from "../data/companyData";
import "../App.css"; 


const CompanySection: React.FC = () => {
  return (
    <div className="company-section">
      <h2 className="company-heading">{companyData.heading}</h2>
      <div className="company-logos">
        {companyData.contents.map((company, index) => (
          <img
            key={index}
            src={company.image.url}
            alt={company.image.altText}
            className="company-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
