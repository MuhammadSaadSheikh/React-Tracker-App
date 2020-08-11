const payload = {
    name : 'Ali',
    food: ['abc', 'efg', 'ijk']
}

const Reducer = ( state=payload  , action) => {
    console.log('action' , action)
    if(action.type === 'UpdatedName'){
        return { ...state, name : action.payload }
    }
    return state
}

export default  Reducer

