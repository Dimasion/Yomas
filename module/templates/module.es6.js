// <%= atomic ? _.capitalize(atomic) + ': ' + name.toLowerCase() : name.toLowerCase() %> [script]

export let <%= _.classify(name.toLowerCase()) %> = {
  dom: {
    <%= _.camelize(name.toLowerCase()) %>: '.js-<%= name.toLowerCase() %>'
  },
  init () {

  }
}

// Created by <%= user %> <%= new Date().toLocaleDateString() %>