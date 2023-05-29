import { Routes, Route } from 'react-router-dom';
import { Blog } from './Pages/Blog';
import { Post } from './Pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} index />
      <Route path="/post/:id" element={<Post />} />

      <Route path="*" element={<Blog />} />
    </Routes>
  );
}
