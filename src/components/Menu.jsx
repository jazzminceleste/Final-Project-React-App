

const Menu = (props) => {

  return (
    <div>
      <h2 className='flex-ctr'>{props.items.category}</h2>
      <h3 className='flex-ctr'>{props.items.name}</h3>
      <h4 className='flex-ctr'>{props.items.descriptions}</h4>
      <h5 className='flex-ctr'>{props.items.price}</h5>
    </div>
  )
}

export default Menu