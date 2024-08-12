
import { array2 } from "./Arrays of object";

function Features() {
    return (
        <div className=" mob:w-full mob:text-center mob:mt-30   " >
        
                <h1  className='font-bold text-4xl  w-1/3 text-center mx-auto mt-16 mob:w-64 mob:text-center  mob:text-2xl mob:mr-42'   >Awesome Features Optimizing Your Website</h1>
    
            
             <div className="flex  justify-between mx-44 mt-14 mb-20 mob:mx-10   mob:flex mob:flex-col"> 
                {array2.map((item, index) => (
                    <div key={index} className="w-full p-4 hover:bg-orange-200 rounded-2xl   mob:w-64 mob:text-left mob:mb-6 mob:hover:bg-orange-200">
                        <div className='bg-orange-500 p-2 rounded flex w-12'>
                            <span className="text-white text-3xl">{item.icon}</span>
                        </div>
                        <div>
                            <h3 className='font-bold mt-10'>{item.title}</h3>
                            <p className='mt-2'>{item.description}</p>
                        </div>
                    </div>
                ))}
             </div> 
        </div>
    );
}

export default Features;
