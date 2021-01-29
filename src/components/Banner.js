import React from 'react'
import './Banner.css'

let bannerData = {
    title: "React lading page",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque repellendus laudantium vero quaerat dolorem ea quis! Maxime assumenda facilis quos non dolores reprehenderit, consectetur, doloremque autem tempore ipsam ad consequatur."
}
function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href="#" className="banner-btn">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
