import Banner from "./Banner/Banner";
import CreateAndSell from "./CreateAndSell/CreateAndSell";
import FeaturedCollections from "./FeaturedCollections/FeaturedCollections";
import Footer from "./Footer/Footer";
import NFTs from "./NFTs/NFTs";
import TopCollections from "./TopCollections/TopCollections";
import Transactions from "./Transactions/Transactions";

const Home = () => {
  return (
    <>
      <Banner />
      <Transactions />
      <TopCollections />
      <FeaturedCollections />
      <CreateAndSell />
      <NFTs />
      <Footer/>
    </>
  );
};

export default Home;
