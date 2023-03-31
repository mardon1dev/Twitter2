import { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const TweetContext = createContext();

export const TweetProvider = ({children}) =>{

    const [tweets, setTweets] = useState([]);
    const [postTweets, setPostTweets] = useState([])

    const fetchTweet = async()=> {
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            // console.log(res);    
            setTweets(res.data);
        }catch(error){
            console.error(error);
        }
    }

    const postTweet = async ()=>{
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
            setPostTweets(res)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchTweet();
    }, [])
    useEffect(()=>{
        postTweet();
    }, [])

    return(
        <TweetContext.Provider value={tweets}>
            {children}
        </TweetContext.Provider>
    )
}