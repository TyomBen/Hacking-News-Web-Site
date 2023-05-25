const Card = ({datas, setDatas}) => {
    
    const handleRemove = (objectID) => {
        setDatas (datas.filter ((element) => element.objectID !== objectID));
    }
    return (
        <>
          <section className="stories">
            {datas.map ((item) => {
                const {title, objectID, author, url, points, num_comments} = item;
                    return (
                          <article key={objectID} className='story'>
                            <h4 className='title'>{title}</h4>
                            <p className='info'>{points} points by {author} | {num_comments} comments</p>
                            <a href = {`${url}`} target="_blank" className='read-link'>Read More</a>
                            <p className="remove-btn"  onClick={() => handleRemove (objectID)}>Remove</p>
                          </article>
                    );
                })
            }
        </section>
        </>

    )
 
}
export default Card;