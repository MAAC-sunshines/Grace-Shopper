const SEARCH_INPUT = 'SEARCH_INPUT';
export function search(input) {
    const action = { type: SEARCH_INPUT, searchInput: input };
    return action;
}
export default function reducer(state = {}, action) {
    switch (action.type) {
    case SEARCH_INPUT:
        return action.searchInput;
    default:
        return state;
    }
}