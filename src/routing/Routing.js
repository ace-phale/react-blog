import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//layouts
import Header from '../layouts/header/Header';
import ShortcutBar from '../layouts/shortcutbar/ShortcutBar';
import Footer from '../layouts/footer/Footer';

//pages
import HomePage from '../pages/homepage/HomePage';
import About from '../pages/about/About';
import TagPage from '../pages/tagpage/TagPage';
import PostPage from '../pages/postpage/PostPage';
import UserPage from '../pages/userpage/UserPage';
import NotFound404 from '../pages/notfound404/NotFound404';

const Routing = () => {
  return (
    <Router>
      <Header />
      <ShortcutBar />
      <Switch>
        <Route path='/react-blog/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/tag/:tag' component={TagPage} />
        <Route path='/post/:id' component={PostPage} />
        <Route path='/user/:id' component={UserPage} />
        <Route exact path='/' component={HomePage} />
        <Route component={NotFound404} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routing;
