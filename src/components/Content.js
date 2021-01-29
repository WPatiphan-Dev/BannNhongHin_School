import React from 'react'
import './Content.css'

function Content() {
    return (
        <div className="container">
            <div className="content-con">
                <div className="content-l">
                    <img src="../Content-01.jpg" alt=""/>
                </div>
                <div className="content-r">
                    <h2>Sometitle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis quo quasi sit voluptatum minus nostrum tempora delectus commodi id, consequatur qui doloremque, maxime ullam explicabo aut libero, cupiditate iusto?</p>
                </div>
            </div>
            <div className="content-con">
                <div className="content-r">
                    <h2>Sometitle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis quo quasi sit voluptatum minus nostrum tempora delectus commodi id, consequatur qui doloremque, maxime ullam explicabo aut libero, cupiditate iusto?</p>
                </div>
                <div className="content-l">
                    <img src="../Content-02.jpg" alt=""/>
                </div>
            </div>
            <div className="content-con">
                <div className="content-l">
                    <img src="../Content-03.jpg" alt=""/>
                </div>
                <div className="content-r">
                    <h2>Sometitle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis quo quasi sit voluptatum minus nostrum tempora delectus commodi id, consequatur qui doloremque, maxime ullam explicabo aut libero, cupiditate iusto?</p>
                </div>
            </div>
        </div>
    )
}

export default Content
