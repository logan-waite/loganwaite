Template.projects.onCreated(function() {
    Meteor.subscribe("projects");
})

Template.projects.helpers({
  projectList() {
    console.log(Projects.find().fetch())
    return Projects.find().fetch()
  }
})