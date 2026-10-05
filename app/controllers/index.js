module.exports.home = function (application, req, res) {
  var validacao = "";
  res.render("index", {validacao: {}, title: "Express" });
};
