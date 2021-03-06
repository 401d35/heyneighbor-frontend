import React, { useContext, useEffect } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';

import Review from '../review';
import { setMobileNavVisibility } from '../../reducers/Layout';
import cx from 'classnames';
import NeighborSidebar from '../../components/neighborSidebar';
import { Route, Router, Link, Switch } from 'react-router-dom';
import Signup from '../signup';
import Login from '../login';
import Items from '../items2';
import LoginForm from '../loginForm/loginForm.js';
import Rentals from '../rentals';
import Others from '../othersItems';
import CreateItem from '../items2/createItems.js';

const NeighborMain = ({ mobileNavVisibility, hideMobileMenu, history, props }) => {
  // console.log('props',props);

  // const loadItem = (e) => {
  //   e && e.preventDefaul();
  //   if(props.items && props.items.length === 0){
  //     props.getItems();
  //   }
  // }

  // loadItem();

  console.log('that env', process.env.PUBLIC_URL);

  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>

      <div className="content">
        <div className="container-fluid">
          <div className="wrapper">
            <div className="close-layer" onClick={hideMobileMenu}></div>
            <NeighborSidebar />

            <div className="main-panel">
              <Header />
              <Switch>
                <Route path="/review/write" component={Review} />
                <Route path="/signup" component={Signup} />
                {/* <Route path="/" component={Signup} />
                <Route path="" component={LoginForm} /> */}
                {/* <Route path={process.env.PUBLIC_URL + '/'} component={LoginForm} />
                <Route path={process.env.PUBLIC_URL} component={Rentals} /> */}

                <Route path="/heyneighbor-frontend/" component={Signup} />
                <Route path="/loggedin" component={Login} />
                <Route path="/login" component={LoginForm} />
                <Route path="/rentals" component={Rentals} />
                <Route path="/my-items" component={Items} />
                <Route path="/heyneighbor-frontend/my-items" component={Items} />
                <Route path="/others-items" component={Others} />
                <Route path="/add-item" component={CreateItem} />
                <Route component={LoginForm} />
              </Switch>
              
              {/* <Route exact path="/" component={Dashboard} />

            <Route path="/components" component={Components} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/forms" component={Forms} />
            <Route path="/tables" component={Tables} />
            <Route path="/maps" component={MapsPage} />
            <Route path="/charts" component={Charts} />
            <Route path="/calendar" component={Calendar} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NeighborMain);