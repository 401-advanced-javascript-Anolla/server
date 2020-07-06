module.exports = (err, req, res, next) => {
  res.status(400);
  res.statusMessage = 'Server Error :(';
  res.json({ err });
  // res.json({ error: err.message });
  // res.status(err.status);
};
