import ShopCard from "./ShopCard"

function CardsView({cards}) {
    return (
    <div className="container mt-2">
      <div className="row">
        {       
          cards.map((card, index) => {
          return <ShopCard card={card} key={index} />
        })}
      </div>
    </div>
  )
}

export default CardsView
