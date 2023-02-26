// import React from 'react'
// import SideBar from '../sidebar/SideBar'
// import './post.css'
// function Post() {
//   return (
//     <>
//     <div className="post">
//         <img className='postImg' src="https://i.pinimg.com/736x/42/31/97/4231971bbd0512d2a3d965e0451197f7.jpg" alt="" />
//         <div className="postInfo">
//             <div className="postCats">
//                 <span className="postCat">Music</span>
//                 <span className="postCat">Life</span>
//             </div>
//             <span className='postTitle'>Lorem ipsum dolor sit amet!</span>
//             <hr />
//             <span className="postDate">1 hour ago</span>
//         </div>
//         <p className='postDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, accusantium quo, ex eos architecto distinctio nihil et repudiandae quam magni esse enim sit? Impedit natus tempore, sapiente aliquam hic aperiam!</p>
//     </div>
//     </>
//   )
// }

// export default Post



import React, { useEffect, useRef, useState } from 'react';
import './post.css';
import { getList, setItem } from '../../services/list';

function App() {
    const [alert, setAlert] = useState(false)
    const [itemInput, setItemInput] = useState('');
    const [typeInput, setTypeInput] = useState('');




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
        setItem(itemInput, typeInput)
            .then(() => {
                if (mounted.current) {
                    setItemInput('');
                    setTypeInput('');
                    setAlert(true);
                }
            })

        alert("You have submitted successfully")
    }
    return (
        <>
            <div className="wrapper">
                <center><h1>Explore the real stories</h1></center>

                    {list.map(item =>
                        <div className="post" key={item.i}>
                            {/* <img className='postImg' src={item.post_img} alt={item.post_id} /> */}
                            <img className='postImg' src="https://t.ly/BBnW" alt={item.post_id} />

                            <div className="postInfo">
                                <div className="postCats">
                                    <span className="postCat">{item.post_cat}</span>
                                </div>
                                <span className='postTitle'>{item.post_title}</span>
                                <span className="postDate">{item.post_date}</span>
                            </div>
                            <p className='postDesc'>{item.post_desc}</p>
                        </div>
                    )}
                {/* {alert && <h2>Submitted successful</h2>} */}
                
            </div>
        </>
    )
}

export default App;