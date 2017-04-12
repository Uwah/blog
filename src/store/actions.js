import * as types from './types.js';

//App.vue 文件中mapActions数组管理的方法传到action处理，逻辑，异步等

export default {
    increment: ({commit}) => {
        commit(types['INCREMENT']);
    },
    decrement:({commit}) => {
        commit(types['DECREMENT']);
    },
    homestate:({commit}) => {
    	commit(types['HOMESTATE']);
    },
    foundstate:({commit}) => {
    	commit(types['FOUNDSTATE']);
    },
    userstate:({commit}) => {
    	commit(types['USERSTATE']);
    },
    isshead:({commit}) => {
    	commit('headActive');
    },
    hidehead:({commit}) => {
    	commit('hidehead');
    }
}