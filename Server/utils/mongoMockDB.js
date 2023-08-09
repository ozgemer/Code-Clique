import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo = undefined;

const connect = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  const mongooseOpts = {
    useNewUrlParser: true,
  };
  await mongoose.connect(uri, mongooseOpts);
};

const close = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

const clear = async () => {
  if (mongo) {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  }
};

export { connect, close, clear };
