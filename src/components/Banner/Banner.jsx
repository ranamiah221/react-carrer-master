import bannerImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex items-center mb-10 '>
              <div className='w-1/2 py-14'>
                   <h1 className='text-6xl font-bold mb-5'>One Step <br /> Closer For Your <br /> <span className='text-blue-500'>Dream Job</span> </h1>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                   <button className='btn bg-blue-500 text-white hover:bg-green-500 mt-5'>Get Started</button>
              </div>
              <div className='w-1/2'>
                <img className='w-full h-96' src={bannerImg} alt="" />
              </div>
        </div>
    );
};

export default Banner;