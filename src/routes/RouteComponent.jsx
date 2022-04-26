import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { NewPage } from "../components/NewPage";

export const RouteComponent = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/newpage/:userId" element={<NewPage />}></Route>
			</Routes>
		</div>
	);
};