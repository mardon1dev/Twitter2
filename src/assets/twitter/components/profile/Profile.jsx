
import { BiArrowBack } from "react-icons/bi";
import TweetAdd from '../TweetAdd';

import "./profile.scss"


const Profile = () => {

  return (
    <div className='profile w-100'>
        <div className='profileall'>
          <div className='profileall__header'>
            <BiArrowBack/>
            <div className='profileall__header--text'>
              <h2>Mardonbek</h2>
              <span>1000 tweets</span>
            </div>
          </div>
          <div className='profileall__profile'>
            <div className='profileall__profile--backgroundimage'>
            </div>
            <div>
              <div className='profileall__profile--name'>
              </div>
            </div>
          </div>
        </div>
        <TweetAdd/>
    </div>
  )
}

export default Profile;