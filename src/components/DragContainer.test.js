import React, { Component, PropTypes } from 'react';
import * as DragActions from '../actions/DragActions';
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import DragContainer from '../components/DragContainer'
import Draggable, {DraggableCore} from 'react-draggable'

function setup() {
  const props = {
    addFigure: jest.fn(),
	drag: []
  }

  const enzymeWrapper = shallow(<DragContainer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}


  describe('<DragContainer/>', () => {
    it('should call addFigure if e is exist', () => {
      const { enzymeWrapper, props } = setup()
      const container = enzymeWrapper.find('.drag-container')
	  
	  container.simulate('drop', {});
	  expect(props.addFigure.mock.calls.length).toBe(0)
	  container.simulate('drop', {
		  dataTransfer: {getData: function(){return "squre"}},
		  currentTarget: {offsetTop: 40},
		  clientX: 20,
		  clientY: 20
		  });	  
	  expect(props.addFigure.mock.calls.length).toBe(1)	      
    })	
  })