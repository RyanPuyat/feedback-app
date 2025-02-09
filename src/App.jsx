import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackList from './component/FeedbackList';
import FeedbackStats from './component/FeedbackStats';
import Header from './component/Header';
import FeedbackForm from './component/FeedbackForm';
import AboutIconLinks from './pages/AboutIconLinks';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLinks />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
