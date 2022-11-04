import Campaigns from "./Components/Campaigns";
import Categories from "./Components/Categories";
import Favorites from "./Components/Favorites";
import Header from "./Components/Header";
import MobileApp from "./Components/MobileApp";
import Section from "./Components/Section";
import Card from "./Components/Card";




function App() {
  return (
    <div className="pb-10">
      <Header />
      <Section />
      <Categories />
      <Campaigns />
      <div className="grid container mx-auto gap-y-8"> 
        <Favorites />
        <MobileApp />
        <Card/>
      </div>
    </div>
  );
}

export default App;
