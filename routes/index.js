module.exports = (app) => {
  app.use((_req, res) => {
    res.status(404);
    res.send({ message: 'Запрашиваемый ресурс не найден' });
  });

  app.use((err, _req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    return res.send('error', { error: err });
  });
};
