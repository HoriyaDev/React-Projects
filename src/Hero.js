function Hero() {
  return (
    <div className="bg-gradient-to-b from-red-100 to-red-50 min-h-screen flex items-center justify-center mob:mx-5 tab:-mt-80 tab:ml-20 tab:h-80 mob:mt-20" >
      <div className="flex flex-wrap  p-4 md:p-8 w-full max-w-6xl mx-auto">
        <div className=" mb-8 md:mb-0">
          <h1 className=" text-4xl font-bold leading-tight   w-80    ">
            Growing Your business comes down to 1-thing
          </h1>
          <p className="mt-6  md:text-lg mob:w-80   w-96">
            In the quiet stillness of the morning, the world awakens as sunlight spills over the horizon, painting the sky in hues of gold and pink.
          </p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mt-6">
            Get Started free
          </button>
        </div>
        <img src="/abc.jpg" alt="Hero Image" className="w-80 ml-52 mob:w-72  mob:ml-2 h-96 rounded-b-full mr-20 object-cover tab:ml-96 tab:-mt-80 " />
      </div>
    </div>
  );
}

export default Hero;
