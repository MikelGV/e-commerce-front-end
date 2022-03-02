import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/navbar/navbar';
import { mobile } from '../../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor pointer;
  border: ${(props)=>props.type === "filled" && "none"};
  background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({display: "none"})}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=>props.color}
`;

const ProductSize = styled.span``;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmontContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
`;


const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px; 
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props)=> props.type === "total" && "500"};
  font-size: ${(props)=> props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type='filled'>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/4271579/pexels-photo-4271579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <Details>
                  <ProductName><b>Product:</b>CONVERSE SHOES</ProductName>
                  <ProductId><b>ID:</b>93813718293</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size:</b>46</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmontContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmontContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                <Details>
                  <ProductName><b>Product:</b>NIKE SHOES</ProductName>
                  <ProductId><b>ID:</b>93813718293</ProductId>
                  <ProductColor color='black' />
                  <ProductSize><b>Size:</b>46</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmontContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmontContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$60</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart