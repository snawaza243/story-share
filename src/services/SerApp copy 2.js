// import React, { useEffect, useRef, useState } from 'react';
// import './SerApp.css';
// import { getList, setItem } from './list';

// function App() {
//     const [alert, setAlert] = useState(false)
//     const [itemInput, setItemInput] = useState('');
//     const [list, setList] = useState([]);

//     const mounted = useRef(true);

//     useEffect(() => {
//         mounted.current = true;
//         if (list.length && !alert) {
//             return;
//         }
//         getList()
//             .then(items => {
//                 if (mounted.current) {
//                     setList(items)
//                 }
//             })
//         return () => mounted.current = false;
//     }, [alert, list])


//     useEffect(() => {
//         if (alert) {
//             setTimeout(() => {
//                 if (mounted.current) {
//                     setAlert(false);
//                 }
//             }, 1000)
//         }
//     }, [alert])


//     // setItem handle
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setItem(itemInput)
//             .then(() => {
//                 if (mounted.current) {
//                     setItemInput('');
//                     setAlert(true);
//                 }
//             })
//         alert("You have submitted successfully")
//     }

//     return (
//         <>
//             <div className="wrapper">
//                 <h1>Explore the story</h1>
//                 <ul>
//                     {list.map(item => <li key={item.item}>{item.item}</li>)}
//                     {/* {list.map(item =>
//                         <div className="post" key={item.post_id}>
//                             <img className='postImg' src="https://play-lh.googleusercontent.com/FCzgw2YD80puDhwEAOsjYCZcbetxOu5CRx7VzEVJ0z1C_FjyHqOefGqkrijyLD_cHbx1" alt={item.post_id} />
//                             <div className="postInfo">
//                                 <div className="postCats">
//                                     <span className="postCat">{item.post_cat}</span>
//                                 </div>
//                                 <span className='postTitle'>{item.post_title}</span>
//                                 <span className="postDate">{item.post_date}</span>
//                             </div>
//                             <p className='postDesc'>{item.post_desc}</p>
//                         </div>
//                     )} */}
//                 </ul>
//                 {alert && <h2>Submitted successful</h2>}
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         <p>New Item</p>
//                         <input type="text"
//                             onChange={event => setItemInput(event.target.value)}
//                             value={itemInput} />
//                     </label>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default App;