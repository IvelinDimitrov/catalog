import { Link } from "react-router-dom";
export default function DiscoverServices() {
  return (
    <section className="py-16 bg-background-color text-green-tx ">
      <div className="text-center mb-12 lg:mb-20">
        <h2 className="text-5xl font-bold mb-4 ">
          Discover <span className="">Our</span> Services
        </h2>
        <p className="my-7">
          Explore our team, portfolio, and learn more about us
        </p>
      </div>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <img
              className="object-cover object-center w-full mb-8 rounded-xl"
              src="/images/procesService/AboutUS.jpg"
              alt="blog"
            />
            <h2 className="mb-8 text-xs font-semibold tracking-widest  uppercase ">
              Discover Our Story
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
              Get to Know Us Better.
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
            Wood Heaven began with a passion for fine woodworking and a commitment to quality. Over the years, we've grown from a small workshop into a respected name in luxury furniture, blending traditional craftsmanship with modern design. Our dedication to excellence has defined our journey.
            </p>
            <div className="mt-4">
              <Link
                to="/about"
                className="inline-flex items-center mt-4 font-semibold  lg:mb-0 border-2 px-4 py-2 hover:bg-green-tx hover:text-navi transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                title="Read Our Story"
              >
                {" "}
                Read Our Story »
              </Link>
            </div>
          </div>
          <div className="p-6">
            <img
              className="object-cover object-center w-full mb-8 rounded-xl"
              src="/images/procesService/cat.jpg "
              alt="blog"
            />
            <h2 className="mb-8 text-xs font-semibold tracking-widest  uppercase">
              Our Portfolio
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
              Explore Our Creative Projects.
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
            At Wood Heaven, we handpick premium, sustainable woods and blend traditional craftsmanship with modern design. Skilled artisans meticulously craft each piece, ensuring exceptional quality and timeless beauty.
            </p>
            <div className="mt-4">
              <Link
                to="/catalog"
                className="inline-flex items-center mt-4 font-semibold  lg:mb-0 border-2 px-4 py-2 hover:bg-green-tx hover:text-navi transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 "
                title="Explore Our Portfolio "
              >
                {" "}
                Explore Our Portfolio »
              </Link>
            </div>
          </div>
          <div className="p-6">
            <img
              className="object-cover object-center w-full mb-8 rounded-xl"
              src="/images/procesService/eb72ec5388f609b921ae9cce67e843af.jpg"
              alt="blog"
            />
            <h2 className="mb-8 text-xs font-semibold tracking-widest  uppercase">
              Meet Our Team
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
              Discover the Talented Minds Behind Our Success.
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-txt">
            Wood Heaven is powered by a team of skilled artisans, designers, and woodworkers passionate about creating exceptional furniture. Each member brings expertise and dedication, ensuring that every piece reflects our commitment to quality and craftsmanship.
            </p>
            <div className="mt-4">
              <Link
                to="/team"
                className="inline-flex items-center mt-4 font-semibold  lg:mb-0   border-2 px-4 py-2 hover:bg-green-tx hover:text-navi transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                title="Explore Our Team "
              >
                {" "}
                Explore Our Team »
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
