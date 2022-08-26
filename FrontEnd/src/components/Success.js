import React from "react";
import { Alert } from "react-bootstrap";

function Success({ success }) {
  return (
    <div>
      <Alert variant="success">{success}</Alert>
    </div>
  );
}

export default Success;
