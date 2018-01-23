import { Meteor } from 'meteor/meteor';
import "babel-polyfill";
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

  const employeeSchema = new SimpleSchema({
    name: {
      type: String,
      min: 1,
      max: 100
    },
    hourlyWage: {
      type: Number,
      min: 0
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  });


  employeeSchema.validate({
    name: 'Jack',
    hourlyWage: 14,
    email: 's1234@test.com'
  });

});
