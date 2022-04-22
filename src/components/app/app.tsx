import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/layout/layout';
import Home from 'pages/home/home';

import 'assets/styles/styles.scss';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
