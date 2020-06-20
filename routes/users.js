const { getReadStream } = require('../helpers');

module.exports = (app) => {
  app.route('/users')
    .get((_req, res, next) => {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      getReadStream({ file: 'users.json', next }).pipe(res);
    });

  app.route('/users/:id')
    .get(({ params: { id } }, res, next) => {
      const readStream = getReadStream({ file: 'users.json', next });

      let text = '';
      readStream.on('data', (chunk) => {
        text += chunk;
      });

      readStream.on('end', () => {
        try {
          const users = JSON.parse(text);
          const user = users.find(({ _id }) => _id === id);
          if (!user) {
            res.status(404);
            return res.send({ message: 'Нет пользователя с таким id' });
          }
          return res.json(user);
        } catch (er) {
          return next(er.message);
        }
      });
    });
};
