import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: '',
        },
        techStack: [{
            type: String,
            required: true,
        }],
        liveUrl: {
            type: String,
            default: '',
        },
        githubUrl: {
            type: String,
            default: '',
        },
        featured: {
            type: Boolean,
            default: false,
        },
        highlights: [{
            type: String,
        }],
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
