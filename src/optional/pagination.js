"use strict";

function createPaginator(pages = []) {
  let index = 0;

  return {
    next() {
      if (index < pages.length - 1) index++;
      return pages[index];
    },
    previous() {
      if (index > 0) index--;
      return pages[index];
    },
    current() {
      return pages[index];
    }
  };
}

module.exports = { createPaginator };
