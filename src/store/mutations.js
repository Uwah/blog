import {INCREMENT, DECREMENT} from './types.js';
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
    }
};

export default {
    state,
    mutations,
    getters
}