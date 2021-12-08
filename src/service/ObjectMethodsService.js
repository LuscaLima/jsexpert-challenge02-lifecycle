class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    return {
      ...rawObject.__proto__,
      valueOf() {
        return this.age;
      },
    };
  }

  getEnhancedObject2(rawObject) {
    return {
      ...rawObject.__proto__,
      toString() {
        return `[name="${this.name}",age=${this.age}]`;
      },
    };
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    return {
      ...rawObject.__proto__,
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${this.name}",age=${this.age}]`,
          number: this.age,
        };

        return types[coercionType];
      },
    };
  }
}

module.exports = ObjectMethodsService;
