import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllItemsAPI, getUserItemsAPI } from '../../reducers/item.js';
import { If, Then } from '../../components/if/index.js';
import { Link } from 'react-router-dom';


let Items = props => {
  // getting all items
  // useEffect(() => { props.getAllItems() }, []);

const addDefaultImg = (ev) =>{
    ev.target.src = require("../../assets/images/defaultTool.jpg");
    ev.target.onError = null;
  }

  // getting owner's item
  useEffect(() => { 
    console.log('item props', props)
    props.getUserItems(props.ownerId, props.token) }, [])

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4 className="title">All of your items</h4>
                <If condition={!props.ownerId || props.ownerId == undefined}>
                <Then>
                  <h6 className="title">Please log in to see your items</h6>
                </Then>
              </If>
              <If condition={!props.items.items.length && props.ownerId}>
                <Then>
                <h6 className="title">You currently have no items registered  <Link to="/add-item"><button className="btn btn-info btn-fill">Add Item</button></Link></h6>
                </Then>
              </If>
              </div>
              <div className="content all-icons">
                <div className="row">
                  {props.items.items.map((item) =>
                    <div key={item._id}>
                      <h3>{item.item}</h3>
                      <img src={item.image} alt="item" className="imageSize" onError={addDefaultImg}/>
                      <p>{item.type}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  items: state.items,
  ownerId: state.user._id,
  token: state.signup.token
});

const mapDispatchToProps = (dispatch) => ({
  getAllItems: () => dispatch(getAllItemsAPI()),
  getUserItems: (userId, token) => dispatch(getUserItemsAPI(userId, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Items);