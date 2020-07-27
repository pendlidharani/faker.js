/**
 *
 * @namespace faker.vehicle
 */
var Collage = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * collage
   *
   * @method faker.collage.collage
   */
  self.collage = function () {
    return fake('{{collage.specifications}} {{collage.model}}');
  };

  self.collage.schema = {
    "description": "Generates a random collage.",
    "sampleResults": ["ou", "jntu", "ku"]
  };

  /**
   * specifications
   *specifications
   * @method faker.collage.
   */
  self.specifications = function () {
    return faker.random.arrayElement(faker.definitions.collage.specifications);
  };

  self.specifications.schema = {
    "description": "Generates a specifications name.",
    "sampleResults": ["gnit", "grit", "snit"]
  };


  /**
   * branch
   *
   * @method faker.vehicle.model
   */
  self.branch = function () {
    return faker.random.arrayElement(faker.definitions.collage.branch);
  };

  self.branch.schema = {
    "description": "Generates a collage model.",
    "sampleResults": ["ECE", "CSE", "EEE"]
  };

  /**
   * subject
   *
   * @method faker.vehicle.type
   */
  self.subject = function () {
    return faker.random.arrayElement(faker.definitions.collage.subject);
  };

  self.subject.schema = {
    "description": "Generates a collage type.",
    "sampleResults": ["maths", "physics", "electronics", "chemistry"]
  };

  /**
   * area
   *
   * @method faker.vehicle.fuel
   */
  self.area = function () {
    return faker.random.arrayElement(faker.definitions.collage.area);
  };

  self.area.schema = {
    "description": "Generates a area type.",
    "sampleResults": ["Hyderabad", "Delhi", "Pune"]
  };


  /**
   * teacher
   *
   * @method faker.collage.teacher
   */
  self.teacher = function () {
    return fake('{{commerce.teacher}}');
  };

  self.teacher.schema = {
    "description": "Generates a teacher",
    "sampleResults": ["shyam", "ram", "shreya"]
  };
};

module["exports"] = Collage;

