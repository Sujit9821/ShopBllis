import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "ShopBllis - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Sujit Kumar Sangramsingh",
};

export default Layout;
