import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src="./logo.png" alt="logo" width={100}/>

            <div className="flexCenter h-menu">
                <a href="">Ký túc xá</a>
                <a href="">Giá trị của chúng tôi</a>
                <a href="">Liên hệ với chúng tôi</a>
                <a href="">Bắt đầu</a>
                <button className="button">
                    <a href="">Liên hệ</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header