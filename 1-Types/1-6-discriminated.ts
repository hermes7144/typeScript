{
  type SuccessState = {
    result: 'success';

    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    let result;
    if (result === 'success') {
      return { result: 'success', response: { body: 'login' } };
    } else {
      return { result: 'fail', reason: 'fail' };
    }
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
