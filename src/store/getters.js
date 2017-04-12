export default {
    count:state => { //state里面包含数据
        return state.count;
    },
    homeActive:state =>{
    	return state.homeActive;
    },
    foundActive: state => {
    	return state.foundActive;
    },
    mineActive:state => {
    	return state.mineActive;
    },
    isShowHead:state => {
    	return state.isShowHead;
    }


}