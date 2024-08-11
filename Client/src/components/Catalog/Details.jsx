export default function () {
  return (
    <>
      {" "}
      <section id="product-info" className="bg-background-color">
        <div className="container mx-auto">
          <div className="py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="grid gap-4">
                  {/* Big Image */}
                  <div id="main-image-container">
                    <img
                      id="main-image"
                      className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                      src="/images/catalog/67bc1f7fc7d564709afa307f95297b5b.jpg"
                      alt="Main Product Image"
                    />
                  </div>
                </div>
              </div>
              {/* Product Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div className="pb-8 border-b border-gray-line">
                  <h1 className="text-3xl font-bold mb-4">Preppy T-shirt</h1>
                  <div className="mb-4 pb-4 border-b border-gray-line">
                    <p className="mb-2">
                      Brand:
                      <strong>
                        <a href="#" className="hover:text-primary">
                          {" "}
                          Nike
                        </a>
                      </strong>
                    </p>
                    <p className="mb-2">
                      Product code:<strong> 00123</strong>
                    </p>
                    <p className="mb-2">
                      Availability:<strong> In Stock</strong>
                    </p>
                  </div>
                  <div className="text-2xl font-semibold mb-8">$40.00</div>
                  <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Product Description
                  </h3>
                  <p>
                    This is a premium quality t-shirt perfect for casual wear.
                    Made with high-quality fabric to ensure comfort and
                    durability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navi">
        <div className="container mx-auto">
          <div className="py-12">
            <div className="mt-10">
              <div className="mt-8">
                <div
                  id="description-content"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                  className="tab-content"
                >
                  <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="w-full lg:w-1/4">
                      <h3 className="text-xl font-semibold mb-5">
                        Material &amp; Washing
                      </h3>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Material:{" "}
                        <span className="font-semibold">100% cotton</span>
                      </p>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Fabric:{" "}
                        <span className="font-semibold">Soft jersey</span>
                      </p>
                      <p className="mb-2">
                        Care instructions:{" "}
                        <span className="font-semibold">
                          Machine wash at 30°C, do not tumble dry, iron on low
                          heat, do not bleach
                        </span>
                      </p>
                    </div>
                    <div className="w-full lg:w-1/4">
                      <h3 className="text-xl font-semibold mb-5">
                        Size &amp; Shape
                      </h3>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Model height:{" "}
                        <span className="font-semibold">
                          Our model is 180 cm tall and is wearing size M
                        </span>
                      </p>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Fit: <span className="font-semibold">Regular</span>
                      </p>
                      <p className="mb-2 pb-2 border-b border-gray-line">
                        Length: <span className="font-semibold">Standard</span>
                      </p>
                      <p className="mb-2">
                        Sleeve length:{" "}
                        <span className="font-semibold">Short sleeves</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
