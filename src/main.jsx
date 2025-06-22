import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


//for route set from router tutrial start>
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';
//for route set from router tutrialend>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
