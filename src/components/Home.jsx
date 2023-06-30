import Banner from "./Banner/Banner";
import CreateAndSell from "./CreateAndSell/CreateAndSell";
import FeaturedCollections from "./FeaturedCollections/FeaturedCollections";
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
    </>
  );
};

export default Home;
