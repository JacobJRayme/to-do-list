const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
let today = new Date();

exports.getDate = function () {
  let options = {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
  return today.toLocaleDateString("en-US", {weekday: 'long'});
};
