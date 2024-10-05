import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1  max-w-7xl m-auto px-5 md:pt-0 pt-10
     ">
      <div className="h-full flex items-center">
        <div className="space-y-3">
          <p className="md:text-5xl text-3xl capitalize text-[#091133] font-bold">
            Transform your business with our advanced digital IT services.
          </p>
          <p className="text-gray-700 text-sm w-10/12">
            From consulting to deployment, we ensure your technology ecosystem
            is secure, scalable, and ready for the future. Trust us to optimize
            your IT infrastructure while keeping your data safe and accessible.
          </p>
        </div>
      </div>
      <div className="w-full md:h-full h-72">
        {" "}
        <figure className=" h-full w-full overflow-hidden">
          <div className="relative w-full h-full flex items-center">
            <Image
              src="https://i.ibb.co.com/WkWF1PF/Group-6.png"
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Banner;
