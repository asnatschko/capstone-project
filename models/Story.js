import mongoose from 'mongoose';

const { Schema } = mongoose;
const storySchema = new Schema({
  title: String,
  content: { type: String, required: true },
});

const Story = mongoose.models.Story || mongoose.model('Story', storySchema);

export default Story;
