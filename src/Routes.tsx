import { Routes, Route } from 'react-router-dom';
import { Blog } from './Pages/Blog';
import { Post } from './Pages/Post';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} index />
        <Route path="/post/:id" element={<Post />} />

        <Route path="*" element={<Blog />} />
      </Route>
    </Routes>
  );
}
