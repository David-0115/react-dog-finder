import React from "react";
import { Routes, Route } from "react-router-dom";
import Dog from "./Dog";
import Dogs from "./Dogs";

const RouteList = ({ dogs }) => (
    <Routes>
        <Route path="/dogs/:dog" element={<Dog dogs={dogs} />} />
        <Route path="/dogs" element={<Dogs dogs={dogs} />} />
    </Routes>
);

export default RouteList;
