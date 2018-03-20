//---------------------------------------------
// <%= atomic ? atomic + ': ' + name.toLowerCase() : name.toLowerCase() %> [script] 
// Created by <%= user %> <%= moment().format('LLLL) %>
//---------------------------------------------
export let <%= _.classify(name.toLowerCase()) %> = {
  dom: {
    <%= _.camelize(name.toLowerCase()) %>: '.js-<%= name.toLowerCase() %>'
  },
  init () {

  }
}