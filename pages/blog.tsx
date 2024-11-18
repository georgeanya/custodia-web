import React, { useState, useMemo } from "react";
import Footer from "../components/footer";
import Navbar1 from "../components/navbar1";
import image from "../public/assets/user.svg";
import axios from "axios";
import Link from "next/link";
import { GetServerSideProps } from "next";
import Head from "next/head";
import favicon from "../public/assets/favicon.png";
import metaCard from "../public/assets/custodia-metacard.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Blog from "../components/blog";
import Newsletter from "@/components/newsletter";

const BlogHome = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Custodia Health Blog</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="diabetes, custodia health, prediabetes, diabetes reversal, reverse diabetes, high cholesterol, patient stories, custodia blog"
        />
        <meta
          name="description"
          content="Find insightful tips and tricks for taking control of your health, read our patient stories, and more"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://custodiahealth.com/blog" property="og:url" />
        <meta content="Custodia Health Blog" property="og:title" />
        <meta
          content="Find insightful tips and tricks for taking control of your health, read our patient stories, and more"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta
          content="An image of the Custodia Health logo"
          property="og:image:alt"
        />
        <meta
          content="https://www.instagram.com/custodiahealth"
          property="og:see_also"
        />
        <meta
          content="https://www.linkedin.com/company/custodia-health"
          property="og:see_also"
        />
        <meta
          content="https://www.facebook.com/custodiahealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/custodiahealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@custodiahealth" />
        <meta name="twitter:creator" content="@custodiahealth" />
        <meta name="twitter:title" content="Custodia Health Blog" />
        <meta
          name="twitter:description"
          content="Find insightful tips and tricks for taking control of your health, read our patient stories, and more"
        />
        <meta
          name="twitter:image"
          content="https://custodiahealth.com/_next/static/media/custodia-metacard.9e18efee.png"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Custodia Health logo"
        />
        <link rel="me" href="https://twitter.com/custodiahealth" />
        <link href="https://custodiahealth.com/blog" rel="canonical" />
        <link href="https://custodiahealth.com/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://custodiahealth.com/"
          hrefLang="x-default"
          rel="alternate"
        />
      </Head>
      <Navbar1 />
      <Blog />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(
    "https://custodia-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc",
    {
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  );

  return {
    props: {
      blogs: data,
      revalidate: 10, // Set the revalidation interval to 10 seconds
    },
  };
};

export default BlogHome;
