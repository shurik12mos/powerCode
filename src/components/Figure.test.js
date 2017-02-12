import React, { Component, PropTypes } from 'react';

import { shallow } from 'enzyme'
import Figure from '../components/Figure'

  describe('<Figure/>', () => {
    it('should exist data-name and draaggable', () => {
      const enzymeWrapper = shallow(<Figure/>)
      const container = enzymeWrapper.find('.drag-container')
	  
	  container.find('.figure').forEach(function (node) {
	    expect(node.prop('draggable')).to.equal(true);
		expect(node.prop('data-name')).to.equal(true);
	  });    
    })	
  })