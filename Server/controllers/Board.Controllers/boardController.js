import { Board } from '../../Models/Board.Models/Board.Model.js';

const getAllBoards = async (req, res) => {
  try {
    let boards = await Board.find({});
    return res.status(200).json(boards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const setBoardById = async (req, res) => {
    try {
      let result = await Board.updateOne({ _id: req.body._id }, req.body);
      if (!result)
        return res.status(400).json({ error: 'there is no such board!' });
      console.info('The user: ' + req.rawHeaders[19] + ' is updated a board!');
      return res
        .status(200)
        .json({ info: 'board updated successfuly!', task: req.body });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Server Error!' });
    }
  };

export { getAllBoards , setBoardById };
