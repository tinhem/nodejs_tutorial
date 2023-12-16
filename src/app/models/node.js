const mongoose = require('mongoose')
// const slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;
// // Add plugins
// mongoose.plugin(slug);
const course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, required: true },
        level: { type: String },
        image: { type: String },
    },
    {
        timestamps: true,
    },
)




module.exports = mongoose.model('course', course);

