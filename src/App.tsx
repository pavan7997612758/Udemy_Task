
import Home from "./pages/Home"; // Home contains AchievementSection
import CompanySection from "./components/CompanySection"; 

function App() {
  return (
    <div>
      <CompanySection />
      <Home /> {/* Now AchievementSection will also be rendered */}
    </div>
  );
}

export default App;
