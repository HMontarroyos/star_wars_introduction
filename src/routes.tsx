import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, FilmId } from "./views";
import { Loading, Header } from "./components";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmId />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
