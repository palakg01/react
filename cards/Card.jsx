const Card=(props)=>{
    return(
    <>
      <div className="card-container">
        <div className="card">
          <img className="card-img" alt='pic' src={props.imgsrc}></img>
          <div className="info-container">
            <h3 className="card-title">{props.title}</h3>
            <h3 className="t">{props.info}</h3>

            <a target='_blank' href={props.link} rel="noopener noreferrer"  >
              <button>
              Know More
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }

export default Card;