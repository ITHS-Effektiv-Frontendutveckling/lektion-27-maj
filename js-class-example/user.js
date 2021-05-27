//ES6 Classes
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  getUser() {
    const userObj = {
      username: this.username,
      password: this.password,
      email: this.email
    }

    return userObj;
  }

  getUsername() {
    return this.username;
  }

  setNewPassword(newPassword) {
    this.password = newPassword;
  }
}

class Admin extends User {
  constructor(username, password, email, role) {
    super(username, password, email);
    this.role = role;
  }
}

export { User, Admin };