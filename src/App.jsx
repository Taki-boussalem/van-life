import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Vans from "./pages/Vans";
import VanPage from "./pages/VanPage";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./server";
import Layout from "./components/Layout";
import Dashborad from "./pages/host/Dashborad";
import Income from "./pages/host/Income";
import HostVans from "./pages/host/HostVans";
import Reviews from "./pages/host/Reviews";
import Hostlayout from "./components/Hostlayout";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanDetailPrice from "./pages/host/HostVanDetailPrice";
import HostVanDetailPhotos from "./pages/host/HostVanDetailPhotos";
import HostVanDetailInfo from "./pages/host/HostVanDetailInfo";

export default function App() {
  const [serverData, setServerData] = useState([])
  
  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setServerData(data.vans))
  }, [])
  console.log(serverData)
  return (
    <div className="body">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanPage />} />
          <Route path="host" element={<Hostlayout />}>
            <Route index element={<Dashborad/>}/>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans vansData={serverData} />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanDetailInfo/>}/>
              <Route path="pricing" element={<HostVanDetailPrice/>} />
              <Route path="photos" element={<HostVanDetailPhotos/>}/>
            </Route>  
          </Route>
        </Route>
      </Routes>
    </div>
  );
}