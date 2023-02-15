function ShopItem(props) {
    const {name, color, img, price} = props.item;
  
    return (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
               <img src={img} className="img-fluid rounded-start" style={{height:70 ,width:70 }} alt={name}></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="row">
                  <div className="col-3">
                    <h5 className="card-title">{name}</h5>
                  </div>
                  <div className="col-3">
                    <p className="card-text">{color}</p>
                  </div>
                  <div className="col-3">
                    <h5 className="card-title">${price}</h5>
                  </div>
                  <div className="col-3">
                    <button type="button" className="btn btn-danger">ADD TO CARD</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default ShopItem
