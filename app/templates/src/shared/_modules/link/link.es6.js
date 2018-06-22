export let Link = {
  dom: {
    link: '.js-link'
  },
  init () {
    console.log('Link element: ', document.querySelector(this.dom.link))
  }
}
