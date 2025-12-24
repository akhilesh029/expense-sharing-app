class Group {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.members = [];
    }
  
    addMember(user) {
      this.members.push(user);
    }
  }
  
  module.exports = Group;
  