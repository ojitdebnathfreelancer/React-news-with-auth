import { createBrowserRouter } from "react-router-dom";
import CatagoryNews from "../Components/CatagoryNews/CatagoryNews";
import Home from "../Components/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";
import Trem from "../Components/Trem/Trem";
import Main from "../Layout/Main";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:() => fetch('http://localhost:5000/news'),
                element:<Home></Home>
            },
            {
                path:'catagory:id',
                loader:({params})=>{
                   return fetch(`http://localhost:5000/catagory/${params.id}`)
                },
                element:<PrivetRoute><CatagoryNews></CatagoryNews></PrivetRoute>
            },
            {
                path:'/news/:id',
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element:<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'trem',
                element:<Trem></Trem>
            },
            {
                path:'/profile',
                element:<PrivetRoute><Profile></Profile></PrivetRoute>
            }
        ],
    }
]);