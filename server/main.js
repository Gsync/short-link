import { Meteor } from 'meteor/meteor';
import "babel-polyfill";
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup

  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({ email });
    } catch (e) {
      throw new Meteor.Error(400, e.message);
    }
    return true;
  });

  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 100
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });


  // employeeSchema.validate({
  //   name: 'Jack',
  //   hourlyWage: 14,
  //   email: 's1234@test.com'
  // });

});
