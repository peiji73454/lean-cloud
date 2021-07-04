import React,{Component} from 'react'
import Head from 'components/Head'
import Play from './play'
import 'antd/dist/antd.css';
import { Layout ,Button } from 'antd';
import {NavLink, Route, Switch} from "react-router-dom";
import Main from "components/Main";
const { Header, Footer, Content } = Layout;


// export default class Home extends Component{
//     constructor(props:any){
//         super(props);
//         this.state = {
//             num1:10
//         }
//     }
//     render(){
//         return <Head></Head>
//     }
// }
// <Switch>
//     <Route path='/' component={Main}/>
// </Switch>
export default function Home (){
    return     (
        <Layout className='layouts'>
            <Header>
                <Head/>
            </Header>
            <Content>
         11
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}
