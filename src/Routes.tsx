import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home/index';
import PC from './pages/products/pc/index';
import Laptops from './pages/products/laptop/index';
import Licencias from './pages/products/licencias/index';
import ProductDetailPage from './pages/details/index';
import BlankLayout from './BlankLayout';

const Routes = () => {
    return (
        <Router>
            <RouterRoutes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/pc" element={<PC />} />
                    <Route path="/laptops" element={<Laptops />} />
                    <Route path="/licencias" element={<Licencias />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    {/* <Route path="/servicios" element={<Servicios />} /> */}
                </Route>
                <Route element={<BlankLayout />}>
                    {/* <Route path="/thanks" element={<Thanks />} /> */}
                    {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
                </Route>
            </RouterRoutes>
        </Router>
    );
}

export default Routes;