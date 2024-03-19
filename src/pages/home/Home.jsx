import Arrivals from "./components/Arrivals/Arrivals";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import Induction from "./components/Induction/Induction";
import Collections from "./components/Collections/Collections";
import Trending from "./components/Trending/Trending";
import Presents from "./components/Presents/Presents";

const Home = () => {
  return (
    <div className='mx-auto'>
      <div className='mx-auto'>
        <VideoCarousel />
      </div>
      <div className='mx-auto py-4 px-4 sm:px-0'>
        <Arrivals />
      </div>
      <div className='mx-auto py-4'>
        <Induction />
      </div>
      <div className='mx-auto py-4 px-4 sm:px-6 md:px-10 lg:px-16'>
        <Collections />
      </div>
      <div className='mx-auto py-4 px-4  sm:px-6 md:px-10 lg:px-16'>
        <Trending />
      </div>
      <div className='mx-auto py-4'>
        <Presents />
      </div>
    </div>
  );
};

export default Home;
