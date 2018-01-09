import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (Projects.find().count() === 0) {
    var data = [
      {
        name : "Derelict Rescue",
        preview_address : "/imgs",
        description : "Designed, wrote, and implemented a digital board game based on Betrayal at House on a Hill using the MeteorJS framework",
        project_address : "#",
        date_added : new Date()
      },
      {
        name : "OPAL",
        preview_address : "/imgs",
        description : "Designed, wrote, and implemented a system for managing customers and events/products. Created using the MeteorJS framework",
        project_address : "#",
        date_added : new Date()
      },
      {
        name : "iTOVi Dashboard",
        preview_address : "/imgs",
        description : "Rewrote the web dashboard used with the iTOVi scanner and app using Angular 1 and the Phalcon PHP framework.",
        project_address : "#",
        date_added : new Date()
      }
    ]
    data.forEach(project => Projects.insert(project));
  }
});
