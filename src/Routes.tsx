import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { Blog } from './Pages/Blog';
import { Post } from './Pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} index />
        <Route path="/post/:postNumber" element={<Post />} />

        <Route path="*" element={<Blog />} />
      </Route>
    </Routes>
  );
}
