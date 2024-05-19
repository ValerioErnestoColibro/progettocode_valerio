/** @format */

"use strict";

class App {
  #user;
  #password;
  constructor() {
    this.user = new User();
    this.passowrd = new Password();
  }
}

class User {
  #username;
  #email;
  #password;
  signUp(username, email, passowrd) {
    this.#username = username;
    this.#email = email;
    this.#password = password;
    this.id = 0;
  }
  login(username, password) {}
}

class CreateUserItem {
  constructor(username, password, email) {}
}

class CreatePasswordItem {}

class Password {}
