import { array4 } from "./Arrays of object";

function Team() {
  return (
    <div className="mt-96 mx-10 mob:mt-1  mob:w-full mob:ml-1" id="team">
      <div className="flex justify-between  mob:flex mob:flex-col ">
        <h1 className="font-bold text-3xl w-1/3 ml-20  mob:w-64 mob:ml-16  ">
          Get to know our mastah & super keren
        </h1>
        <p className=" w-96 mr-16 mob:w-64 mob:ml-16 mob:mt-5 " >
          We provide SEO services to help your website rank higher on search engines like Google.
        </p>
      </div>



      <div className="flex  justify-evenly  mt-10 mb-14 mob:flex-col mob:items-center">
        {array4.map((item, index) => (
          <div key={index} className="flex flex-col items-center mb-10 mob:mb-6">
            <div className="text-center">
              <img src={item.src} className="w-56 h-56 rounded-3xl object-cover" alt="Rakabuming Suhu" />
              <h1 className="font-bold mt-2">{item.title}</h1>
              <p>{item.discription}</p>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
}

export default Team;
