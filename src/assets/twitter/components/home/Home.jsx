import React, { useRef } from 'react'
import './home.scss'
import Author from '../../author.jpg';
import {CiImageOn} from 'react-icons/ci';
import {AiOutlineFileGif} from 'react-icons/ai';
import {BiPoll} from 'react-icons/bi';
import {BsEmojiSmile} from "react-icons/bs";
import {TbCalendarTime} from "react-icons/tb";
import {GoLocation} from "react-icons/go";
import GetData from '../../getdata/GetData';
import GetData2 from '../../getData2/GetData2';
import { useState } from 'react';
import { TweetContext } from '../../AddTweet';
import { useContext } from 'react';
import axios from 'axios';

const Home = () => {

    const tweets = useContext(TweetContext);

    const [click, setClick] = useState("1");

    const ref = useRef();

    const tweetAdd = ()=>{
        axios.post("https://jsonplaceholder.typicode.com/todos", )
    }


  return (
    <div className='home mb-5'>
        <div className='home-main'>
            <div className='homemain'>
                <h2 className='homemain__title pt-2'>Home</h2>
                <div className='homemain__buttons d-flex align-items-center w-100 justify-content-between pb-2'>
                    <button className='homemain__buttons--button'style={{width:"50%"}} id="button1" onClick={()=>setClick("1")}>
                        <span>For you</span>
                    </button>
                    <button className='homemain__buttons--button'style={{width:"50%"}} id="button2" onClick={()=>setClick("2")}>
                        <span>Following</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='hometweet pt-4'>
            <div className='hometweet__tweet'>
                <img className='hometweet__tweet--img' src={Author} alt="myphoto" />
                <textarea className='hometweet__tweet--text w-100 border-0 ms-2' ref={ref} name="tweet" id="tweet" rows="5" placeholder='What is happening?'></textarea>
            </div>
            <div className='hometweet__extra pt-4'>
                <div className='hometweet__extra--icons d-flex gap-1'>
                    <CiImageOn/>                
                    <AiOutlineFileGif/>
                    <BiPoll/>
                    <BsEmojiSmile/>
                    <TbCalendarTime/>
                    <GoLocation/>
                </div>
                <button className='hometweet__extra--tweet popcenter' onClick={tweetAdd} >Tweet</button>
            </div>
        </div>
        <div className='home__for-data'>
            {click === "1" &&  <GetData id="1"/>}
            {click === "2" &&  <GetData2 id="2"/>}
        </div>
    </div>
  )
}

export default Home;