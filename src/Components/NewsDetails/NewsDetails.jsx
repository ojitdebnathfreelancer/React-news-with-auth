import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NewsDetails = () => {
    const news = useLoaderData();
    const {category_id} = news;
    // console.log(news, category_id);

    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={news.image_url} />
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                    {news.details}
                </Card.Text>
                <Link to={`/catagory${category_id}`}>
                    <Button variant="primary">More News</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default NewsDetails;