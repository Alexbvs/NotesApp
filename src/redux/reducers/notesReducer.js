import {NOTES_REQUEST} from "../actions/notesActions";


let initialState = {
    items: [
        {
            id: 1,
            title: "Title of note #1",
            userEmail: "example1@i.ua",
            category: "Category",
            createdAt: "createdAt: 2020"
        },
        {
            id: 2,
            title: "Title of note #2",
            userEmail: "example2@i.ua",
            category: "Category",
            createdAt: "createdAt: 2020"
        },
        {
            id: 3,
            title: "Title of note #3",
            userEmail: "example3@i.ua",
            category: "Category",
            createdAt: "createdAt: 2020"
        }
    ],
    editItem: {},
    isLoading: false,
    errorMessage: null
};


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
         case NOTES_REQUEST:
             return {
                 ...state,
                 items: action.payload,
                 isLoading: true
             }

        default:
            return state;
    }
};

export default notesReducer;