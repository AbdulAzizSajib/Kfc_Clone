import Card from "../Card/Card";
import Cover from "../Cover/Cover";
import Menu from "../Menu/Menu";
import AdressTitle from "./AdressTitle/AdressTitle";
import Ads from "./Ads/Ads";
import SocialReview from "./SocialReview/SocialReview";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Menu></Menu>
      <Card></Card>
      <Ads></Ads>
      <SocialReview></SocialReview>
      <AdressTitle></AdressTitle>
    </div>
  );
};

export default Home;
