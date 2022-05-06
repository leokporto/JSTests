const express = require('express');

const sessionsRouter = express.Router();

sessionsRouter.route('/').get((req, res) => {
    res.send("Sessions");
});

sessionsRouter.route('/:id').get((req, res) => {
    res.send(`Session ${req.params.id}`);
});

module.exports = sessionsRouter;