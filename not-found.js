'use strict';
module.exports = (req, res) => {
  res.status(404);
  res.statusMessage = 'the path is not found';
  res.json({ error: 'NOT FOUND' });
};
