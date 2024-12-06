import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Context from "./componnets/Context";
import Pageloading from "./componnets/Loading/Pageloading";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


const Homemain = lazy(() => import("./componnets/Homemain"));
const Contacthomex = lazy(() => import("./componnets/Contact/Contacthomex"));

function App() {

  useEffect(() => {

    AOS.init({ duration: 1000 });
  });

  AOS.init({
    offset: 120, // Offset (in px) from the original trigger point
    duration: 800, // Animation duration
    easing: "ease-in-out", // Easing function
    delay: 100, // Delay before animation starts
    once: true, // Whether animation should happen only once
  });
  


  const location = useLocation();

  return (
    <Context>
      <AnimatePresence initial={false}>
        <Suspense fallback={<Pageloading />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homemain />} />
            <Route path="/contact" element={<Contacthomex />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Context>
  );
}

export default App;
