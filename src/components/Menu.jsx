

const Menu = (props) => {

  return (
    <div className="menu-card">
      <h3 className='flex-ctr'>{props.items.category}</h3>
      <h4 className='flex-ctr'>{props.items.name}</h4>
      <h4 className='flex-ctr'>{props.items.description}</h4>
      <h5 className='flex-ctr'>{props.items.price}</h5>
    </div>
  )
}

export default Menu