/** @format */

"use strict";

class CodePass {
  #username;
  #password;
  #userLogIn = [];
  constructor() {
    this.#username = new Users();
    this.#password = "";
  }
}

class Users {
  #username;
  #email;
  #password;
  signUp(username, email, password) {
    this.#username = username;
    this.#email = email;
    this.#password = passoword;
    this.#userLogIn = [];
  }
}

const Persona = new CodePass();
