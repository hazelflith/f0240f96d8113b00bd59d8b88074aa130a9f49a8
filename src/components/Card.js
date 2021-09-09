import React from 'react'
import styled from 'styled-components'; 
import {Button} from "./../theme/globalStyle";
import { Row, Col } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import IconC from './../components/IconPlace'


const HalfStar = styled(IconC)`
    font-size:12px !important;
    color:#f9423a !important;
    margin-right:2px;
`;

const FullStar = styled(IconC)`
    font-size:12px !important;
    // color:#f9423a !important;
`;


const Icon = styled(IconC)`
    color: #fff;
    font-weight: 100;
    padding: 4px
`;
const Card = styled.div`
    display: flex;
    flex-direction:column;
    background-color:#fff;
    border-radius: 4px;
    box-shadow:0 0px 8px 0 rgba(112, 114, 125, 0.4);
    border-style:hidden;
    margin:8px 0;
    margin-bottom:18px;
`;

const CardImage = styled.img`
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

const CardDesc = styled.div`
    padding: 16px;
    text-align: left;
`;

const Rating = styled.div`
    display: flex;
    flex-direction:row;
    margin: -4px 0 -18px;
`;

const Title = styled.h1`
    margin: 4px 0;
    font-size: 16px;
`;

const Description = styled.div`
    margin: 4px 0;
    font-size: 12px;
`;

const CardPriceContainer = styled.div`
    display : block;
    flex-direction:row;
`;

const PriceValue = styled.div`
    font-weight: 600;
    padding: 4px 0px;
    font-size: 16px;
`;

const CartButton = styled(Button)`
    color:#fff;
    background:#f9423a;
    display:flex;
    font-size:12px;
    padding 6px 24px;
    border-style:none;
    font-weight:600
`;



const RatingScore = styled.label`
    font-size: 14px;
    padding: 2px 8px 2px 0px;
    font-weight: 700;
    margin-bottom:0px;
    color: #6e7679;
`;

const RatingStar = styled.div`
    
`;

const CartContainer = styled.div`
    right: 0px;
    position:absolute;
`;
const ImgContainer = styled.div`
    height:200px;
    display:block;
    overflow: hidden;
`;
class ProductCard extends React.Component {
    constructor() {
      super();
        
      this.state = {
        rating: 0,
        onClick:"/",
        productnName:"-----------------",
        descProduct:"by Kulina . --- ",
        price:"0",
        image : 'assets/img/food1.jpg',
        category:''
      };
        this.onHandleCardClick = this.onHandleCardClick.bind(this)

    }

    onHandleCardClick(e,url){
        e.preventDefault()
        try {
            console.log("card clik ",url)
        } catch (error) {
            
        }
    }
  
    componentDidMount(){
        const { childRef } = this.props;
        console.log("this props ", this.props);
        
        childRef(this);
        this.setState({
            rating: this.props.RatingValue ? this.props.RatingValue : 0,
            onClick: this.props.onClick ? this.props.onClick : "/",
            productnName: this.props.productnName ? this.props.productnName :"-----------------",
            descProduct:this.props.descProduct ? this.props.descProduct : "by Kulina . --- ",
            price: this.props.price ? this.props.price : "0",
            image : this.props.image ? this.props.image : "assets/img/food1.jpg",
            category:this.props.category ? this.props.category : '----'
        })
    }


   
    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
   
    render() {
      const { rating, price, productnName, descProduct, image , category} = this.state;
      
      return (                
        <Card  > 
            <ImgContainer>
                <CardImage src={image} ></CardImage>
            </ImgContainer>
            <CardDesc>
                <Rating>
                    <RatingScore>
                        {rating}
                    </RatingScore>
                    <RatingStar>
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            editing={false}
                            value={rating}
                            starColor={'#f9423a'}
                            emptyStarColor={'#6e7679'}
                            // onStarClick={this.onStarClick.bind(this)}
                            renderStarIcon={() =><FullStar  className="fa fa-star"></FullStar>}
                            renderStarIconHalf={() =><HalfStar  className="fa fa-star-half-o"></HalfStar>}
                        />
                    </RatingStar>
                </Rating>
                <Title>{productnName}</Title>
                    <Description>{descProduct} . {category}</Description>
                <CardPriceContainer>
                    <Row>
                        <Col sm="6" md="6" xs="6" >
                            <PriceValue>Rp. {price}</PriceValue>
                        </Col>
                        <Col sm="6" md="6" xs="6" > 
                            <CartContainer >
                                <CartButton onClick={this.props.cardAction}>ADD <Icon className ="fa fa-plus"></Icon></CartButton>
                            </CartContainer>
                        </Col>
                    </Row>
                </CardPriceContainer>
            </CardDesc>
        </Card>
      );
    }
  }
export default ProductCard;
