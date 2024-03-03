import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { LuDot } from "react-icons/lu";

const Index = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 border'>
                <div>
                    <Card style={{ width: '20rem' }}>
                        <Card.Header>
                            <p>Card Title <span style={{}} className='text-secondary'><LuDot /> 10 m</span></p>
                        </Card.Header>
                        <Carousel>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <img src={require('../../assets/img/7-77251_asus-wallpaper-asus-rog-logo-wallpaper-4k.jpg')} alt="" className='w-100' />

                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="Second slide" /> */}
                                <img src={require('../../assets/img/7-77251_asus-wallpaper-asus-rog-logo-wallpaper-4k.jpg')} alt="" className='w-100' />

                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="Third slide" /> */}
                                <img src={require('../../assets/img/7-77251_asus-wallpaper-asus-rog-logo-wallpaper-4k.jpg')} alt="" className='w-100' />

                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Text>
                            <span className='text'>Name</span>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>
    )
}

export default Index