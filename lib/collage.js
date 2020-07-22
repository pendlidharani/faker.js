/**
 *
 * @namespace faker.vehicle
 */
var Collage = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */
  self.colllage = function () {
    return fake('{{collage.specifications}} {{collage.model}}');
  };

  self.collage.schema = {
    "description": "Generates a random collage.",
    "sampleResults": ["ou", "jntu", "ku"]
  };

  /**
   * manufacturer
   *
   * @method faker.vehicle.manufacturer
   */
  self.specifications = function () {
    return faker.random.arrayElement(faker.definitions.collage.specifications);
  };

  self.specifications.schema = {
    "description": "Generates a specifications name.",
    "sampleResults": ["gnit", "grit", "snit"]
  };


  /**
   * model
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
   * type
   *
   * @method faker.vehicle.type
   */
  self.subject = function () {
    return faker.random.arrayElement(faker.definitions.collage.subject);
  };

  self.subject.schema = {
    "description": "Generates a collage type.",
    "sampleResults": ["maths", "physics", "Social", "chemistry"]
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
   * 
   *
   * @method faker.vehicle.vin
   */
  self.vin = function () {
    return (
      faker.random.alphaNumeric(10) +
      faker.random.alpha({ count: 1, upcase: true }) +
      faker.random.alphaNumeric(1) +
      faker.random.number({ min: 10000, max: 100000}) // return five digit #
    ).toUpperCase();
  };

  self.vin.schema = {
    "description": "Generates a valid VIN number.",
    "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
  };

  /**
   * color
   *
   * @method faker.vehicle.color
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

