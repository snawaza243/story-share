// only display data

// export function getList() {
//     return fetch('http://localhost:3333/post')
//       .then(data => data.json())
//   }


// // sending data to api
// export function getList() {
//   return fetch('http://localhost:3333/post')
//     .then(data => data.json())
// }

// export function setItem(item, type) {
//   return fetch('http://localhost:3333/post', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         item,
//         type
//       })
//     })
//     .then(data => data.json())
// }


// json-server --watch db.json
// sending data to api
export function getList() {
  return fetch('http://localhost:3000/post')
    .then(data => data.json())
}

export function setItem(post_img, post_cat, post_title, post_date, post_desc) {
  return fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post_img,
      post_cat,
      post_title,
      post_date,
      post_desc
    })
  })
    .then(data => data.json())
}