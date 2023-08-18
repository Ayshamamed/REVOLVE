import React, { useEffect, useState } from 'react';
import data from "../data/FiltersProduct";
import FilterCard from './FilterCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { useTranslation } from 'react-i18next';

const SectionThree = () => {

  const {t}=useTranslation();
  
  const [product, setProduct] = useState(data);
  const menuCategories = ["All", ...new Set(data.map(item => item.category))];


  const filtercategories = (mc) => {


    localStorage.setItem("category", mc);
    if (mc === "All") {
      setProduct(data)
      return;
    }

    const filterMenu = data.filter((item) => item.category === mc);
    setProduct(filterMenu);
  }
  useEffect(() => {
    const categoryValue = localStorage.getItem("category") || "all"
    filtercategories(categoryValue);
  }, [])


  return (
    <>

      <h1 className='have text-center fw-semibold my-5 '>{t("home.11")}</h1>
      <div className="d-flex justify-content-center col col-12 ">  {menuCategories.map((item) => {
        return <div key={item.id}  >
          <button
            onClick={() => filtercategories(item)}
            className={localStorage.getItem("category") === item ? "filter-button filter btn  m-2  fs-5 ms-2 fw-semibold" : "filter btn m-2 fs-5 ms-2"}
            >{item}
          </button>
        </div>
      })}</div>

      <Splide aria-label="My Favorite Images" options={{
        fixedWidth:"250px",
        rewind: true,
        type: "loop",
        gap: "3rem",
        focus:"center",
        isNavigation:true,
        // autoplay:true,
      }}>
            {product.map((item, index) => {
              return <SplideSlide key={item.id} >
               <FilterCard
                key={item.id}
                menuItem={item}
                id={item.id}
                
              />
              </SplideSlide>
            })}
      </Splide>


    </>
  )
}

export default SectionThree