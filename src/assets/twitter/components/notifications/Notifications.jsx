import React from 'react'
import {FiSettings} from "react-icons/fi";
import {Link} from "react-router-dom"

import "./notification.scss"

const Notifications = () => {
  return (
    <div className='notification'>
      <div className='w-100'>
      <div className='notification__main position-sticky top-0 w-100'>
        <div className='notification__main--top1'>
          <h2>Notification</h2>
          <FiSettings className='notification__setting'/>
        </div>
        <div className='notification__main--top2 d-flex align-items-center w-100 justify-content-between'>
            <Link>All</Link>
            <Link>Verified</Link>
            <Link>Mentions</Link>
        </div>
      </div>
      <div className='notification__secondary'>
        <div className='notification__seacondary--all'>
          <div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Notifications;