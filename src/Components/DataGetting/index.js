import { URL } from '../Utills/constants';
import {useEffect, useState} from 'react';
import './styles.css';
import Card from '../Card';
const DataGettingAndShowing = () => {
    const [datas, setDatas] = useState ([]);
    const [urlnumber, setUrlNumber] = useState (0);
    const [maxPages, setMaxPages] = useState (0);
    const [searchrequest, setSearchRequest] = useState ('');
    const gettingData = async () => {
        try {
        const response = await fetch (`${URL}?query=${searchrequest}&page=${urlnumber}`); 
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
    }, [urlnumber, searchrequest])
    
        const handlerNextButton = () => {
          if (urlnumber >= maxPages){

          }else {
            setUrlNumber (urlnumber + 1)
          }
        }
        const handlerPrevButton = () => {
            if (urlnumber <= 0) {
            }else {
                setUrlNumber (urlnumber - 1)
            }
        }
     
    return (
        <>
        <h2>Search Hacker News</h2>
        <input type="text" value={searchrequest} className='form-input' onChange={(event) => setSearchRequest (event.target.value)}/>
        <div className="btn-container">
      <button onClick={handlerPrevButton}>Prev</button>
      <p>
        {urlnumber} of {maxPages}
      </p>
      <button onClick={handlerNextButton}>Next</button>
    </div>
    <Card datas = {datas} setDatas = {setDatas}/>
        </>
    )
}

export default DataGettingAndShowing;