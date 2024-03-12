import styled from "@emotion/styled";
import React from "react";

export const TopProductsCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductRating>
          Rating: {product.rating.rate} (Count: {product.rating.count})
        </ProductRating>
      </ProductInfo>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  width: 300px;
  margin: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  color: black;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #097de9;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

const ProductRating = styled.div`
  margin-top: 8px;
`;
