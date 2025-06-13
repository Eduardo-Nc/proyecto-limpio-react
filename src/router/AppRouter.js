import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateUsers from "../pages/Users/CreateUsers/CreateUser.View"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUsers />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;