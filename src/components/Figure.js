import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class Figure extends Component {
  
  render () {
    return (
	  <div className={classnames('figure-wrapper')}>
	    <div className={classnames('figure icon is-medium is-centred')}>
		  <i className={classnames('fa fa-square-o')} 
		    aria-hidden="true"
			draggable='true'
		    data-name = "square"	
			onDragStart={this.handleDragStart.bind(this)}
		  ></i>
		</div>
		 <div className={classnames('figure icon is-medium is-centred')}>		 
		  <i className={classnames('fa fa-circle-thin')} 
		    aria-hidden="true"
			draggable='true'
		    data-name = "circle"
			onDragStart={this.handleDragStart.bind(this)}
		  ></i>
		</div>
	  </div>	
    );
  }

  constructor (props, context) {
    super(props, context);    
  }

  handleDragStart (e) {	  
	  var name = e.target.getAttribute('data-name');
	  e.dataTransfer.setData("Text", name);	  
  } 
}
