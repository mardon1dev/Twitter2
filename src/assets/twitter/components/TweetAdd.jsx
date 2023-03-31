import React from 'react'
import { TweetContext } from '../AddTweet';
import { useContext } from 'react';

const TweetAdd = () => {

    const tweets = useContext(TweetContext);
  return (
    <div>
        {
           tweets.map((tweet)=>{
            return(
              <div key={tweet.id}>
                <h2>{tweet.body}</h2>
              </div>
            )
           })
        }
    </div>
  )
}

export default TweetAdd;