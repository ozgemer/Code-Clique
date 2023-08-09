import { v4 as uuidv4 } from "uuid";

const board = [
  {
    id: uuidv4(),
    title: "TODO",
    color: "#36B176",
    tasks: [
      {
        id: uuidv4(),
        title: "A",
      },
      {
        id: uuidv4(),
        title: "D",
      },
      {
        id: uuidv4(),
        title: "F",
      },
      {
        id: uuidv4(),
        title: "H",
      },
      {
        id: uuidv4(),
        title: "C",
      },
      {
        id: uuidv4(),
        title: "E",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "IN PROGRESS",
    color: "#3685B1",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn CSS",
      },
      {
        id: uuidv4(),
        title: "Learn Golang",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "REVIEW",
    color: "#EE786C",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "CLOSED",
    color: "#F6C927",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
    ],
  },
];

export default board;
