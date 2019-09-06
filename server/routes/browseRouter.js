const express = require('express');
const cachedItems = require('../data/data.json');

const browseRouter = express.Router();

const getItemsData = function(payload) {
  const start = Number.parseInt(payload.start) || 0;
  const limit = Number.parseInt(payload.limit) || 9;
  const items = cachedItems.slice(start, start + limit);

  return {
    items: items,
    totalItems: cachedItems.length
  };
};

browseRouter.get('', (req, res) => {
  const response = getItemsData(req.query);
  res.status(200).json(response);
});

module.exports = browseRouter;
