const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    state: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft',
    },
    read_count: {
        type: Number,
        default: 0,
    },
    reading_time: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    body: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;