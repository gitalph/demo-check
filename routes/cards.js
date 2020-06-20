const { getReadStream } = require('../helpers');

module.exports = (app) => {
  app.route('/cards')
    .get((_req, res, next) => {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      getReadStream({ file: 'cards.json', next }).pipe(res);
    });
};
