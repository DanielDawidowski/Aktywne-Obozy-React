const Event = require('../models/event');

const { errorHandler } = require("../helpers/dbErrorHandler")

exports.eventById = (req, res, next, id) => {
    Event.findById(id).exec((err, event) => {
        if(err || !event) {
            return res.status(400).json({
                error: 'Category doen not exist'
            })
        }
        req.event = event;
        next();
    })
}

exports.create = (req, res) => {
    const event = new Event(req.body)
    event.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({ data })
    })
}

exports.read = (req, res) => {
    return res.json(req.event)
}

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('event update param', req.params.eventId);

    const event = req.event;
    event.name = req.body.name;
    event.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const event = req.event;
    event.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Event deleted'
        });
    });
}    


exports.list = (req, res) => {
    Event.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
}; 
