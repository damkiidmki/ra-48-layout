import ShopItem from './ShopItem';

function ListView({ items } ) {

  return (
    <div className='container mt-2'>
      <div className="row">
        {
        items.map((item, index) => {
          return <ShopItem item={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default ListView
