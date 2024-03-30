import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main';
import Waiting from '@pages/Waiting';
import CustomerWaitInfo from '@pages/CustomerWaitInfo';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cms' element={<Waiting />} />
      <Route path='/wait-info/:waitingId' element={<CustomerWaitInfo />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
