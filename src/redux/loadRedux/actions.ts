import {
    LOAD_ACTIVE,
    LOAD_COMPLETE,
    LoadActionTypes
} from '../types'


export function loadActive(): LoadActionTypes {
    return {
        type: LOAD_ACTIVE
    }
}

export function loadComplete(): LoadActionTypes {
    return {
        type: LOAD_COMPLETE
    }
}
