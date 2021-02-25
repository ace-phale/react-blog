import ListGroup from 'react-bootstrap/ListGroup';

import { NavLink } from 'react-router-dom';
import { popularTags } from '../../static/shortcutBarStatic';

const ShortcutBar = () => {
  const shortcutBarItems = popularTags().map((item) => (
    <ListGroup.Item key={item} className='col-2 text-center p-0' style={{ border: 'none' }}>
      <NavLink className='text-muted' to={'/tag/' + item}>
        {item}
      </NavLink>
    </ListGroup.Item>
  ));
  return (
    <ListGroup className='d-none d-md-flex pt-4' horizontal>
      {shortcutBarItems}
    </ListGroup>
  );
};

export default ShortcutBar;
