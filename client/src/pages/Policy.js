import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><h4>Information Collection:</h4> We collect user data for order processing and personalized experiences.</p>
          <p><h4>Data Usage and Protection: </h4>Your data is used securely to enhance our services.</p>
          <p><h4>Sharing and Disclosure:</h4> We don't sell your data; it's shared only for essential purposes.</p>
          <p><h4>User Rights and Choices:</h4> You can access, correct, or delete your data, and opt out of marketing.</p>
          <p><h4>Updates and Contact: </h4>We'll notify you of policy changes; contact us for privacy concerns.</p>

         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
