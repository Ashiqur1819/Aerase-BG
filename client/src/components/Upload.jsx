import { assets } from "../assets/assets";

function Upload() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the magic. Try now
      </h1>

      <div className="text-center pb-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          className="inline-flex gap-3 px-8 py-3 rounded-full cursor-pointer bg-linear-to-r from-[#04cf9c] to-[#1c2c48] m-auto hover:bg-linear-to-r hover:from-[#1c1f48] hover:to-[#04cf9c]"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-white">Upload your image</p>
        </label>
      </div>
    </div>
  );
}

export default Upload;
