import React from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        <Button variant="secondary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{" "}
        {!image.saved && (
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => saveImage(image.id)}
          >
            Save
          </button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
