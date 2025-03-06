import React from "react";
import AchievementSection from "../components/AchievementSection";
import { achievementData } from "../data/achievementData";

const Home: React.FC = () => {
  return (
    <div>
      <AchievementSection data={achievementData} />
    </div>
  );
};

export default Home;
