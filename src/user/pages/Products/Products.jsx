import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactComponent from "../../components/ContactComponent";
import LogoClouds from "../../components/LogoClouds";

import banner1 from "../../../assets/images/banner1.svg";
import banner2 from "../../../assets/images/banner2.svg";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getAllCategories, getStatus } from "../../../features/categorySlice";
import { useSelector } from "react-redux";
const Products = () => {
  const navigate = useNavigate();
  const categories = useSelector(getAllCategories);
  const status = useSelector(getStatus);
  return (
    <>
      <Breadcrumbs title={"Products"} />
      <div className="container grid max-md:grid-cols-1 grid-cols-2 h-auto py-10 gap-x-3">
        {categories &&
          categories.map((category) => (
            <div className="relative  h-[346px]  w-full flex  justify-center flex-col px-24 max-lg:px-10 mb-3 ">
              <img
                className="absolute object-cover !w-full h-full top-0 left-0 -z-10"
                src={`http://devserver298-001-site1.ctempurl.com/api/v1/files?filepath=${category.image.filePath}`}
                alt="banner"
              />
              <div className="content flex flex-col justify-center   h-full">
                <h2 className="text-white font-bold text-2xl ">
                  {category.title}{" "}
                </h2>
                <p className="my-4 text-white lg:leading-2 ">
                  {category.description}{" "}
                </p>
                <button
                  onClick={() => navigate(`/products/${category.id}`)}
                  className="btn__secondary flex items-center w-44"
                >
                  Read more <FiChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <ContactComponent />
      <LogoClouds />
    </>
  );
};

export default Products;
