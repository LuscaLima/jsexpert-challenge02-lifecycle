class ReferencesService {
  getCounterCopyingReferences(object) {
    return object;
  }

  getCounterWithoutCopyingReferences(object) {
    return Object.create(object);
  }

  getCounterWithoutDeepCopyingReferences(object) {
    return JSON.parse(JSON.stringify(object));
  }
}

module.exports = ReferencesService;
