import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (Projects.find().count() === 0) {
    var data = [
      {
        name : "iTOVi Dashboard",
        preview_address : "/imgs/projects",
        description : "Rewrote the web dashboard used with the iTOVi scanner and app using Angular 1 and the Phalcon PHP framework.",
        project_address : "#",
        date_added : new Date()
      },
      {
        name : "iTOVi Checkout",
        preview_address : "imgs/projects/checkout.png",
        description : "Redesigned and implemented the checkout screen used by customers to buy their iTOVi scanners using Angular 1 and Phalcon.",
        project_address : "https://secure.itovi.com/order/checkout",
        date_added : new Date(),
      },
      {
        name : "Derelict Rescue",
        preview_address : "/imgs/projects",
        description : "Designed, wrote, and implemented a digital board game based on Betrayl at House on a Hill using the MeteorJS framework.",
        project_address : "#",
        date_added : new Date()
      },
      {
        name : "OPAL",
        preview_address : "/imgs/projects",
        description : "Designed, wrote, and implemented a system for managing customers and events/products. Created using the MeteorJS framework.",
        project_address : "#",
        date_added : new Date()
      }
    ]
    data.forEach(project => Projects.insert(project));
  }

  if (Experiences.find().count() === 0) {
    var data = [
      {
        experinece_name : "iTOVi",
        start_date : new Date("2017-03-06"),
        end_date : new Date(),
        experience_description : "job",
        experience_pic : "/imgs/experiences/itovi_logo.png"
      }
    ]
    data.forEach(experience => Experiences.insert(experience));
  }
});
