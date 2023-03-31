import React from 'react'
import {CiSearch} from 'react-icons/ci';
import { AiOutlineMore } from "react-icons/ai";
import { FiSettings } from 'react-icons/fi';
import './explore.scss'

const Explore = () => {
  return (
    <div className='explore w-100'>
        <div className='explorebar px-3'>
            <div className='explorebar-input'>
                <div className='searchbar__input'>
                    <CiSearch className='searchbar__input--search'/>
                    <input className='searchbar__input--input w-100' type="text" placeholder="Search Twitter" />
                </div>
                <FiSettings className='setting'/>
            </div>
            <div className='searchbar__trend '>
                <h4 className='searchbar__trend--title'>Trends for you</h4>
                <div className='searchbar__trends'>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot" />
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                    <div className='searchbar__trends--list'>
                        <div className='trend'>
                            <p className='trend-p'>Trending in Germany</p>
                            <h5 className='trend-h4'>Revolution</h5>
                            <span className='trend-span'>50.4K Tweets</span>
                        </div>
                        <AiOutlineMore className="threedot"/>
                    </div>
                </div>
                <a className='searchbar__trend--link' href="https://en.wikipedia.org/wiki/Kunu">Show more</a>
            </div>
            
            <div className='searchbar__others d-flex flex-wrap'>
                <a href="https://en.wikipedia.org/wiki/Kunu">Terms of Service</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Privacy Policy</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Cookie Policy</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Imprint</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">Ads Info</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">More ···</a>
                <a href="https://en.wikipedia.org/wiki/Kunu">© 2021 Twitter, Inc.</a>
            </div>
        </div>
    </div>
  )
}

export default Explore;