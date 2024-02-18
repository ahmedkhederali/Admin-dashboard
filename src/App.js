
import "./App.css";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Navbar/Header";
import BreadcrumbComponent from "./components/helpers/dropdown/BreadcrumbComponent";
import React, { Suspense, useState } from "react";
import LoaderCompo from "./components/Navbar/Loader/LoaderCompo";

Chart.register(CategoryScale);

export default function App() {
  const [pathChange, setPathChange] = useState(window.location.pathname);
  const [hide, setHide] = useState(false);
  const Home = React.lazy(() => import('./components/Home'));
  const OCR = React.lazy(() => import('./components/OCR'));
  const Prediction = React.lazy(() => import('./components/Prediction'));
  return (
    <div className="App">
      <Header setPathChange={setPathChange}/>
      {!hide && <BreadcrumbComponent pathChange={pathChange}/>}
      <Suspense fallback={<LoaderCompo />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home setHide={setHide} hide={hide}/>} />
        <Route path="/ocr" element={<OCR setHide={setHide} pathChange={pathChange}/>} />
        <Route path="/prediction" element={<Prediction />} />
      </Routes>
      </Suspense>
    </div>
  );
}
