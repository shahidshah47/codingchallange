import { loginSuccess } from './authActions';

describe('loginSuccess action', () => {
  it('should create an action to log in successfully', () => {
    const user = { username: 'testuser', fullName: 'Test User' };
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      payload: user,
    };
    expect(loginSuccess(user)).toEqual(expectedAction);
  });
});