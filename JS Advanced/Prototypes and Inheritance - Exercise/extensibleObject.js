function extensibleObject() {
  return {
    __proto__: {},
    extend: function (template) {
      for (let key in template) {
        if (typeof template[key] === "function") {
          this.__proto__[key] = template[key];
        } else {
          this[key] = template[key];
        }
      }
    },
  };
}
