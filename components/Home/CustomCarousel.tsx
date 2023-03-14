import React from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'

function CustomCarousel() {
    return (
        <Carousel autoplay autoplaySpeed={2000}>
            <div>
                <img alt='carousel' src='https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' style={{ width: '100%', height: 'auto' }} />                
            </div>
            <div>
                <img alt='carousel' src='https://images.unsplash.com/photo-1511466157866-519498d46d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' style={{ width: '100%', height: 'auto' }} />                
            </div>
        </Carousel>
    )
}

export default CustomCarousel