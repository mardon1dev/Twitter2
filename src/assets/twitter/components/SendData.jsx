import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MenuBar from '../MenuBar';
import SearchBar from '../SearchBar';
import Explore from './explore/Explore';
import Home from './home/Home';
import Lists from './lists/Lists';
import Messages from './messages/Messages';
import More from './more/More';
import Notifications from './notifications/Notifications';
import Profile from './profile/Profile';
import Bookmarks from './bookmarks/Bookmarks'

const SendData = () => {
  return (
    <div className='d-flex justify-content-between w-100 position-relative'>
        <>
            <MenuBar/>
              <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/explore" element={<Explore/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/bookmarks" element={<Bookmarks/>}/>
                <Route path="/lists" element={<Lists/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/more" element={<More/>}/>
              </Routes>
            <SearchBar/>
        </>
    </div>
  )
}

export default SendData;