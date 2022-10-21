import React, { useContext } from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NewsSumary.css';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const NewsSumary = ({ news }) => {
    const { author, title, details, image_url, thumbnail_url, total_view, _id, rating } = news;
    const { name, img, published_date } = author;
    // console.log(news);
    const {user} = useContext(AuthContext);

    const loginAlerd = () =>{
        if(!user){
            toast.error('Please login, befor read');
        }
    }

    return (
        <div className='mb-5 news-sumary'>
            <div className='authur d-flex justify-content-between align-items-center'>
                <div className='auth-info'>
                    <img className='' width={70} src={img} alt="authur img" />
                    <div className='auth-name ms-3'>
                        <p className='mb-0'>{name ? name : 'No Name'}</p>
                        <p className='mb-0'>{published_date}</p>
                    </div>
                </div>
                <div>
                    <span><FaRegBookmark></FaRegBookmark></span>
                    <span className='ms-2'><FaShareAlt></FaShareAlt></span>
                </div>
            </div>
            <h3>{title}</h3>
            <img width="100%" src={image_url} alt="news-img" />
            {
                details.length > 300 ? <p>{details.slice(0, 300) + '.....'} <Link onClick={loginAlerd}className='text-decoration-none' to={`/news/${_id}`}>Read More</Link> </p> : <p>{details}</p>
            }
            <div className='d-flex justify-content-between align-items-center'>
                <span className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2'></FaStar>
                    {rating?.number}
                </span>
                <span className='d-flex align-items-center'>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </span>
            </div>
        </div>
    );
};

export default NewsSumary;