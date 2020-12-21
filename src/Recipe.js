import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const Recipe = ({
  key,
  title,
  calories,
  image,
  ingredients,
  healthlabels,
  url,
  digest,
}
) => {
    const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="resultBackground">
      <div className="resultBody">
        <Jumbotron className="resultBox">
          <Container>
            <Row>
              <Col>
                <h1>{title}</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <h5>Ingredients</h5>
                <ul className="list">
                  {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                  ))}
                </ul>

                <h5>Health Labels:</h5>
                <ul className="list list-no-dot">
                  {healthlabels.map((healthlabel) => (
                    <li>
                      <span className="badge bg-secondary healthlabel">
                        {healthlabel}
                      </span>
                    </li>
                  ))}
                </ul>

                <h5>Calories: </h5>
                <ul className="list list-no-dot">
                  <li>
                    <span className="calories">
                      {Math.round(calories).toLocaleString()}
                    </span>
                  </li>
                </ul>

                <h5>Nutrient Level </h5>
                <ul className="list list-no-dot">
                  <li>
                    <span className="italicsWithLinks" onClick={() => setModalOpen(!modalOpen)}>
                    Check the nutrient level for this recipe.
                    </span>
                  </li>
                </ul>

                <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                  <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel"></h5>
                    <button
                      aria-label="Close"
                      className=" close"
                      type="button"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                  </div>
                  <ModalBody>
                  <h6>Nutrient level for {title}</h6>
                    <ul className="list">
                      {digest.map((digestdata) => (
                        <li>{digestdata.label} : {parseInt(digestdata.total)}{digestdata.unit}</li>
                      ))}
                    </ul>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => setModalOpen(!modalOpen)}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </Modal>
              </Col>

              <Col xs={6} md={4} className="imageFrame">
                <img src={image} alt="" className="resultImage" />
              </Col>
            </Row>
            <Row>
              <Col>
                <a href={url}>
                  <button type="button" className="btn btn-primary checkRecipe">
                    Click here to check out the Recipe!
                  </button>
                </a>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Recipe;
