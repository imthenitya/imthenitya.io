import React, { useEffect, useState } from 'react';
import './resume.css'
const Resume =()=>{
const [randomSentence, setRandomSentence] =useState('')
const [initialTime , setInitialTime] = useState('')
const [timeTaken, setTimeTaken] = useState('')
useEffect(()=>{
    const sentences = [
        'Can we go to the park.',
        'Where is the orange cat? Said the big black dog.',
        'We can make the bird fly away if we jump on something.',
        'We can go down to the store with the dog. It is not too far away.',
        'My big yellow cat ate the little black bird.',
        'I like to read my book at school.',
        'We are going to swim at the park.'
    ]
    const index= Math.floor(Math.random()*(sentences.length-1))
    setRandomSentence(sentences[index])
},[])


const ChangeHandler=(e)=>{
    if(!initialTime){
        setInitialTime(new Date().getTime() / 1000)
    }
if(e.target.value==randomSentence){
    const diff = ((new Date().getTime() / 1000)-initialTime)
    setTimeTaken(Math.floor(diff))
}
}
    return(
        <div className='resume'>
            <h1>Test your typing speed</h1>
            <h2>{randomSentence}</h2>
            <textarea placeholder='Type here...' onChange={(e)=>ChangeHandler(e)}/>
            {timeTaken?<p style={timeTaken>=15?{color: 'red'}:{color:'green'}}>You took {timeTaken} seconds to type {randomSentence.split(" ").length} words.</p>:null}
        </div>
    )
}
export default Resume