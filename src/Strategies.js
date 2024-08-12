import { array3 } from "./Arrays of object";

function Strategies() {
  return (
    <div className="h-screen mob:h-auto mt-20"  id="strategy">
      <h1 className="font-bold text-2xl leading-normal mob:w-64 mob:mx-10 flex justify-center items-center mt-14 w-96 ml-20">
        Qualities & Customizable Website Optimization Strategies
      </h1>

      <div className="mt-20 ml-48 mr-20 mob:w-80 mob:mx-10">
        {array3.map((item, index) => (
          <div key={index} className="flex mob:mb-6">
            <div className="border-t-2 border-slate-300 mob:flex mob:flex-col mb-14 flex justify-between mob:items-start">
              <h1 className="font-bold mt-5 mob:text-center">{item.title}</h1>
              <p className="w-1/2 mt-5 mob:w-80">{item.discription}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center ml-80 mob:ml-10 mt-10 mx-10 mob:justify-start mob:mx-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mt-5 mb-10 mob:bg-orange-500 mob:hover:bg-orange-700">
          Explore All Strategies
        </button>
      </div>
     </div>
  );
}

export default Strategies;

