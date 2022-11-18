import Campaigns from "./Components/Campaigns";
import Categories from "./Components/Categories";
import Favorites from "./Components/Favorites";
import Header from "./Components/Header";
import MobileApp from "./Components/MobileApp";
import Section from "./Components/Section";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useWindowWidth } from '@react-hook/window-size'


function App() {
  const WindowWidth = useWindowWidth()
  return (
    <div>
      <Header />
      {WindowWidth < 768 && <Campaigns />}
      <Section />
      <Categories />
      {WindowWidth > 768 && < Campaigns />}
      <div className="grid mx-auto gap-y-8">
        <Favorites />
        <MobileApp />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
