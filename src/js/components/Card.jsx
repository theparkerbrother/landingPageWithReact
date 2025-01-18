import React from "react";



const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={ props.imgUrl } alt={ props.title } />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.description }</p>
                <a href={ props.buttonUrl } className="btn btn-primary">{ props.buttonText }</a>
            </div>
      </div>
    );
};


/*
const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="#" alt="Title" /> // We should now take care to always close self-closing tags
            <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">Description</p>
                <a href="#" className="btn btn-primary">Button Text</a>
            </div>
      </div>
    );
};
*/



export default Card;