import { LOGIN, LOGIN_TRUE, REGISTER, REGISTER_TRUE } from "../actions/login";

const initialState = {
  login: {
    email: "",
    password: "",
  },
  register: {
    email: "",
    password: "",
  },
  switch: false,
};

function LoginReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        login: { ...state.login, ...action.payload },
      };
    }

    case REGISTER: {
      return {
        ...state,
        register: { ...state.register, ...action.payload },
      };
    }

    case LOGIN_TRUE: {
      return {
        ...state,
        switch: false,
        register: initialState.register,
      };
    }

    case REGISTER_TRUE: {
      return {
        ...state,
        switch: true,
        login: initialState.login,
      };
    }

    default: {
      return state;
    }
  }
}

export default LoginReducers;
