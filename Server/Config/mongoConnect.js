import mongoose from 'mongoose';

export default function mongoConnect() {
  const URI = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.fzdkr.mongodb.net/${process.env.ATLAS_DB}?retryWrites=true&w=majority`;

  mongoose.connect(URI);
  mongoose.connection
    .once('open', () => {
      console.info('Mongoose has connected!');
    })
    .on('error', (error) => console.error(error));
}
