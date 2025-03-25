import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const newLists = [ 
    { 
        id: 1, 
        title: 'Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition', 
        description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.', 
        images: '/images/images/event-1.jpg',
        link: 'https://example.com/news1'
    }, 
    { 
        id: 2, 
        title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans', 
        description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.', 
        images: '/images/images/event-2.jpg',
        link: 'https://example.com/news2'
    }, 
    { 
        id: 3, 
        title: 'Burger King is testing a new breakfast sandwich', 
        description: 'This is a win for the flatbread fans.', 
        images: '/images/images/event-3.jpg',
        link: 'https://example.com/news3'
    }, 
    { 
        id: 4, 
        title: 'Popeyes permanently adds chicken wings to its menu', 
        description: 'And you can get ’em in five different flavors.', 
        images: '/images/images/event-4.jpg',
        link: 'https://example.com/news4'
    }, 
    { 
        id: 5, 
        title: 'Top salmon with a sizzling mix of aromatics and spices', 
        description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.', 
        images: '/images/images/event-5.jpg',
        link: 'https://example.com/news5'
    }, 
    { 
        id: 6, 
        title: '80 Christmas dinner ideas for the ultimate holiday feast', 
        description: 'Build the perfect Christmas menu with these delicious recipes.', 
        images: '/images/images/event-6.jpg',
        link: 'https://example.com/news6'
    }, 
    { 
        id: 7, 
        title: 'How to make the easiest prime rib roast for the holidays', 
        description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.', 
        images: '/images/images/event-7.jpg',
        link: 'https://example.com/news7'
    }, 
    { 
        id: 8, 
        title: 'Turn leftover turkey into a flavorful Waldorf salad', 
        description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.', 
        images: '/images/images/event-8.jpg',
        link: 'https://example.com/news8'
    }
];


function News() {
    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4 text-danger">News Category</h2>
            <Row>
                {newLists.map(news => (
                    <Col key={news.id} md={6} lg={3} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={news.images} alt={news.title} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text>{news.description}</Card.Text>
                                <Card.Link href={news.link} target="_blank" rel="noopener noreferrer">
                                    {news.title}
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default News;
