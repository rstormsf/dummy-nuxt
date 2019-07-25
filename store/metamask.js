
const stringify = (obj) => {
  return JSON.stringify(obj, function(key, value) {
    if(key[0] === '_') return
    if (typeof value === 'function') {
      return value.toString();
    } else {
      return value;
    }
  })
}

const actions = {
  loadMetamask() {
    window.onload = () => {
      console.log("window", window.ethereum)
      window.alert(`window.ethereum: ${stringify(window.ethereum)}`)
    }
  }
}

export default {
  namespaced: true,
  // state,
  // getters,
  // mutations,
  actions
}
