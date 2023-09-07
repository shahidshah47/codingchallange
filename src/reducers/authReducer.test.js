import authReducer from './authReducer';

describe('authReducer', () => {
  it('should handle LOGIN_SUCCESS', () => {
    const user = { username: 'testuser', fullName: 'Test User' };
    const initialState = {
      isAuthenticated: false,
      user: null,
    };
    const action = {
      type: 'LOGIN_SUCCESS',
      payload: user,
    };
    const expectedState = {
      isAuthenticated: true,
      user: user,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the initial state for LOGOUT action', () => {
    const initialState = {
      isAuthenticated: false,
      user: null,
    };
    const action = {
      type: 'LOGOUT',
    };
    expect(authReducer(initialState, action)).toEqual(initialState);
  });
});