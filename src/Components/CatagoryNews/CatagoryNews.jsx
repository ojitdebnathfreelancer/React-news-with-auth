import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumary from '../NewsSumary/NewsSumary';

const CatagoryNews = () => {
    const catagoryNews = useLoaderData();
    return (
        <div>
            {
                catagoryNews.lenght !== 0 ?
                    <>
                        <h1>This is catagory news</h1>
                        {
                            catagoryNews.map(news => <NewsSumary key={news._id
                            } news={news}></NewsSumary>)
                        }
                    </>
                    :
                    <h2>No Data</h2>
            }
        </div>
    );
};

export default CatagoryNews;