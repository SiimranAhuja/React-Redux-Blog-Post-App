const initialState = [
  {
    id: 0,
    title: "This is the Best React Post",
    category: "React",
    description:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    id: 1,
    title: "This is the Best Redux Post",
    category: "Redux",
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid-2016, the primary maintainers are Mark Erikson and Tim Dorr.",
  },
  {
    id: 2,
    title: "This is the Best Java Post",
    category: "Java",
    description:
      " Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere",
  },
];

const blogReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_BLOG":
            state = [...state, action.payload];
            return state;
        case "UPDATE_BLOG":
            const updateState = state.map(blogs => blogs.id === action.payload.id ? action.payload: blogs)
            state = updateState;
            return state;
        case "DELETE_BLOG":
            const filterBlogs = state.filter(blogs => blogs.id !== action.payload && blogs);
            state = filterBlogs;
            return state;
        default:
            return state;
    }
};

export default blogReducer;