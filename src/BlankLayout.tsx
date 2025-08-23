import './layout.css';
import { Outlet } from 'react-router-dom';



const BlankLayout: React.FC = () => {
    return (
        <div className='layout-container'>
            <Outlet />
        </div>
    );
};

export default BlankLayout;