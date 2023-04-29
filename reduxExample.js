console.clear()

// forms  > actions 
const createPolicy = (name, amount) => {
    return ({
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    })
}

const deletePolicy = (name) => {
    return ({
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    })
}

const createClaim = (name, amountOfMoney) => {
    return ({
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoney
        }
    })
}


// departmants >  Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims;
}

const accounting = (bagOfMoney = 0, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoney;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
}

const policy = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => action.payload.name != name);
    }
    return listOfPolicies;
}


const { createStore, combineReducers } = Redux;

// combined Reducers 
const ourDepartments = combineReducers({
    claimsHistory,
    accounting,
    policy
})

// State  > combined departments
const store = createStore(ourDepartments);

store.dispatch(createPolicy('ahmed', 100));
store.dispatch(createPolicy('syed', 200));
store.dispatch(createPolicy('aslam', 300));

store.dispatch(createClaim('aslam', 100));
store.dispatch(deletePolicy('aslam'));


console.log(store.getState());