import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable'
import { bindActionCreators } from 'redux';
import * as DragActions from '../actions/DragActions';

export default class DragContainer extends Component { 
   static propTypes = {
      addFigure: PropTypes.func.isRequired
	}   
   
  render () {	
    return (
	  <div className={classnames('drag-container')}
	    onDrop={this.handleDrop.bind(this)}        
        onDragOver={this.preventDefault}		
	  >
	  { this.props.drag.map((el) =>	 		
	   <Draggable
	    key={el.id}
        axis="both"        
		defaultClassName="drag-element"
        defaultPosition={ el.position }        
		bounds="parent"		
        grid={[25, 25]}
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
		style = {el.color}>
        <div className={ el.figure } style={ el.style } ></div>
      </Draggable>
	  )}
	     
	  </div>	
    );
  } 
  
  handleDrop(e) {
	 var name = e.dataTransfer.getData("Text"),
	 y, x,
	 offsetTop = e.currentTarget.offsetTop;
	 
	 y = e.clientY - offsetTop - 75;
	 x = e.clientX - 75;
	 this.props.addFigure(name, x, y, this.props.tab); 	 	 
  }  
   
  preventDefault(event) {
    event.preventDefault();
  }
  
  constructor (props, context) {
    super(props, context);    
  }
}
