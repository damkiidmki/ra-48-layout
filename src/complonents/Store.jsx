import { useState } from 'react'
import ListView from './ListView';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';

function Store(props) {
  const [icon, setIcon] = useState('view_list');
  const isModule = icon === 'view_module';
  const { products } = props;

  const switchHandler = () => {
    isModule ? setIcon('view_list') : setIcon('view_module');
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitch={switchHandler} />
      {isModule ? <ListView items={products} /> : <CardsView cards={products} />}
    </>
  )
}

export default Store
