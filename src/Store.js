import {createStore,combineReducers} from 'redux';
import {routerReducer } from 'react-router-redux';

import Perf from 'react-addons-perf';

const win = window;
win.Perf = Perf
const reducer = combineReducers({
    showScreen:{data:{},isFocus:false,date:Date.now(),weather:1,mood:'',position:{x:1,y:2}},
    writeScreen:{isShow:false,data:[],cell:1},
    actionScreen:{position:{x:1,y:1},fontSize:12,paperSize:'A4',lineHeight:20,fontspace:5},
    routing:routerReducer
});


export default createStore(reducer,{})