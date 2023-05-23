import { URL } from '../Utills/constants';
import {useEffect, useState} from 'react';
import { URLnextPage } from '../Utills/constants';
import './styles.css';
const DivContent = () => {
    let core = 0;
    const [datas, setDatas] = useState ([]);
    const [dataValue, setDataValue] = useState ('');
    const [defaultornexturls, setDefaultOrNextUrls] = useState (`${URL}`)
    const [urlnumber, setUrlNumber] = useState (core);
    const [maxPages, setMaxPages] = useState (0);

    const gettingData = async () => {
        try {
        const response = await fetch (defaultornexturls); 
        const data = await response.json();
        const {hits, nbPages} = data;
        setDatas (hits);
        setMaxPages (nbPages);
        //setMinPages (data.page);
        }catch (eror) {
            throw eror;
        }
     
    }
    useEffect (() => {
        gettingData ();
    }, [defaultornexturls])
    const handleRemove = (index) => {
        setDatas (datas.filter ((element, ind) => ind !== index));
    }
    const searchValue = datas.filter (item => {
        return item.author.toLowerCase ().includes (dataValue.toLowerCase());
     }) 
        const handlerNextButton = () => {
            setDefaultOrNextUrls (`${URLnextPage}${urlnumber + 1}`);
            setUrlNumber (urlnumber + 1)
           
        }
        const handlerPrevButton = () => {
            setDefaultOrNextUrls (`${URLnextPage}${urlnumber - 1}`);
            setUrlNumber (urlnumber - 1)
        }
    return (
        <>
        <h2>Search Hacker News</h2>
        <input type = "text" placeholder = "SEARCH" onChange={(event) => setDataValue(event.target.value)}/>
        <div className = 'btn-container'>
        <button onClick={handlerPrevButton}>Prev</button>
        <p>{urlnumber} of {maxPages}</p>
        <button onClick={(handlerNextButton)}>Next</button>
        </div> 
           {
            searchValue.map ((item, index) => {
                const {title, objectID, relevancy_score, author, url, points, num_comments} = item;
                return (
                  <section className="article-container" key={objectID}>
                      <div className='article-wrapper'>
                          <article>
                              <h4 className='sameStyles'>{title}</h4>
                              <p className='info sameStyles'>{points} points by {author} | {num_comments}</p>
                              <a href = {`${url}`} target="_blank" className='sameStyles'>Read More</a>
                              <p className="remove-button"  onClick={() => handleRemove (index)}>Remove</p>
                          </article>
                           </div>
                  </section>
              );
            })
           }
        </>
    )
}

export default DivContent;