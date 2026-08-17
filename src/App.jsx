import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import ModularKitchen from "./pages/ModularKitchen";
import MasterBedroom from "./pages/MasterBedroom";
import LivingRoom from "./pages/LivingRoom";
import Bathroom from "./pages/Bathroom";
import Wardrobe from "./pages/Wardrobe";
import StudyRoom from "./pages/StudyRoom";
import KidsBedroom from "./pages/KidsBedroom";
import ModularTvUnit from "./pages/ModularTvUnit";
import PoojaRoom from "./pages/PoojaRoom";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import CustomWardrobeDesignersInDelhi from "./pages/CustomWardrobeDesignersInDelhi";
import CustomWardrobeDesignersInGurgaon from "./pages/CustomWardrobeDesignersInGurgaon";
import KidsBedroomDesignerCompanyInDelhi from "./pages/KidsBedroomDesignerCompanyInDelhi";
import ModularKitchenManufacturerInDelhi from "./pages/ModularKitchenManufacturerInDelhi";
import PoojaRoomInteriorDesignerInDelhi from "./pages/PoojaRoomInteriorDesignerInDelhi";
import PremiumModularKitchenInteriorsInDelhi from "./pages/PremiumModularKitchenInteriorsInDelhi";
import StudyRoomInteriorDesignerInDelhi from "./pages/StudyRoomInteriorDesignerInDelhi";
import TopCustomWardrobeDesignerInGurgaon from "./pages/TopCustomWardrobeDesignerInGurgaon";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Sitemap from "./pages/Sitemap";
import HomeFurnitureManufacturerInDelhi from "./pages/HomeFurnitureManufacturerInDelhi";
import HomeFurnitureManufacturerInMumbai from "./pages/HomeFurnitureManufacturerInMumbai";
import ModularKitchenInteriorsInNoida from "./pages/ModularKitchenInteriorsInNoida";
import ModularKitchenManufacturersInMumbai from "./pages/ModularKitchenManufacturersInMumbai";
import ThankYou from "./pages/Thankyou";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou/>}/>
        <Route path="/modular-kitchen" element={<ModularKitchen />} />
        <Route
          path="/modular-kitchen-manufacturer-in-delhi"
          element={<ModularKitchenManufacturerInDelhi />}
        />
        <Route
          path="/premium-modular-kitchen-interiors-in-delhi"
          element={<PremiumModularKitchenInteriorsInDelhi />}
        />
        <Route
          path="/architectural-master-bedroom-interiors-in-delhi"
          element={<MasterBedroom />}
        />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route
          path="/custom-wardrobe-designers-in-delhi"
          element={<CustomWardrobeDesignersInDelhi />}
        />
        <Route
          path="/custom-wardrobe-designer-in-gurgaon"
          element={<CustomWardrobeDesignersInGurgaon />}
        />
        <Route
          path="/top-custom-wardrobe-designer-in-gurgaon"
          element={<TopCustomWardrobeDesignerInGurgaon />}
        />
        <Route path="/study-room-interior-designer" element={<StudyRoom />} />
        <Route
          path="/study-room-interior-designer-in-delhi"
          element={<StudyRoomInteriorDesignerInDelhi />}
        />
        <Route
          path="/kids-bedroom-designer-company"
          element={<KidsBedroom />}
        />
        <Route
          path="/kids-bedroom-designer-company-in-delhi"
          element={<KidsBedroomDesignerCompanyInDelhi />}
        />
        <Route path="/modular-tv-unit" element={<ModularTvUnit />} />
        <Route path="/pooja-room" element={<PoojaRoom />} />
        <Route
          path="/pooja-room-interior-designer-in-delhi"
          element={<PoojaRoomInteriorDesignerInDelhi />}
        />
        <Route
          path="/home-furniture-manufacturer-in-delhi"
          element={<HomeFurnitureManufacturerInDelhi />}
        />
        <Route
          path="/home-furniture-manufacturer-in-mumbai"
          element={<HomeFurnitureManufacturerInMumbai />}
        />
        <Route
          path="/modular-kitchen-interiors-in-noida"
          element={<ModularKitchenInteriorsInNoida />}
        />
        <Route
          path="/modular-kitchen-manufacturers-in-mumbai"
          element={<ModularKitchenManufacturersInMumbai />}
        />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

     
      </Routes>
      <Footer />
    </>
  );
};

export default App;