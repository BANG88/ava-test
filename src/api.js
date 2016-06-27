export default {
  post: () => {
    // TODO post action
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          item: 1
        })
      }, 3000)
    })
  }
}
