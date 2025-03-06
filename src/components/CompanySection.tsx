import React from "react";
import { companyData } from "../data/companyData"; 
import { Company } from "../types/dataTypes"; 
import "../App.css";

const CompanySection: React.FC = () => {
  return (
    <div className="company-section">
      <h2 className="company-heading">Trusted by leading companies</h2>
      <div className="company-logos">
        {companyData.contents.map((company: Company, index: number) => (
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
