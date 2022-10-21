import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumary from '../NewsSumary/NewsSumary';

const Home = () => {
    const allNews = useLoaderData();
    // console.log(allNews);
    return (
        <div>
            {
                allNews.length !== 0? <><h1>Total Newes {allNews.length}</h1>
                {
                    allNews.map(news => <NewsSumary key={news._id} news={news}></NewsSumary>)
                }</>
                :
                <h1>No data</h1>
            }
        </div>
    );
};

export default Home;