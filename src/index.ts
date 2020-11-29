import App from './App.svelte'

var app = new App({
  target: document.body,
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept()
  // @ts-ignore
  import.meta.hot.dispose(() => {
    app.$destroy()
  })
}
