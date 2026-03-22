import "./index.css";
import { Routes, Route } from 'react-router-dom';
import MainLayOut from "./LAYOUTS/MainLayOut";
import BlogPage from './PAGES/BlogPage';
import LocationsPage from './PAGES/LocationsPage';
import ArtistsandPiercersPage from './PAGES/ArtistsandPiercersPage';
import PiercingPage from './PAGES/PiercingPage';
import AftercarePage from './PAGES/AftercarePage';
import StudioPage from './PAGES/StudioPage';
import FAQsPage from './PAGES/FAQsPage';
import BookingPage from './PAGES/BookingPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayOut />}>
          <Route index element={<LocationsPage />} />
          
          {/* Location Routes */}
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/Nairobi" element={<LocationsPage city="Nairobi" />} />
          
          {/* Artists & Piercers Routes */}
          <Route path="/artists" element={<ArtistsandPiercersPage />} />
          <Route path="/artists/Nairobi" element={<ArtistsandPiercersPage type="Nairobi" />} />
          <Route path="/piercers/Nairobi" element={<ArtistsandPiercersPage type="Nairobi" />} />
          
          {/* Piercing Routes */}
          <Route path="/piercing" element={<PiercingPage />} />
          <Route path="/piercing/body" element={<PiercingPage type="body" />} />
          <Route path="/piercing/jewelry" element={<PiercingPage type="jewelry" />} />
          
          {/* Aftercare Routes */}
          <Route path="/aftercare" element={<AftercarePage />} />
          <Route path="/aftercare/tattoo" element={<AftercarePage type="tattoo" />} />
          <Route path="/aftercare/piercing" element={<AftercarePage type="piercing" />} />
          
          {/* Static Pages */}
          <Route path="studio" element={<StudioPage />} />
          <Route path="faqs" element={<FAQsPage />} />
          <Route path="book" element={<BookingPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
  );
}

export default App;