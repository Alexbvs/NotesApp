import {
    GET_NOTES_REQUEST,
    GET_NOTES_SUCCESS,
    GET_NOTES_FAILED,

    ADD_NOTES_REQUEST,
    ADD_NOTES_SUCCESS,
    ADD_NOTES_FAILED,

    UPDATE_NOTES_REQUEST,
    UPDATE_NOTES_SUCCESS,
    UPDATE_NOTES_FAILED, REMOVE_NOTES_REQUEST, REMOVE_NOTES_SUCCESS, REMOVE_NOTES_FAILED
} from "../actions/notesActions";


let initialState = {
    items: [],
        // [
        // {
        //     id: 1,
        //     title: "Title of note #1",
        //     userEmail: "example1@i.ua",
        //     category: "Category",
        //     createdAt: "createdAt: 2020"
        // },
        // {
        //     id: 2,
        //     title: "Title of note #2",
        //     userEmail: "example2@i.ua",
        //     category: "Category",
        //     createdAt: "createdAt: 2020"
        // },
        // {
        //     id: 3,
        //     title: "Title of note #3",
        //     userEmail: "example3@i.ua",
        //     category: "Category",
        //     createdAt: "createdAt: 2020"
        // }
    // ],
    editItem: {},
    isLoading: false,
    errorMessage: null
};


const notesReducer = (state = initialState, action) => {
    console.log(state.items)
    switch (action.type) {
        case GET_NOTES_REQUEST:
            return {
                ...state,
                items: action.payload,
                isLoading: true
            }
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
            }
        case GET_NOTES_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false
            }

        case ADD_NOTES_REQUEST:
            return {
                ...state,
                isLoading: true,
                items: action.payload
            }
        case ADD_NOTES_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case ADD_NOTES_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false
            }

        case UPDATE_NOTES_REQUEST:
            return {
                ...state,
                isLoading: true,
                items: action.payload
            }
        case UPDATE_NOTES_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case UPDATE_NOTES_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }


        case REMOVE_NOTES_REQUEST:
            const newItems = [
                ...state.items
            ];
            const newItemsArray = newItems.filter(item => item.id !== action.payload)
            return {
                ...state,
                isLoading: true,
                items: newItemsArray
            }
        case REMOVE_NOTES_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case REMOVE_NOTES_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }

        default:
            return state;
    }
};

export default notesReducer;