import dbConnect from '../dbConnect';
import Story from '../models/Story';


export async function getAllStories() {
  await dbConnect();

  const stories = await Story.find();

 return stories.map(({_id, title, content})=> {
    return {_id, title, content}
 })
}

export function getStoryById(id) {
  return stories.find((story) => story.id === id);
}
