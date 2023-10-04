import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/allCategories.css";
import myLocalImage1 from "../images/statue.jpg";
import myLocalImage2 from "../images/felt.jpg";
import myLocalImage3 from "../images/thangka.jpg";
import myLocalImage4 from "../images/bowl.jpg";
import myLocalImage5 from "../images/newarii.jpg";
import myLocalImage6 from "../images/ceramics.jpg";

const Categories = () => {
  const categories = useCategory();

  const imageArray = [
    myLocalImage1,
    myLocalImage2,
    myLocalImage3,
    myLocalImage4,
    myLocalImage5,
    myLocalImage6,

    // Add more image imports as needed
  ];

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c, index) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="category-link">
                <div className="flip">
                  <div
                    className="front"
                    style={{
                      backgroundImage: `url(${imageArray[index]})`, // Use the imported local image
                    }}
                  >
                    <h1 className="text-shadow">{c.name}</h1>
                    {/* You can make the button invisible by setting opacity to 0 */}
                    <p className="btn cat-btn" style={{ opacity: 0 }}>
                      View Category
                    </p>
                  </div>
                  <div className="back">
                    <h2>{c.name}</h2>
                    <p>
                      Good tools make application development quicker and easier
                      to maintain than if you did everything by hand.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
