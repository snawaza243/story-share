// import React, { useEffect, useRef, useState } from 'react';
// import './SerApp.css';
// import { getList, setItem } from './list';

// function App() {
//     const [alert, setAlert] = useState(false)
//     const [itemInput, setItemInput] = useState('');
//     const [typeInput, setTypeInput] = useState('');

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
//         setItem(itemInput, typeInput)
//             .then(() => {
//                 if (mounted.current) {
//                     setItemInput('');
//                     setTypeInput('');
//                     setAlert(true);
//                 }
//             })

//         alert("You have submitted successfully")
//     }

//     return (
//         <>
//             <div className="wrapper">
//                 <h1>Explore the stories...</h1>
//                 {/* <table>
//                     <tr><th>Name</th><th>Type</th></tr>
//                     {list.map((item)=>{
//                         <tr> <td>{item.item}</td><td>{item.type}</td></tr>
//                     })}
//                 </table> */}
//                 <ul>
//                     {list.map(item =>
//                         <li key={item.item}>{item.item} {item.type}

//                         </li>)}
//                     {list.map(item =>
//                         <div className="post" key={item.post_id}>
//                             <img className='postImg' src="https://t.ly/l58e" alt={item.post_id} />
//                             <div className="postInfo">
//                                 <div className="postCats">
//                                     <span className="postCat">{item.post_cat}</span>
//                                 </div>
//                                 <span className='postTitle'>{item.post_title}</span>
//                                 <span className="postDate">{item.post_date}</span>
//                             </div>
//                             <p className='postDesc'>{item.post_desc}</p>
//                         </div>
//                     )}
//                 </ul>
//                 {alert && <h2>Submitted successful</h2>}
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         <p>New Item</p>
//                         <input type="text"
//                             placeholder='Item name'
//                             onChange={event => setItemInput(event.target.value)}
//                             value={itemInput} />

                        
//                         <input type="file"
//                             placeholder='Type name'
//                             onChange={event => setTypeInput(event.target.value)}
//                             value={typeInput} />
//                     </label>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default App;