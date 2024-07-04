import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../components-css/single-blog-page.scss'
import Loader from '../components/loader'
import axios from 'axios'

const SingleBlogPage = () => {

  const [singleBlogData, setSingleBlogData] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogById = async () => {
      try {
        let payload = {
          id: location.state
        }
        let response = await axios.post('https://newomkatech.omkatech.in/api/GetBlogdetails', payload)
        setSingleBlogData(response.data.data)
        console.log('response', response)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getBlogById()
  }, [])

  function formatDate(isoString) {
    const date = new Date(isoString);

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const isoString = singleBlogData.created_at;
  const formattedDate = formatDate(isoString);

  const location = useLocation();
  console.log('location', location)
  return (
    <div className='single-blog-page-container'>
      {
        loading ? (<Loader />) : (
          <>
            <h1>{singleBlogData.title}</h1>
            <span>{singleBlogData.minute_read}-MINUTE READ</span>
            <span>{formattedDate}</span>
            <div className="image">
              <img src={singleBlogData.file_path + singleBlogData.image} alt="blog-icon" />
            </div>
            <p dangerouslySetInnerHTML={{ __html: singleBlogData.description }} />
          </>
        )
      }
    </div>
  );
};

export default SingleBlogPage;