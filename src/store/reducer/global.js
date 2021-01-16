import { setTokenKey } from "../Type";

//全局参数
const config = {
  token: "",
  status: [
    {
      label: "禁用",
      value: false,
    },
    {
      label: "启用",
      value: true,
    },
  ],
};

//Reducer
const GlobalReducer = function (state = config, action) {
  switch (action.type) {
    case setTokenKey: {
      return {
        ...state,
        payload: action.payload,
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
