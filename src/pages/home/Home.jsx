import { Suspense, lazy } from "react";
import Loading from "./Loading";

const Arrivals = lazy(() => import("./components/Arrivals/Arrivals"));
const Induction = lazy(() => import("./components/Induction/Induction"));
const VideoCarousel = lazy(() =>
  import("./components/VideoCarousel/VideoCarousel")
);
const Collections = lazy(() => import("./components/Collections/Collections"));
const Trending = lazy(() => import("./components/Trending/Trending"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='mx-auto'>
        <div className='mx-auto '>
          <VideoCarousel />
        </div>
        <div className='mx-auto py-4'>
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
      </div>
    </Suspense>
  );
};

export default Home;
