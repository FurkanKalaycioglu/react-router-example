import React from "react";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  let error = useRouteError();
  console.log(error);

  return <div>ErrorPage</div>;
}

export default ErrorPage;
