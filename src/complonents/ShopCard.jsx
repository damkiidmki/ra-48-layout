function ShopCard(props) {
    const {name, color, img, price} = props.card;
    return (
      <div className="col-sm-4 mb-3">
        <div className="card p-1">
          <img className="card-img-top" src={img} alt={name}></img>
          <div className="card-body">
            <div className="row">
              <div className="col-7">
                 <h5 className="card-title">{name}</h5>
                 <p className="card-text">{color}</p>
                 <p className="card-text"><small className="text-muted">${price}</small></p>
              </div>
              <div className="col-5">
                <button type="button" className="btn btn-danger btn-lg btn-block">ADD TO CARD</button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
}

export default ShopCard
