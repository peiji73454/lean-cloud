import RouteConfig from "./routes";
import './App.scss';
import {useEffect} from "react";
import Head from './components/Head'
//todo: src路径不对
import React,{Component} from 'react'

// function App() {
//   useEffect(async()=>{
//     const a=await Head()
//     console.log(a)
//   },[])
//   return <RouteConfig/>
// }

class App extends Component {
  // async componentDidMount() {
  //   const a = await Head()
  //   console.log(a)
  // }

  render() {
    return <RouteConfig/>
  }
}

export default App;
