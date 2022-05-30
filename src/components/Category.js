import React from "react";
import { Card, Row, Col, NavLink } from "react-bootstrap";
import Data from "./Data";
import "./Category.css";
import Products from "./Products";
function Category() {
 
  return (
    <>
      <div className="product">
        <Products />
      </div>
      <div className="top">
        <Row sm={12} md={10} lg={10} xl={4} className="cards">
          {Data.products.map((product) => (
            <Col>
              <NavLink to={`/products/${product.id}`} className="navlink">
                <Card className="styl">
                  <Card.Img
                    className="styl__image"
                    variant="top"
                    src={product.image}
                  />
                  <div className="border-img">{product.percentage}</div>
                  <Card.Body className="card-text">
                    <div className="box">
                      <i class="fa fa-cart-arrow-down"></i>
                      <i className="fa fa-heart"></i>
                      <i class="fa fa-align-left"></i>
                    </div>
                    <Card.Title className="card-title">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="desc">
                      {product.description}
                    </Card.Text>
                    <Card.Text className="price">{product.price}</Card.Text>
                    <Card.Text className="discount">
                      {product.discount}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Category;












 //  const [show, setShow] = useState(false)
  //  const showMenu = () =>setShow(!setShow)
//    {/* <button className="" onClick={setShow}>click</button>
// { !show ? <Products /> : null} */}