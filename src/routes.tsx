import React, { Suspense } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { Home } from "./views"
import { Loading, Header } from "./components";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Router>
          <Route path="/" element={<Home />} />
        </Router>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
