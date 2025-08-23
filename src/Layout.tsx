import "./Theme.css";
import  Navbar  from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './components/whatsappButton/WhatsButton';


const Layout: React.FC = () => {
    return (
        <div className='layout-container'>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
            <WhatsAppButton />
        </div>
    );
};

export default Layout;