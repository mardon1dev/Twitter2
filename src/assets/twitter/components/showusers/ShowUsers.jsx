import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../getusers/GeetUsers';


const ShowUsers = () => {

    const users = useContext(UserContext);

  return (
            <div className='searchbar__like'>
                <h4 className='searchbar__like--title' >You may know</h4>
                <div className='serachbar__like--likes'>
                    {
                        users.slice(-Math.round(Math.random()*3+1)).map((profile)=>{
                            return (
                                <div className="searchbar__author mt-5" key ={profile.login.uuid}>
                                    <img src={profile.picture.medium} alt="userphoto" />
                                    <div className="searchbar__author--info me-auto">
                                        <h4>{`${profile.name.first} ${profile.name.last}`}</h4>
                                        <span>{profile.login.username}</span>
                                    </div>
                                    <button className='searchbar__author--button'>Follow</button>
                                </div>
                            )
                        })
                    }
                    <a className='searchbar__like--link' href="https://en.wikipedia.org/wiki/Kunu">Show more</a>
                </div>
            </div>   
  )
}

export default ShowUsers;