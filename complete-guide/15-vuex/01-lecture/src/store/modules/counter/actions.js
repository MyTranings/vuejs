export default {
  increment(context) {
    console.log(context);
    setTimeout(() => {
      context.commit('increment')
    }, 2000)
  },
  increase(context, playload) {
    console.log(context);
    setTimeout(() => {
      context.commit('increase', playload)
    }, 2000)
  },
}