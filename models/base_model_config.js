const Store = require('openrecord/store/postgres')

const store = new Store({
  host: 'localhost',
  user: 'my-user',
  password: 'superSecret!',
  database: 'posts'
})

class User extends Store.BaseModel{
    static definition(){
      // this is the `definition scope`
      this.validatesPresenceOf('first_name', 'last_name')
    }
  
    fullName(){
      return this.first_name + ' ' + this.last_name
    }
  }
  
  store.Model(User)
  
  store.ready(async () => {
    const user = await User.find(1)
    console.log(user.fullName())
  })