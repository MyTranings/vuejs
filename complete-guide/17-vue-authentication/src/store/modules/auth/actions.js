export default {
  async login(context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBx-muI5MANa_kQOvjJhSp6l0AiXVOG7Zs', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json();

    console.log(response)
    console.log(responseData)

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(response.message || 'Failed to authenticate')
      throw error;
    }

    console.log(responseData)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  },
  async signup(context, payload) {
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
      console.log(responseData)
      const error = new Error(responseData.message || 'Failed to authenticate')
      throw error;
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  }
}