import axios from 'axios';

export const joinUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/react/login', userData);
      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: "회원가입", payload: response.data
        });

        alert("회원가입이 완료되었습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
