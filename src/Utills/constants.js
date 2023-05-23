export const URL = 'https://hn.algolia.com/api/v1/search';
export const URLnextPage = 'https://hn.algolia.com/api/v1/search?query=test&page=';

// import { URL } from '../Utills/constants';
// import {useEffect, useState} from 'react';
// import { URLnextPage } from '../Utills/constants';
// import './styles.css';
// const DivContent = () => {
//     let urlnumber = -1;
//     const [datas, setDatas] = useState ([]);
//     const [dataValue, setDataValue] = useState ('');
//     const [sympleurl, setSympleUrl] = useState (`${URL}`)
//     const [corenext, setCoreNext] = useState (core);
//     const gettingData = async () => {
//         const response = await fetch (sympleurl); 
//         const data = await response.json()
//         setDatas (data.hits);
//     }
//     useEffect (()=> {
//         gettingData ();
//     }, [sympleurl])
//     const handleRemove = (index) => {
//         setDatas (datas.filter ((element, ind) => ind !== index));
//     }
//         // const searchValue = datas.filter (item => {
//         //    return item.author.toLowerCase().includes (dataValue.toLowerCase());
//         // })
//         const handlerSearching = datas.filter(item => {
//             return item.author.toLowerCase().includes(dataValue.toLowerCase());
//           });
//           const handlenext = () => {
//             setCoreNext(urlnumber + 1);
//             setSympleUrl(`${URLnextPage}${corenext + 1}`);
//         }
        
          
//     return (
//         <>
//              <h2>Search Hacker News</h2>
//         <input type = "text" placeholder = "SEARCH" onChange={(event) => setDataValue(event.target.value)}/>
//         <div className = 'btn-container'>
//         <button>Prev</button>
//         <p>1 of 50</p>
//         <button onClick={(handlenext)}>Next</button>
//         </div> 
//            {
//             handlerSearching.map ((item, index) => {
//                 const {title, objectID, relevancy_score, author, url, points, num_comments} = item;
//                 return (
//                   <section className="article-container" key={objectID}>
//                       <div className='article-wrapper'>
//                           <article>
//                               <h4 className='sameStyles'>{title}</h4>
//                               <p className='info sameStyles'>{points} points by {author} | {num_comments}</p>
//                               <a href = {`${url}`} target="_blank" className='sameStyles'>Read More</a>
//                               <p className="remove-button"  onClick={() => handleRemove (index)}>Remove</p>
//                           </article>
//                            </div>
//                   </section>
//               );
//             })
//            }
//         </>
//     )
// }

// export default DivContent;