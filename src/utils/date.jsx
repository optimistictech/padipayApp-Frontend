export const formatDate = (date) => {
  var dateobj = new Date(date);
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  var result =
    dateobj.getFullYear() +
    "-" +
    pad(dateobj.getMonth() + 1) +
    "-" +
    pad(dateobj.getDate());

  return result;
};
