import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IndexPage } from 'pages';
import { Layout } from 'layouts/layout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
