import TopBar from '../../components/topbar/TopBar';
import React, { useEffect, useRef, useState } from 'react';
import { getList, setItem } from '../../services/list';
import './write.css'
function Write() {
    const [alert, setAlert] = useState(false)
    const [post_img, setPost_img] = useState('');
    const [post_cat, setPost_cat] = useState('');
    const [post_title, setPost_title] = useState('');
    const [post_date, setPost_date] = useState('');
    const [post_desc, setPost_desc] = useState('');

    const [list, setList] = useState([]);

    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;
        if (list.length && !alert) {
            return;
        }
        getList()
            .then(items => {
                if (mounted.current) {
                    setList(items)
                }
            })
        return () => mounted.current = false;
    }, [alert, list])


    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                if (mounted.current) {
                    setAlert(false);
                }
            }, 1000)
        }
    }, [alert])


    // setItem handle
    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(post_img, post_cat, post_title, post_date, post_desc)
            .then(() => {
                if (mounted.current) {
                    setPost_img('');
                    setPost_cat('');
                    setPost_title('');
                    setPost_date('');
                    setPost_desc('');
                    setAlert(true);
                }
            })

        alert("You have submitted successfully")
    }

    // var newPostImg = document.getElementsByClassName('fileInputLink').value;
    return (
        <>
            {/* <TopBar /> */}
            <div className="write">
                <center>
                <img className='writeImg' src="https://t.ly/BBnW" alt="" />     
                
                {/* <img className='writeImg' src={newPostImg} alt="" /> */}
                </center>
                {alert && <h2>Submitted successful</h2>}
                <form className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup topWriteClassMeta">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"
                            title='Choose Post Image'
                            
                            ></i>
                        </label>
                        {/* <input type="file"
                            title='Insert Post Image'
                            id="fileInput"
                            onChange={event => setPost_img(event.target.value)}
                            value={post_img}
                            style={{ display: "none" }} /> */}
                        <input type="text"
                        // disabled
                        title='Insert Post Image'
                            placeholder='or Image link'
                            id="fileInputLink"
                            onChange={event => setPost_img(event.target.value)}
                            value={"https://t.ly/BBnW"}
                        />

                        <input type="date"
                            placeholder='Post date'
                            id="postDate"
                            onChange={event => setPost_date(event.target.value)}
                            value={post_date}
                        />

                        <input type="text"
                            placeholder='Post Category'
                            id="postCategory"
                            onChange={event => setPost_cat(event.target.value)}
                            value={post_cat}
                        />
                    </div>
                    <div className="writeFormGroup">

                        <input type="text"
                            placeholder="Title"
                            className="writeInput"
                            onChange={event => setPost_title(event.target.value)}
                            value={post_title}
                            autoFocus={true} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea placeholder="Tell your story..."
                            type="text"
                            onChange={event => setPost_desc(event.target.value)}
                            value={post_desc}
                            className="writeInput writeText"></textarea>
                    </div>

                    <div className="writeFormGroup">
                        <button className="writeSubmit writeFormGroup" type="submit">Publish</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Write;