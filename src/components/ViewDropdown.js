import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside';
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

function ViewDropdown(props) {

  const [listOpen, setListOpen] = useState(false);

  ViewDropdown.handleClickOutside = () => {
    setListOpen(false);
  }

  const toggleList = () => {
    setListOpen(!listOpen);
  }

  return (
    <div className='dropdown-wrapper'>
      <div 
        className={`dropdown-header${listOpen ? ' open': ''}`} 
        onClick={ () => toggleList() }>
          <h2>Choose your view</h2>
          {listOpen
            ? <p>▲</p>
            : <p>▼</p>
           } 
      </div>
      {listOpen && <ul className='dropdown-list'>
        {props.viewOrders.map( item => (
          <li 
            key={item.id}
            onClick={ () => {
              props.setOrder(item.value);
              toggleList();
              }}>
            {item.name}
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default ViewDropdown;