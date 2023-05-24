
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/header/Header';
import Account from './Components/farm/FarmerAccount';
import Farmerpage from './Components/farm/farmer';

import RootLayout from './Components/root';
import FarmerRegistration from './Components/farm/farmerRegistration';
//import Admin from './Components/Admin/Admin';
import AdminCover from './Components/Admin/AdminCover';
import AdminHome from './Components/Admin/AdminHome';
import Supplier from './Components/supplier/Supplier';
import SupplierRegistration from './Components/supplier/supplierRegistration';
import Advertisement from './Components/supplier/Advertisement';
import Advertisements from './Components/supplier/Advertisements';
import AdvertisementList from './Components/supplier/AdvertisementList';
import Advertise from './Components/supplier/Advertise';
import AcceptedCrops from './Components/supplier/AcceptedCrops';
import SellCropList from './Components/farm/GETSellCrops';
import UpdateAdvertisement from './Components/supplier/UpdateAdvertisement';
import AddSellCrops from './Components/farm/AddSellCrops';
import ViewAdvertisements from './Components/farm/ViewAdvertisements';
import ViewComplaints from './Components/farm/Viewcomplaints';
import AddCompModal from './Components/farm/AddCompModal';
import CropDetails from './Components/supplier/Crop_Recieved';
import EditComp from './Components/farm/EditCompModal';
import EditCompModal from './Components/Admin/ComplaintEdit';
import GetComplaints from './Components/Admin/GetComplaints';
import FarmingTips from './Components/farm/ViewFarmingTips';
import HomeAdmin from './Components/Admin/AdminHomePage';
import AdminFarmingTips from './Components/Admin/Farmingtips';
import  EditTipModal from './Components/Admin/EditTipModal';
import AddTipModal from './Components/Admin/AddTipModal';
//import sidebar from './Components/Sidebar';


const router= createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children: [
    {path:'/', element:<Header/>},
    {path:'/farmer',element:<Farmerpage/>,},
    {path:'/farmerRegistration',element:<FarmerRegistration/>},
    {path:'/FarmerAccount', element:<Account/>},
    {path:'/Supplier',element:<Supplier/>},
    {path:'/supplierRegistration',element:<SupplierRegistration/>},
    {path:'/Advertisement', element:<Advertisement/>},
    {path:'/Advertisements',element:<Advertisements/>},
   // {path:'/Admin',element:<Admin/>},
    {path:'/AdminHome',element:<AdminHome/>},
    {path:'/AdminCover',element:<AdminCover/>},
    {path:'/AdvertisementList',element:<AdvertisementList/>},
    {path:'/UpdateAdvertisement',element:<UpdateAdvertisement/>},
    {path:'/Advertise',element:<Advertise/>},
    {path:'/AcceptedCrops',element:<AcceptedCrops/>},
    {path:'/GETSellCrops',element:<SellCropList/>},
    {path:'/AddSellCrops',element:<AddSellCrops/>},
    {path:'/AddCompModal',element:<AddCompModal/>},
    {path:"/ViewAdvertisements",element:<ViewAdvertisements/>},
    {path:"/Viewcomplaints",element:<ViewComplaints/>},
    {path:"/Crop_Recieved",element:<CropDetails/>},
    {path:"/ComplaintEdit",element:<EditCompModal/>},
    {path:"/GetComplaints",element:<GetComplaints/>},
    {path:'/EditCompModal',element:<EditComp/>},
    {path:'/ViewFarmingtips',element:<FarmingTips/>},
    {path:'/EditTipModal',element:<EditTipModal/>},
    {path:'/AddTipModal',element:<AddTipModal/>},
    {path:'/AdminHomePage',element:<HomeAdmin/>},
    {path:'/Farmingtips',element:<AdminFarmingTips/>}

   

   
    // {path:'/Admin',element:<Admin/>}

    
  ],
  
  },
  
 
]);
function App() {
  return <RouterProvider router={router} />
}

export default App;
