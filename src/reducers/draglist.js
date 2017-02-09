import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {  
  tabs: ["Board1", "Board2", "Board3"], 
  drag: {"Board1": [], "Board2": [], "Board3": []}
};

let nextId = 1;

export default function friends(state = initialState, action) {
  switch (action.type) {    
	  
	case types.ADD_FIGURE:
	  let addFigure = Object.assign({}, state),
	  id, color, style;
	  
	  id = nextId++;	  
	  
	  color = "rgb(" + Math.round(Math.random()*255) + ", ";
      color += Math.round(Math.random()*255) + ", " + Math.round(Math.random()*255) + ")";	

	  style = {backgroundColor: color};
	  addFigure.drag[action.tabname] = addFigure.drag[action.tabname]||[];
	  addFigure.drag[action.tabname].push({id: id, figure: action.name, position: {x: action.x, y: action.y}, style: style});
	  
      return addFigure;
	  
	case types.CHANGE_SELECTED_TAB:	   
		let newState = Object.assign({}, state);
		newState.tabIs = action.tab;
	  
        return newState;


    default:
      return state;
  }
}
