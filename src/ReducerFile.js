const numberReducerFromReducerFile = (state , action) => {
    switch(action.type){
        case "Increase":
            return state + action.fig;
        case "Decrease":
            return state - action.fig;
    }
}
export default numberReducerFromReducerFile;