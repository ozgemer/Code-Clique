import { Tag } from '../../Models/Board.Models/Tag.model.js';

const getAllTags = async (req, res) => {
    try {
      let tags = await Tag.find({});
      return res.status(200).json(tags);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server Error!' });
    }
  };
  
  export { getAllTags };
  