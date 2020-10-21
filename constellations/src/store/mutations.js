export default {
    setConsName (state,consName){
        state.consName = consName;
    },
    setField (state,field){
        state.field = field;
    },
    setErrorCode (state,errorCode){
        state.errorCode = errorCode;
    },

    setData(state,data){//接收数据
        state[state.field] = data;
    }
}
