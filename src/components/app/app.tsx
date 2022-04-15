import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<div />} />
      <Route path="about" element={<div />} />
    </Routes>
  );
};

export default App;
