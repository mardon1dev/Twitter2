import {FiMessageCircle} from 'react-icons/fi';
import {RiRepeat2Fill} from "react-icons/ri";
import {SlLike} from "react-icons/sl";
import {BiPoll} from 'react-icons/bi';
import {FiShare} from "react-icons/fi";

import './showdata.scss'
const ShowData = (props) => {

    const { img, title, id} = props;

    return (
        <div className="card w-100 pt-2 mt-2" key={id}>
            <div className='d-flex align-items-center mb-3'>
                <img src={img} className="card__img" alt={title} />
                <h3 className="card__text">{title.slice(0,60)}</h3>
            </div>
            <img src={img} alt={title} className="card__image mt-2" />
            <div className='card__icons mt-2'>
                <FiMessageCircle/>
                <RiRepeat2Fill/>
                <SlLike/>
                <BiPoll/>
                <FiShare/>
            </div>
        </div >
    )
}
export default ShowData;