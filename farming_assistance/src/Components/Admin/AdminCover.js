import './admin.css';
import Admin from './Admin';

const AdminCover=()=>{
    return(
    <section id="admin">
    <div className="full-screen-container">
      <div className= "admin-header">
  <div className="admin-header-left" >
    <h1>
      <span>To those who </span>
      <span>work in Acres,</span>
      <span>Not in Hours..!</span>
      <span>We thank You..!</span>
    </h1>
   
  </div>
  <div className="admin-header-right" >
   <div className="box2">
      <Admin /><br></br>
     
  </div>
  </div>
  </div>
  </div>
  </section>
    )
}
export default AdminCover; 