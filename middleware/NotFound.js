const notFound = (req, res) => {
  res.status(404).send(`
      <div>
        <h1>404: Route does not exist</h1> <a href="/">Back to Home</a>
      </div>
    `);
};

module.exports = notFound;
