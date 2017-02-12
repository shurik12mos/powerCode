import * as types from '../constants/ActionTypes';
import * as actions from '../actions/DragActions';

describe('actions', () => {
  it('should create an action to add a Figure', () => {
    const name = 'square'
	const x = 0
	const y = 100
	const tabname = 'Board1'
    const expectedAction = {
	  type: types.ADD_FIGURE,
	  name: name,
	  x: x,
	  y: y,
	  tabname: tabname
	}
	
    expect(actions.addFigure(name, x, y, tabname)).toEqual(expectedAction)
  })
  
  it('should create an action to change Tab', () => {
    const selectedTab = 'Board2'
	const namespace = ""	
    const expectedActionTab = {
        type: types.CHANGE_SELECTED_TAB,
        tab: selectedTab,
        namespace: namespace
    };
	
    expect(actions.changeSelectedTab(selectedTab, namespace)).toEqual(expectedActionTab)
  })
})