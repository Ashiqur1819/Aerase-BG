import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-60 sm:mt-20">
      {/* Left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-linear-to-r from-[#04cf9c] to-[#1c2c48] bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" /> images for free
        </h1>
        <p className="my-6 text-base text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          <br className="max-sm:hidden" /> Labore tempore aliquam neque itaque
          esse eligendi.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-3 px-8 py-3 rounded-full cursor-pointer bg-linear-to-r from-[#04cf9c] to-[#1c2c48] m-auto hover:bg-linear-to-r hover:from-[#1c1f48] hover:to-[#04cf9c]"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white">Upload your image</p>
          </label>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
