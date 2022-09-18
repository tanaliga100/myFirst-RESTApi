const notFound = (req, res) => {
  res.status(404).send(`
      
        <h1>404: Route does not exist</h1> <a href="/">Back to Home</a>
      
    `);
};

module.exports = notFound;
