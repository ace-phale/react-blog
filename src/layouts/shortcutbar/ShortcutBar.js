import './ShortcutBar.css';

import ListGroup from 'react-bootstrap/ListGroup';

import { NavLink } from 'react-router-dom';
import { popularTags } from '../../static/shortcutBarStatic';

const ShortcutBar = () => {
  const shortcutBarItems = popularTags().map((item) => (
    <NavLink
      key={item}
      id='tagWrapper'
      className='list-group-item col-2 text-center p-0 py-2'
      style={{ textDecoration: 'inherit', backgroundColor: '#f8f9fa' }}
      to={'/tag/' + item}
    >
      {item}
    </NavLink>
  ));
  return (
    <>
      <ListGroup className='d-none d-md-flex shortcutBar ' horizontal>
        {shortcutBarItems}
      </ListGroup>
    </>
  );
};

export default ShortcutBar;
