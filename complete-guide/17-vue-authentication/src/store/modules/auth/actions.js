export default {
  login() { },
  async signup(context, payload) {
    console.log(payload)
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBx-muI5MANa_kQOvjJhSp6l0AiXVOG7Zs', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to authenticate')
      throw error;
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  }
}