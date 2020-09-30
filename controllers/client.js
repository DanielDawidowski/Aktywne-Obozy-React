const Client = require('../models/client');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.clientById = (req, res, next, id) => {
    Client.findById(id).populate('event', "_id name").exec((err, client) => {
        if(err || !client) {
            return res.status(400).json({
                error: 'Product not found'
            });
        }
        req.client = client;
        next();
    })
} 

exports.read = (req, res) => {
    // req.product.photo = undefined
    return res.json(req.client)
}

exports.create = (req, res) => {
    const client = new Client(req.body)
    client.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({ data })
    })
}



exports.readProducts = (req, res) => {
    Product.find().populate("category", "_id name").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
}

exports.update = (req, res) => {
    console.log('req.body', req.body);
    console.log('client update param', req.params.clientId);

    const client = req.client;
    client.name = req.body.name;
    client.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.remove = (req, res) => {
    const client = req.client;
    client.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Client deleted'
        });
    });
}


exports.list = (req, res) => {
    Client.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
}; 