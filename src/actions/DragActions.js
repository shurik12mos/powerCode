import * as types from '../constants/ActionTypes';

export function addFigure(name, x, y, tabname) {
	
  return {
    type: types.ADD_FIGURE,
    name: name,
	x: x,
	y: y,
	tabname: tabname
  };
}

export function changeSelectedTab(selectedTab, namespace) {
    return {
        type: types.CHANGE_SELECTED_TAB,
        tab: selectedTab,
        namespace: namespace
    };
}
