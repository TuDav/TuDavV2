import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar'

import {publicRoutes} from './route/routes'


function App() {
  return (
   <BrowserRouter>
    <ResponsiveAppBar props={publicRoutes}/>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.href} element={<Page/>}/>
          })
        }
       
      </Routes>
   </BrowserRouter>
  );
}

export default App;
