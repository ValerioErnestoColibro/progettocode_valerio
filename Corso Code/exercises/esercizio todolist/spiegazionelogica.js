// BUSINESS LOGIC
class App {
  // PROPERTIES
  #username = "";
  #counters = [];
  // METHODS
  login(username) {
    if (!!this.#username) console.log("Already logged in");
    else this.#username = username;
  }

  logout() {
    if (!!this.#username) this.#username = "";
    else console.log("User is not logged in");
  }

  increment() {
    if (!this.#username) console.log("User is not logged in");
    else {
      const found = this.#counters.find((counter) => {
        if (counter.username === this.#username) return true;
        return false;
      });
      if (!found)
        this.#counters = [
          ...this.#counters,
          {
            username: this.#username,
            click: 1,
          },
        ];
      else {
        this.#counters = this.#counters.map((counter) => {
          if (counter.username === this.#username)
            return { ...counter, click: counter.click + 1 };
          else return { ...counter };
        });
      }
    }
  }
}

const app = new App();
