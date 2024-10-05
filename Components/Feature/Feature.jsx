import Image from "next/image";
import { MdDisplaySettings } from "react-icons/md";

const Feature = () => {
  return (
    <div>
      <div className="h-full max-w-7xl m-auto px-5  md:pt-20 pt-10">
        <div className="flex items-center justify-center"></div>
        <div className="py-10 grid md:grid-cols-2 grid-cols-1 h-full gap-6">
          <div className="h-full flex flex-col">
            <div className="h-full flex items-center">
              <div className="space-y-3 h-full">
                <p className="text-xl md:text-2xl capitalize text-[#091133] font-bold">
                  At Digital Albo, we specialize in creating tailored IT
                  solutions that help businesses succeed
                </p>
                <p className="text-gray-700 text-sm md:w-10/12">
                  From consulting to deployment, we ensure your technology
                  ecosystem is secure, scalable, and ready for the future. Trust
                  us to optimize your IT infrastructure while keeping your data
                  safe and accessible.
                </p>
              </div>
            </div>
            <div className="text-xl mt-8">
              <p className="font-bold">Top Features</p>
              <div className="grid grid-cols-2 gap-4">
                {/* Feature items */}
                <div className="flex flex-col p-4 border border-gray-500/15 shadow-2xl rounded-lg overflow-hidden">
                  <MdDisplaySettings className="text-2xl" />
                  <p className="text-xs text-gray-500 mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur perferendis placeat nesciunt eum architecto.
                  </p>
                </div>
                <div className="flex flex-col p-4 border border-gray-500/15 shadow-2xl rounded-lg overflow-hidden">
                  <MdDisplaySettings className="text-2xl" />
                  <p className="text-xs text-gray-500 mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur perferendis placeat nesciunt eum architecto.
                  </p>
                </div>
                <div className="flex flex-col p-4 border border-gray-500/15 shadow-2xl rounded-lg overflow-hidden">
                  <MdDisplaySettings className="text-2xl" />
                  <p className="text-xs text-gray-500 mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur perferendis placeat nesciunt eum architecto.
                  </p>
                </div>
                <div className="flex flex-col p-4 border border-gray-500/15 shadow-2xl rounded-lg overflow-hidden">
                  <MdDisplaySettings className="text-2xl" />
                  <p className="text-xs text-gray-500 mt-2 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur perferendis placeat nesciunt eum architecto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full ">
            <figure className="h-full w-full overflow-hidden">
              <div className="relative w-full h-full flex items-center">
                <Image
                  src="https://i.ibb.co.com/6BK8dxH/Group-9.jpg"
                  alt="Feature Image"
                  fill
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Image Section */}
            <div className="flex-1">
              <figure className="relative w-full h-64 sm:h-52 md:h-64">
                <Image
                  src="https://i.ibb.co.com/VMnHm2k/Group-11.png" // Update with the actual image path
                  alt="Feature"
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </div>

            {/* Text Section */}
            <div className="flex-1 pl-8">
              <h2 className="text-4xl font-extrabold text-gray-900">
                Light, Fast & Powerful
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p className="mt-2 text-lg text-gray-500">
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
