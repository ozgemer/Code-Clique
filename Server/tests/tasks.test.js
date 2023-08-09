import { close, connect, clear } from "../utils/mongoMockDB";
import index from "../index";
import supertest from "supertest";
import { Task } from "../models/Board.Models/Task.model.js";
import tasksData from "../data/tasksData.js";
import "dotenv/config";

const request = supertest(index);
var _id= null;
beforeAll(async () => {
  await connect();
  await Task.insertMany(tasksData);
});

afterAll(async ()=> await close());

describe('/board', () => { 
    it('GET /board - get all tasks', async () => {
        const res = await request
        .get('/board')
        .send({})
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(tasksData.length);
        _id= res.body[0]._id
    })
 })

