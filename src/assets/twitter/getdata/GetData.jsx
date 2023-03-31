import { useEffect, useState } from 'react';
import axios from 'axios';
import ShowData from '../showdata/ShowData';
import "./getdata.scss"

const GetData = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    const filteredData = data.map((news) => (
        <ShowData key={news.id} id={news.id} title={news.title} img={news.imageUrl} />
    ));


  return (
    <div className='news row p-0 m-0'>
        {
            filteredData
        }
    </div>
  )
}

export default GetData;