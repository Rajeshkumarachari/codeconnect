const adminAuth = (req, res, next) => {
  const token = "abc";
  const isAuthorized = token === "abc";
  !isAuthorized ? res.status(401).send(" Unauthorized request") : next();
};
module.exports = {
  adminAuth,
};
