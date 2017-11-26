//---------------------------------------------
// <%= atomic ? atomic + ': ' + name.toLowerCase() : name.toLowerCase() %> [script] 
// Created by <%= user %> <%= 
new Date().getDate() + '.' + new Date().getMonth() + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes()
%>
//---------------------------------------------
export let <%= _.classify(name.toLowerCase()) %> = {
  dom: {
    '<%= name.toLowerCase() %>': '.js-<%= name.toLowerCase() %>'
  },
  init () {

  }
}