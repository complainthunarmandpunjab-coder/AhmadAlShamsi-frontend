import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Communities from './pages/Communities';
import OffPlan from './pages/OffPlan';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PropertyDetails from './pages/PropertyDetails';
import Sell from './pages/Sell';
import HolidayHomes from './pages/HolidayHomes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Main Property Routes requested */}
          <Route path="properties" element={<Properties />} />
          <Route path="buy" element={<Properties />} />
          <Route path="buy/*" element={<Properties />} />
          <Route path="rent" element={<Properties />} />
          <Route path="rent/*" element={<Properties />} />
          
          {/* Sell routes */}
          <Route path="sell" element={<Sell />} />
          <Route path="sell-my-property" element={<Sell />} />
          <Route path="sell-my-property/*" element={<Sell />} />

          {/* Off Plan routes */}
          <Route path="offplan" element={<OffPlan />} />
          <Route path="off-plan" element={<OffPlan />} />

          {/* Holiday Homes */}
          <Route path="holiday-homes" element={<HolidayHomes />} />

          {/* Single property detail routes (supports both /property/:id and /properties-single-slider/:id) */}
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="properties-single-slider/:id" element={<PropertyDetails />} />

          {/* Standard company pages */}
          <Route path="communities" element={<Communities />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<About />} />
          <Route path="about-us/*" element={<About />} />
          <Route path="our-story" element={<About />} />
          <Route path="our-team" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
