import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogWrapper from '../bl/BLOGWRAPPER';
import Loading from '../lo/LOADING';

function PostDetails() {
    let params = useParams()
    let [post, setPost] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${params.slug}`)
            .then(response => {
                response.json().then(json => {
                    if (json?.success == true) {
                        setPost(json.data)
                    }
                    setLoading(false)
                })
            })
            .catch()
    }, [params.slug])

    return <BlogWrapper title={post.title}>
        {loading && <div className="row">
            <div className="col">
                <Loading />
            </div>
        </div>}
        {!loading && <section id='postd11' className='singlePost'>
            <img src={post.thumbnail} alt={post.title} className='thumbnail' />
            <div className='d-flex align-items-center justify-content-between bg-light my-4'>
                <div id='poiop' className='p-3  d-flex align-items-center'>
                    <i class="bi bi-person"></i>
                    <span className='d-inline-block ms-2 fw-bold'>{post?.author}</span>
                </div>
                <ul className='py-3 px-0 m-0 d-flex postDetails'>
                    <li>
                        <i className="bi bi-eye"></i> {post?.views}
                    </li>
                    <li>
                        <i className="bi bi-calendar-event"></i> {post?.date}
                    </li>
                    <li>
                        <i className="bi bi-tags"></i> {post?.tags?.join(', ')}
                    </li>
                </ul>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
        </section>}
    </BlogWrapper>
};

export default PostDetails
