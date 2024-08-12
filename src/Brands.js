import { imagesPool } from "./Arrays of object";

function Brand() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-10 mob:mx-10  sm:flex sm:justify-evenly sm:border-none">
        {imagesPool.map((img, index) => (
          <img
            key={index}
            src={img.src}
            className="w-20 h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Brand;

