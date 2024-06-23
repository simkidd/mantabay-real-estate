import Button from "@/components/Button";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import Image1 from "@/assets/images/9ea31f784aeaec6994f8ff932e7cdcf9.jpeg";
import Image2 from "@/assets/images/e9ed095315757a2e25bc23d85b7ee93e.jpeg";
import { reviews } from "@/data/reviewData";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const HomePage = () => {
  return (
    <div className="w-full font-montserrat">
      {/* hero section */}
      <section className="w-full">
        <div className="container mx-auto px-2 py-20 grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-primary text-[64px] leading-[1.2] font-raleway">
              Discover
            </h1>
            <h1 className="text-primary text-[64px] leading-[1.2] font-raleway">
              Your Dream{" "}
              <span className="bg-primary text-primary-100 px-3 font-semibold ">
                Home
              </span>
            </h1>
            <h1 className="text-primary text-[64px] leading-[1.2] font-raleway">
              Today
            </h1>

            <p className="text-gray-600 mb-16 mt-6 leading-loose">
              Explore a wide range of properties and find your perfect match.{" "}
              <br />
              Are you looking for a cozy starter home or a spacious luxury
              estate! <br />
              We have something for everyone.
            </p>

            <Button
              variant="solid"
              className="!bg-primary-300 text-white px-8 py-4"
            >
              Browse Properties
            </Button>
          </div>
          <div>jdjdf</div>
        </div>
      </section>
      {/* marquee */}
      <div></div>
      {/* ideal solution */}
      <section className="w-full bg-[#003C3C]">
        <div className="container mx-auto px-2 py-24 text-white">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-medium mb-5 font-raleway">
              Your Ideal Solution
            </h2>
            <p className="leading-loose">
              Explore a wide range of properties and find your perfect match.
              Are you looking for a cozy starter home or a spacious luxury
              estate!
            </p>
          </div>

          <div className="grid grid-cols-3 mt-16">
            <div className="px-8 py-12 border-l">
              <div className="bg-primary-200 size-12 mb-6"></div>
              <h3 className="text-3xl mb-4 font-medium">Free Tour</h3>
              <p>
                Explore a wide range of properties and find your perfect match.
                Are you looking for a cozy starter home or a spacious luxury
                estate!{" "}
              </p>
            </div>
            <div className="px-8 py-12 border-l">
              <div className="bg-primary-200 size-12 mb-6"></div>
              <h3 className="text-3xl mb-4 font-medium">Lease Instantly</h3>
              <p>
                Explore a wide range of properties and find your perfect match.
                Are you looking for a cozy starter home or a spacious luxury
                estate!{" "}
              </p>
            </div>
            <div className="px-8 py-12 border-l">
              <div className="bg-primary-200 size-12 mb-6"></div>
              <h3 className="text-3xl mb-4 font-medium">
                Shareable Properties
              </h3>
              <p>
                Explore a wide range of properties and find your perfect match.
                Are you looking for a cozy starter home or a spacious luxury
                estate!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section */}
      <section className="w-full relative">
        <div className="size-96 h-[500px] bg-primary absolute bottom-0 left-0 z-[-1] opacity-10"></div>
        <div className="container mx-auto px-2 py-24">
          <div className="grid grid-cols-2 items-center">
            <div className="flex justify-end">
              <div className="w-[70%] h-[574px] overflow-hidden">
                <Image
                  src={Image1}
                  alt="image"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full object-right"
                />
              </div>
            </div>
            <div className="px-20">
              <h3 className="text-5xl text-primary font-raleway font-medium capitalize leading-[1.2]">
                Get the best
              </h3>
              <h3 className="text-5xl text-primary font-raleway font-medium capitalize leading-[1.2]">
                Experience in real estate
              </h3>

              <p className="text-gray-600 mt-[18px] mb-8 leading-[28px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat, dolorem. Deleniti aut eaque mollitia iste neque
                voluptatem, expedita quis ut.
              </p>

              <ul className="text-gray-600 grid grid-cols-2 gap-6 mb-14">
                <li className="flex items-center">
                  <CheckCircleIcon className="size-4 mr-1 text-primary-300" />{" "}
                  Site inspection
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="size-4 mr-1 text-primary-300" />{" "}
                  Managed view
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="size-4 mr-1 text-primary-300" />{" "}
                  Premium Service
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="size-4 mr-1 text-primary-300" />{" "}
                  Secured Properties
                </li>
              </ul>

              <Button
                variant="solid"
                className="!bg-primary-300 text-white px-8 py-4 hover:!bg-blue"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* review section */}
      <section className="w-full relative">
        <div className="w-full bg-review-bg h-[448px] relative bg-center bg-no-repeat bg-cover">
          <div className="w-full bg-review-bg-gradient h-full absolute top-0 left-0"></div>
        </div>
        <div className="container mx-auto px-2 absolute top-[40%] left-1/2 -translate-x-1/2">
          <div className="grid grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white px-6 py-8 shadow-lg rounded-md">
                <div className="size-10 bg-primary-100 rounded-full flex items-center justify-center text-primary bg-opacity-20 ">
                  <BiSolidQuoteAltLeft />
                </div>
                <p className="mt-4 mb-7 text-gray-600">{review.text}</p>
                <div className="flex items-center">
                  <div className="size-12 rounded-full mr-3 overflow-hidden">
                    <Image
                      src={review.image}
                      alt="review-img"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p>{review.author.name}</p>
                    <p className="font-medium text-sm">{review.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[32px] bg-blue"></div>
        <div className="w-full h-[200px]"></div>
      </section>

      {/* newsletter section */}
      <section className="w-full bg-[#BABABA1A]">
        <div className="container mx-auto px-2 w-full py-14 flex flex-col items-center">
          <h3 className="text-5xl text-primary font-raleway font-medium capitalize leading-[1.2]">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-600 mt-[18px] mb-8 leading-[28px]">
            Get all out updates and latest properties
          </p>

          <form className="flex gap-6 max-w-2xl w-full">
            <input
              type="text"
              placeholder="Your Email Address"
              className="border-b-primary-300 border-b-2 w-full focus:outline-none bg-transparent"
            />

            <Button
              variant="solid"
              className="!bg-primary-300 text-white px-8 py-4"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
