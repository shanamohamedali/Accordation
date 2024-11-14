import { useState } from 'react'
import './App.css'
import Accord from './components/Accord/Accord'
//import "./components/Accord/Accord.css";
export const faq = [{
  id:1,
  title:'How does React works?',
content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
 {
  id:2,
  title:'How does React works?',
content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
 {
  id:3,
  title:'How does React works?',
content:'Lorem Ipsum is simply dummy text of the printing and typesettingindustry.'},
 {
  id:4,
  title:'How does React works?',
content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
]

function App() {

return (
  <>
    <h3><u>FAQ</u></h3>
    <Accord/>
  </>
)
}

export default App
