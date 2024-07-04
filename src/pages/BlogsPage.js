import React, { useEffect, useState } from 'react'
import latestBlogImg from '../pngs/Group 499.png'
import iconImg from '../assets/svgs/menu-bar.svg'
import Loader from '../components/loader'
import '../components-css/blogs-page.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const BlogsPage = () => {
    const [loading, setLoading] = useState(true);
    const [blogsData, setBlogsData] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        const blogData = async () => {
            try{
                let response = await axios.get('https://newomkatech.omkatech.in/api/GetBlogs')
                setBlogsData(response.data.data)
                console.log('checking', response)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }
        
        blogData()
    }, [])
    
    function formatDate(isoString) {
        const date = new Date(isoString);
    
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
    
      const isoString = blogsData?.first_blog[0]?.created_at;
      const formattedDate = formatDate(isoString);
    return (
        <div className='blog-page-main-conatiner'>
            {
                loading ? (<Loader />) : (
                    <>
                        <div className="latest-blog" key={blogsData?.first_blog[0]?.id} onClick={()=> {navigate(`/blog/${blogsData?.first_blog[0]?.id}`, {state: blogsData?.first_blog[0]?.id})}}>
                            <div className="left">
                                <img src={blogsData?.first_blog[0]?.file_path + blogsData?.first_blog[0]?.image} alt="latest-blog-image" />
                            </div>
                            <div className="right">
                                <h2>{blogsData?.first_blog[0]?.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: blogsData?.first_blog[0]?.description }} />
                                <span>{formattedDate}</span>
                                 <div className="icon">
                                    <span><img src={iconImg} alt="icon-image" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="blogs-section">
                            <div className="input">
                                <input type="text" placeholder='Search' />
                            </div>
                            <div className="blogs-cards-section">
                                {
                                    blogsData?.blog_list?.map((blog)=> (
                                        <div key={blog.id} onClick={()=> {navigate(`/blog/${blog.id}`, {state: blog.id})}} className="blog-card">
                                            <span> <img src={iconImg} alt="icon-image" /></span>
                                            <h3>{blog.title}</h3>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default BlogsPage