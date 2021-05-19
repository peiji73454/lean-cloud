import { Layout ,Button } from 'antd';
import {useState} from "react";
import './Head.scss';

const { Header, Footer, Content } = Layout;
function Head() {
    const [ homeList] = useState(
        [{id:1,name:'产品'},
            {id:2,name:'价格'},
            {id:3,name:'用户'},
            {id:4,name:'文档'},
            {id:5,name:'学习'},
            {id:6,name:'帮助'},
            {id:7,name:'国际版'},
            {id:8,name:'控制台'},
        ])
    return (
        <Layout className='layouts'>
            <div className='themeC'>222</div>
            <Header className='themeC'>
                <ul> {
                    homeList.map((item,key)=><Button type="link" key={key}>{item.name}</Button>)
                }
                </ul>
                </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>

    );
}

export default Head;
