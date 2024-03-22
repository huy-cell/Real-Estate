import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi" 
import CountUp from "react-countup"
const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth flexCenter r-container">
            {/*left side*/}
            <div className="flexColStart r-left">
              
                <div className="r-title">
                    <div className="orange-circle"/>
                    <h1>Khám phá <br/>
                        Bất động sản <br/>
                        phù hợp với bạn
                    </h1>
                </div>
                
                <div className="flexColStart r-des">
                    <span className="secondaryText">Dễ dàng tìm thấy nhiều loại bất động sản phù hợp với bạn</span>
                    <span className="secondaryText">Quên hết mọi khó khăn trong việc tìm kiếm một nơi ở cho bạn</span>
                </div>
                
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} ></HiLocationMarker>
                    <input type="text"></input>
                    <button className="button">Tìm kiếm</button>
                </div>

                <div className="flexCenter starts"> 
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}></CountUp>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Sản phẩm cao cấp</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}></CountUp>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Khách hàng thân thiết</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={30} ></CountUp>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Giải thưởng</span>
                    </div>
                </div>
            </div>
            {/*right side*/}
            <div className="flexCenter r-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt=""/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Residencies