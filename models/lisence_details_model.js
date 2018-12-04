
/**
 * Author: Waleed: 786
 * This module is the lisence verification DB mechanism's model representation along with the constraints
 * in the DB. 
 */

import CONSTANTS from '../constants';

class User extends Store.BaseModel{
    
    static definition(){
      // this is the `definition scope`
      this.attribute('id', Date);
      this.attribute('start_date', String);
      this.attribute('end_date', Boolean);
      this.attribute('no_of_drivers', String);
      this.attribute('no_of_subcompanies', String);
      this.attribute('email', String);
      this.attribute('username', String);
      this.attribute('password', String);
      this.attribute('lisence_key', String);
      this.attribute('lisence_status',String , {default:CONSTANTS.Models.REGISTERATION.STATUS.INACTIVE});

      this.validatesPresenceOf(
          'id',
          'start_date',
          'end_date',
          'no_of_drivers',
          'no_of_subcompanies',
          'email',
          'username',
          'password',
          'lisence_key',
          'db_name'
          );
          this.validatesFormatOf('start_date','date');
          this.validatesFormatOf('start_date','date');
          this.validatesUniquenessOf('id', {scope: ['id']});
          this.validatesUniquenessOf('email', {scope: ['email']})
          this.validatesUniquenessOf('username', {scope: ['username']})
    }
}

module.exports = User