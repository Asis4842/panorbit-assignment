import { BrowserRouter , Routes,Route} from 'react-router-dom'
import './App.css';
import GalleryScreen from './pages/GalleryScreen/GalleryScreen';
import LandingPage from './pages/LandingPage/LandingPage';
import PostDetailsPage from './pages/PostsDetailsPage/PostDetailsPage';
import ProfileDetailPage from './pages/ProfileDetailPage/ProfileDetailPage';
import ToDoScreen from './pages/ToDoScreen/ToDoScreen';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />}  />
      <Route element={<ProtectedRoutes />}>
      <Route path='/profileDetail' element={<ProfileDetailPage />}  />
      <Route path='/postDetails' element={<PostDetailsPage />}  />
      <Route path='/gallery' element={<GalleryScreen />}  />
      <Route path='/todo' element={<ToDoScreen />}  />
      </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
