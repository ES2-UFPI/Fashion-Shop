import { Outlet } from 'react-router-dom';
import Header from '../../components/Header'
import AdmOptions from '../../components/AdmOptions';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-container">
      <Header title='adm'/>
      <AdmOptions/>
      <Outlet/>
    </div>
  );
}

export default Admin;
