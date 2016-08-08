"use strict";

class NoopStrategy {

  static shuffle(array) {
    return array;
  }
}

module.exports = NoopStrategy;
