import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="resultBody">
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                        <h1>{title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            
                            <h3>Ingredients</h3>
                            <ul className="ingredientList">
                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </ul>
                            <h3>Calories</h3>
                            <p>{calories}</p>
                        </Col>
                        <Col xs={6} md={4} className="imageFrame">
                            <img src={image} alt="" className="resultImage"/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>

    );
}

export default Recipe;