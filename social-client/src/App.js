import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import routes from './Routes/Routes';
import ModalCommon from './Components/ModalCommon';

function App() {
  return (
    <div className=" bg-secondary min-h-screen webBg">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
