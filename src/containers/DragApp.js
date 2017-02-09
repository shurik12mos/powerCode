import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import * as DragActions from '../actions/DragActions';
import {Figure, DragContainer } from '../components';

import { Tabs, TabLink, TabContent } from 'react-tabs-redux'

@connect(state => ({
  draglist: state.draglist
}))
export default class DragApp extends Component {

  render () {
    const { dispatch } = this.props;	
    const actions = bindActionCreators(DragActions, dispatch);
	
    return (
	<section className={classnames('is-overlay')}>
	  <Figure addFigure={actions.addFigure}/>
	  <div>
	    <Tabs
	      className={classnames('tabs-container is-overlay')}
		  handleSelect={actions.changeSelectedTab}
		  selectedTab={this.props.draglist.tabIs}	  
	    >	
		  <div className={classnames('is-right tab-links')}>		  
	        {this.props.draglist.tabs.map((tab) => <TabLink key={tab} to={tab}>{tab}</TabLink>)}		
	      </div>
		  <div >
	        {this.props.draglist.tabs.map((tab) => 
			  <TabContent key={tab} for={tab}>				
				<DragContainer tab={tab} drag={this.props.draglist.drag[tab]} addFigure={actions.addFigure}/>
			  </TabContent>)}	
		  </div>
	    </Tabs>
	  </div>
	  
	</section>
      
    );
  }
}
