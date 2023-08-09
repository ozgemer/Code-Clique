import { Spec } from '../../Models/Spec.model.js';
import { ObjectId } from 'bson';
import { newSpec, options } from '../../Models/Spec.model.js';

const getAllSpecs = async (req, res) => {
  try {
    const specs = await Spec.find({}).populate('participants');
    res.status(200).json(specs.reverse());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSpecById = async (req, res) => {
  try {
    const specID = ObjectId(req.params.id);
    const spec = await Spec.findById(specID);
    spec
      ? res.status(200).json(spec)
      : res.status(500).json({ message: 'Spec Not Found!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const addSpec = async (req, res) => {
  try {
    const { user } = req.body;
    await Spec.create({ ...newSpec, participants: user ? [user] : [] });
    const specs = await Spec.find({}).populate('participants');
    res.json(specs.reverse());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteSpec = async (req, res) => {
  try {
    const specID = ObjectId(req.params.id);
    await Spec.findByIdAndDelete(specID);
    const specs = await Spec.find({}).populate('participants');
    res.json(specs.reverse());
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateSpec = async (req, res) => {
  try {
    const specID = ObjectId(req.params.id);
    const { doc } = req.body;
    const { user } = req.body;
    await Spec.findOneAndUpdate(
      { _id: specID },
      { $addToSet: { participants: { _id: user } }, doc: doc }
    );
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getStatusOptions = async (req, res) => {
  res.json(options);
};

const updateSpecStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    const spec = await Spec.findById(id);
    spec.status = status;
    spec.save();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const searchSpecs = async (req, res) => {
  try {
    const { query } = req.body;
    const specs = await Spec.find({
      'doc.blocks': {
        $elemMatch: {
          'data.text': { $regex: `${query}`, $options: 'i' },
        },
      },
    }).populate('participants');
    res.json(specs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export {
  getAllSpecs,
  getSpecById,
  addSpec,
  deleteSpec,
  updateSpec,
  getStatusOptions,
  updateSpecStatus,
  searchSpecs,
};
