import PostForm from './features/news/components/post/PostForm/PostForm';
import FullPost from './features/news/FullPost/FullPost';
import Home from './features/news/Home/Home';
import MainLayout from './features/news/layout/MainLayout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<FullPost />} />
          <Route path="/news/add" element={<PostForm />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
