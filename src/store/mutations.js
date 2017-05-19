import {INCREMENT, DECREMENT,HOMESTATE,FOUNDSTATE,USERSTATE} from './types.js';
import getters from './getters.js';//mutations需要用到getter,一起导出
import state from './modules'
//actions中commit将方法传到mutations,mutations需要处理数据，用到getters讲数据return返回

/*const state = {
    count : 10
};*/

//mutations做数据操作
const mutations = {
    [INCREMENT](state) { //state里面包含的是数据
        state.count++;
    },
    [DECREMENT](state) {
        state.count--;
    },
    [HOMESTATE](state) {
        state.homeActive = true;
        state.mineActive = false;
        state.foundActive = false;
    },
    [FOUNDSTATE](state) {
        state.homeActive = false;
        state.foundActive = true;
        state.mineActive = false;
    },
    [USERSTATE](state) {
        state.homeActive = false;
        state.foundActive = false;
        state.mineActive = true;
    },
    headActive(state) {
        state.isShowHead = true;
    },
    hidehead(state) {
        state.isShowHead = false;
    },
    detail(state) {
        state.homeActive = false;
        state.foundActive = false;
        state.mineActive = false;
    }
};

export default {
    state,
    mutations,
    getters
}