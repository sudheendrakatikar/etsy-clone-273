import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    /* align-items: center; */
    justify-content: right;
    transition: all 0.5s ease;
    cursor: pointer;
  `;

const Container = styled.div`
    flex: 1;
    margin: 5%;
    max-width: 397px;
    height: 400px;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* background-color: #f5fbfd; */
    position: relative;
    ${Info}{
      opacity: 1;
    }
  `;

const Image = styled.img`
    height: 100%;
    z-index: 2;
  `;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

const Product = ({ item }) => {

  const addToCart = (e) => {
    e.preventDefault()
    // API call to add to cart
  }

  const favourite = (e) => {
    e.preventDefault()
    // API call to add to favourites
  }

  return (
    <Container>
      <Image src='https://i.etsystatic.com/33196552/r/il/2d86c8/3777979625/il_794xN.3777979625_btch.jpg' />
      <Link to={`/product/${item.product_id}`}>
        <Info>
          <Icon onClick={addToCart}>
            <ShoppingCartOutlined />
          </Icon>
          <Icon onClick={favourite}>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Link>
      {item.name}
      <br />
      {item.description}
      <br />
      ${item.price}
    </Container>
  );
};

export default Product