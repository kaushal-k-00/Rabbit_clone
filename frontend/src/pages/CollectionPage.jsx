import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FilterSideBar } from "../components/Products/FilterSideBar";
import { SortOptions } from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

export const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // close side bar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // add eevent listner for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listner
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
  },[]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=114" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=124" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=134" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=149" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=15" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=16" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=17" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 100,
          image: [{ url: "https://picsum.photos/500/650?random=18" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className=" lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : " translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static
         lg:translate-0`}
      >
        <FilterSideBar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* sort options */}
        <SortOptions />
        {/* product grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};
