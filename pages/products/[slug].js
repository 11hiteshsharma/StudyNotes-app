import { TopProductsCard } from "@/components/Product/ProductCard";
import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";

const CaloriePage = ({ topProducts, params }) => {
  const category = params.slug;
  const Container = styled.div`
    height: 100%;
    color: aliceblue;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;
  return (
    <div>
      <Head>
        <title>10 Best {category} Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title={`${topProducts.length} Best ${category} Products`}
        description={`${topProducts.length} Best ${category} Products for bestecommerce.com updated daily.`}
      />
      <h1 style={{ color: "red", textAlign: "center" }}>
        Top {topProducts.length} products of {category}
      </h1>
      <Container>
        {topProducts.map((product) => (
          <TopProductsCard key={product.id} product={product} />
        ))}
      </Container>
    </div>
  );
};

export default CaloriePage;

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on caloriesData
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();
  let paths = categories.map((x) => {
    return { params: { slug: x } };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  // Let's fetch the latest top ranking items in a category from our DB
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.slug}`
  );
  const products = await res.json();

  // Let's pick the 5 best ranked ones
  const topProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 5);

  // Every time we statically generate this page we will have the time-stamped.
  const stats = new Date().toISOString();

  return {
    props: { stats: stats, topProducts, params },
  };
}
