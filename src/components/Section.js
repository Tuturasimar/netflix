import React from "react";
import Films from "./Films";
import Category from "./Category";

const Section = ({ show }) => {
  return (
    <>
      {show.map((item, index) => {
        // console.log(item);
        return (
          <>
            <Category key={item.id} category={item.category} />
            <div className="container">
              {item.images.map((image, index) => {
                return <Films key={index} images={image}></Films>;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Section;
