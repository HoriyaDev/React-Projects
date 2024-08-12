function About() {
  return (
    <div className="bg-red-100 min-h-screen p-4  " id="about">
      <div className="flex  flex-wrap ml-24  mt-16  mob:mx-8 mob:mt-0" >
        <img src="pic1.jpg"
          className="w-72 h-96 object-cover rounded-t-full rounded-b-full tab:mt-32"

        />
        <div className="mt-16 w-80 ml-64 mob:w-full  mob:-ml-2 mob:mt-5 tab:mt-48 tab:ml-20">
          <h1 className="font-bold text-3xl mb-5  ">Make Your Website More User-Friendly for Search Engines</h1>
          <p>We'll match you with our team of expert strategists who will make sure your top-of-the-line strategies are always on target. Contact us today to get started!</p>
        </div>

      </div>
      <div className="flex justify-center items-center ml-52 -mt-14  mob:mt-16 mob:-ml-10  tab:ml-72">
        <div >
          <h1 className="text-2xl font-bold">120K </h1>
          <p>Domains Indexed</p>
        </div>
        <div className="ml-8">
          <h1 className="text-2xl font-bold">8.990</h1>
          <p>Project Done</p>
        </div>
      </div>



    </div>
  );
}
export default About;
