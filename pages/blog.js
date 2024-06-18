import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Live/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import BlogGrid from "../components/Blog/BlogGrid";
import Footer from "../components/Live/Footer";

const Blog = () => {
  useEffect(() => {
    function wfa_pstMesgFrmFom(evt) {
      if (
        evt.origin === "https://crm.zoho.in" ||
        evt.origin === "https://crm.zohopublic.in"
      ) {
        var loc_obj = JSON.stringify({
          origin: window.location.origin,
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        });
        evt.source.postMessage(
          "prnt_wnd_pg_lc_rc_frm_prwindow_" + loc_obj,
          evt.origin
        );
      }
    }

    window.addEventListener("message", wfa_pstMesgFrmFom, false);

    return () => {
      window.removeEventListener("message", wfa_pstMesgFrmFom, false);
    };
  }, []);
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImgClass="item-bg2"
      />

      {/* <BlogThreeGrid /> */}
      <BlogGrid />
      {/* 
      <script>function wfa_pstMesgFrmFom (evt){if(evt.origin === 'https://crm.zoho.in'|| evt.origin === 'https://crm.zohopublic.in'){var loc_obj=JSON.stringify({ origin:window.location.origin, pathname:window.location.pathname, search:window.location.search, hash:window.location.hash}); evt.source.postMessage(('prnt_wnd_pg_lc_rc_frm_prwindow_'+loc_obj), evt.origin);}}window.addEventListener('message', wfa_pstMesgFrmFom, false);</script> */}

      {/* <iframe
        width="610px"
        height="280px"
        style={{ margin: "0 auto", textAlign: "center", display: "block" }}
        src="https://crm.zoho.in/crm/WebFormServeServlet?rid=ae9339484a89c6134a10a3bb427cb362f73ba02cf64ff51770bab3c75ed4b1cfc3e29b1dd00d5dacfce2799d5f80762bgid50d31cb2ae68b6f28825f22b28362d0bf2f747381216cf0a9f59bf112f230f1e"></iframe> */}

      <Footer />
    </>
  );
};

export default Blog;
