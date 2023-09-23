import "./css/style.scss";
import "./css/responsive.scss";
import "./js/app";
import backgroundHeader from "/backgroundhome.png";
import Slidebar from "./components/Slidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PopularDestinations from "./components/PopularDestinations";
import BestValueTrips from "./components/BestValueTrips";
import WhyChooseUs from "./components/WhyChooseUs";
import ArticlesTrips from "./components/ArticlesTips";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Slidebar></Slidebar>
        <Navbar></Navbar>
        <Header></Header>
        <PopularDestinations></PopularDestinations>
        <BestValueTrips></BestValueTrips>
        <WhyChooseUs></WhyChooseUs>
        <section id="art-img" className="mt-5" />
        <ArticlesTrips></ArticlesTrips>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
