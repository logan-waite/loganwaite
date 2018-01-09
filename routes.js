Router.configure({
  layoutTemplate: "BaseLayout"
})

Router.route('/', function() {
  this.render("Home")
})