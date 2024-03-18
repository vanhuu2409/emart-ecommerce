import { Link } from "react-router-dom";

const VideoCarousel = () => {
  return (
    <div className='relative mx-auto top-0 max-h-[40rem] min-h-[20rem]'>
      <video
        className='lg:w-screen w-full h-full min-h-[20rem] object-cover'
        controls={false}
        autoPlay
        muted
        loop
      >
        <source src='/src/assets/video/carousel-video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/4 flex flex-col gap-8 drop-shadow-2xl'>
        <h2 className='text-white text-2xl lg:text-5xl font-bold uppercase tracking-wider'>
          Meet your new <br /> headliners
        </h2>
        <p className='text-white lg:text-[1.3rem] font-extralight text-base tracking-wider'>
          These looks are ready to rock.
        </p>
        <Link
          to='/'
          className='uppercase w-fit bg-white text-[1.125rem] hover:opacity-80 transition-all font-extralight px-8 lg:px-16 py-3 rounded'
        >
          shop festival &apos;fits
        </Link>
      </div>
    </div>
  );
};

export default VideoCarousel;
