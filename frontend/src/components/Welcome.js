import React from "react";
import { Button } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Images gallery</h1>
        <p className="col-md-8 fs-4">
          This is simple application that retrieves photos using Unspash API. In
          order to start enter any search term in the input field.
        </p>
        <Button
          variant="secondary"
          size="lg"
          type="button"
          href="https://unsplash.com"
          target="_blank"
        >
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
