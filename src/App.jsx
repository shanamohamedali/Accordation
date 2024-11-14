import { useState } from 'react'
import './App.css'
import Accord from './components/Accord/Accord'
const faq = [{
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
      <div>
        
        <h3><u>FAQ</u></h3>
        {faq.map((item)=>(
          <Accord key={item.id} title={item.title} content={item.content} id={item.id} />
        )
        )}
      </div>
    </>
  )
}

export default App
