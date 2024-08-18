import { useEffect, useState } from "react";

import useScrollToTop from "../Handlerrs/useScrollToTop";



import ProductTemplate from "./ProductTemplate/ProductTemplate";
import { useGetAllItems } from "../../hooks/useItems";

export default function Catalog() {
  useScrollToTop();
  const [items] = useGetAllItems();

  return (
    <>
      {/* Shop */}
      <section id="shop" className="bg-background-color ">
        <div className="container mx-auto ">
          
          <div className="flex flex-col md:flex-row">
           
            {/* Products List */}
            <div className="w-full md:w-3/4 p-4">
              {/* Products grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <ProductTemplate key={item._id} {...item} />
                  ))
                ) : (
                  <div className="text-background-color font-bold flex justify-center">
                    <p className="text-green-tx">No Items Added</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
