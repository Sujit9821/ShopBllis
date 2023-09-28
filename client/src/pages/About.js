import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h1>Welcome to ShopBlliss - Your Ultimate Shopping Destination</h1>
<card>
At ShopBliss, we are dedicated to providing you with an unparalleled shopping experience. 
Our commitment to quality, convenience, and customer satisfaction is at the core of everything we do. 
Explore our website and discover a world of products that cater to your every need and desire.
</card>

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
