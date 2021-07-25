import bannerPlayLeft from 'assets/banner-play-left.png'
import bannerPlayRight from 'assets/banner-play-right.png'
import bannerServer1 from 'assets/banner-server1.png'
import "./Tutorials.less";
// Import Swiper styles
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
} from 'swiper/core';
import {Button, Row, Col, Image} from 'antd'
import {useState, useEffect} from "react";
import ia_100000011 from 'assets/Tutorials/ia_100000011.jpg'
import ia_100000013 from 'assets/Tutorials/ia_100000013.png'
import ia_100000015 from 'assets/Tutorials/ia_100000015.png'
import ia_100000017 from 'assets/Tutorials/ia_100000017.png'
import ia_100000019 from 'assets/Tutorials/ia_100000019.png'
import ia_100000021 from 'assets/Tutorials/ia_100000021.jpg'
import ia_100000023 from 'assets/Tutorials/ia_100000023.jpg'
import ia_100000025 from 'assets/Tutorials/ia_100000025.jpg'
import ia_100000027 from 'assets/Tutorials/ia_100000027.jpg'

SwiperCore.use([Pagination]);


const processID = () => {
    const uuid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return uuid;
}

interface tutorialItem {
    id: string
    imgUrl: string
    title: string
    clock: string
    bookName: string
    bookUrl: string
    desc: string
}

export default function Tutorials(props: any) {
    const [tutorialList, setTutorialList] = useState<tutorialItem[]>([]);

    // 相当于 componentDidUpdate (没有最后一个参数时)
    useEffect(() => {
        // 相当于 componentDidMount
        setTutorialList([{
            id: processID(),
            imgUrl: ia_100000011,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000013,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000015,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000017,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000019,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000021,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000023,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000025,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }, {
            id: processID(),
            imgUrl: ia_100000027,
            title: '18 天零基础开发一个商业应用',
            clock: '1小节',
            bookName: '刘铭 | 机械工业出版社',
            bookUrl: 'http://product.dangdang.com/24179556.html',
            desc: '本书以构建一个仿 Instagram 项目的实践案例，将所有知识点融入到实践当中，使大家真正理解和掌握如何通过 XcodeSDK 和 Swift3.0 语言来开发iOS应用程序。'
        }])
        return () => {
            // 相当于 componentWillUnmount
        }
    }, [])
    return <>
        <Swiper pagination={true} className="mySwiper">
            <SwiperSlide>
                <img className={'leftCloud'} src={bannerPlayLeft} alt=""/>
                <section className={'bannerPlay2'}>
                    <div className={"title"}>使用 LeanCloud Play</div>
                    <div>
                        <span className={"content"}>开发抢蛋糕小游戏的经验谈</span>
                        <span className={"tip"}>（附防作弊机制）</span>
                    </div>
                    <div className="detail">
                        <Button ghost>
                            查看详情
                        </Button>
                    </div>

                </section>
                <img className={'rightCloud'} src={bannerPlayRight} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={bannerServer1} alt=""/>
            </SwiperSlide>
        </Swiper>
        <ul className="grid">
            <Row gutter={40}>
                {
                    tutorialList.map(item => {
                        return (

                            <Col span={8} key={item.id}>
                                <a className="link" href={item.bookUrl}> <img
                                    className={'bookImage'}
                                    src={item.imgUrl}
                                /></a>
                                <div className={'title'}><a className="link" href={item.bookUrl}>{item.title}</a></div>
                                <div className={'clock-book'}>
                                    <span className={'clock'}> {item.clock}</span>
                                    <a className="link" href={item.bookUrl}>{item.bookName}</a>

                                </div>
                                <p className={'desc'}> {item.desc}</p>
                            </Col>

                        )
                    })
                }
            </Row>
            {/*{*/}
            {/*    tutorialList.slice(3,6).map(item=>{*/}
            {/*    return (*/}
            {/*    <Row>*/}
            {/*    <Col span={8}>*/}
            {/*    <Image*/}
            {/*    width={200}*/}
            {/*    height={200}*/}
            {/*    src="error"*/}
            {/*    />*/}
            {/*    <Button type="link">Link Button</Button>*/}
            {/*    <div>*/}
            {/*    <span> 1 小节</span>*/}
            {/*    <span>刘铭 | 机械工业出版社</span>*/}
            {/*    </div>*/}
            {/*    </Col>*/}
            {/*    <Col span={8}>col-8</Col>*/}
            {/*    <Col span={8}>col-8</Col>*/}
            {/*    </Row>*/}
            {/*    )*/}
            {/*})*/}
            {/*}*/}

        </ul>
    </>
}

