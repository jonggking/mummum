import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Waiting from '@pages/Waiting';
import CustomerWaitInfo from '@pages/CustomerWaitInfo';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/cms' element={<Waiting />} />
      <Route path='/wait-info' element={<CustomerWaitInfo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
