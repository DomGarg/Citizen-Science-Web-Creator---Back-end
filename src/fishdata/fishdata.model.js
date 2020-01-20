const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, required: false },
    data: { type: Schema.Types.Mixed, required: false }
}
);

module.exports = mongoose.model('Fishdata', schema, 'researchdata');
