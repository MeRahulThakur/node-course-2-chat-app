const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{
  var users;
    beforeEach(()=>{
      users = new Users();
      users.users = [{
        id:'1',
        name:'Rahul Thakur',
        room:'Node course'
      },{
        id:'2',
        name:'Julie',
        room:'React course'
      },{
        id:'3',
        name:'Amit',
        room:'Node course'
      }];
    });

    it('should add new user',()=>{
        var users = new Users();
        var user = {
          id:'123',
          name:'Rahul',
          room:'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove user',()=>{
        var userID = '1';
        var user = users.removeUser(userID);
        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user',()=>{
      var userID = '99';
      var user = users.removeUser(userID);
      expect(user).toNotExist();
      expect(users.users.length).toBe(3);
    });

    it('should find user',()=>{
        var userId = '1';
        var user = users.getUser(userId);
        expect(user.id).toEqual(userId);
    });

    it('should not find user',()=>{
      var user = users.getUser(5);
      expect(user).toNotExist();
    });

    it('should return names for node course',()=>{
        var userList = users.getUserList('Node course');
        expect(userList).toEqual(['Rahul Thakur','Amit']);
    });

    it('should return names for react course',()=>{
        var userList = users.getUserList('React course');
        expect(userList).toEqual(['Julie']);
    });
});
