import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorName = image.user?.name || "No author name";
  const authorPortfolioURL = image.user?.portfolio_url;
  return (
    <Card className={styles.cardContainer}>
      <Card.Img
        variant="top"
        src={image.urls.small}
        className={styles.imageCard}
      />
      <Card.Body className={styles.contentCard}>
        <Card.Title>{image.title?.toUpperCase()} </Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <div className={styles.buttonCard}>
          {image.saved ? (
            <Button variant="secondary" onClick={() => deleteImage(image.id)}>
              Delete
            </Button>
          ) : (
            <Button
              variant="secondary"
              type="button"
              onClick={() => saveImage(image.id)}
            >
              Save
            </Button>
          )}
        </div>
      </Card.Body>
      <Card.Footer className={styles.footerCard}>
        {authorPortfolioURL && (
          <Nav.Link href={authorPortfolioURL} target="_blank">
            {authorName}
          </Nav.Link>
        )}
        {!authorPortfolioURL && authorName}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
