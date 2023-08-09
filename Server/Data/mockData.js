const Roles = [
  {
    name: "Private",
    id: 1,
    color: "#ada07d"
  },
  {
    name: "10x Developer",
    id: 2,
    color: "#ad3d3d"
  },
  {
    name: "QA",
    id: 3,
    color: "#3d95ad"
  },
  {
    name: "Senior",
    id: 4,
    color: "#d97a21"
  },
  {
    name: "JS Dev",
    id: 5,
    color: "#d9c721"
  }
];

const mockData = [
  {
    name: "Sorer",
    id: 1,
    email: "alonfiller@gmail.com",
    image: "https://avatars.githubusercontent.com/sorerbot",
    status: true,
    roles: [
      Roles[0],
    ],
    tasks: [
      {
        id: 1,
        completed: true
      },
      {
        id: 2,
        completed: false
      }
    ]
  },
  {
    name: "InHumanly",
    id: 2,
    email: "InHumanly@gmail.com",
    image: null,
    status: false,
    roles: [
      Roles[1]
    ],
    tasks: [
      {
        id: 1,
        completed: true
      },
      {
        id: 2,
        completed: false
      },
      {
        id: 3,
        completed: true
      },
      {
        id: 3,
        completed: true
      }
    ]
  },
  {
    name: "Vaalius",
    id: 3,
    email: "Vaalius@gmail.com",
    image: "https://pps.whatsapp.net/v/t61.24694-24/145824562_322777833237137_4275764689821117791_n.jpg?ccb=11-4&oh=09d2f674c641f63ae91c1060f51c1a10&oe=62D3FE9D",
    status: true,
    roles: [
      Roles[2]
    ],
    tasks: [
      {
        id: 1,
        completed: true
      }
    ]
  },
  {
    name: "F8_DarQ",
    id: 4,
    email: "F8_DarQ@gmail.com",
    image: "https://pps.whatsapp.net/v/t61.24694-24/145824562_322777833237137_4275764689821117791_n.jpg?ccb=11-4&oh=09d2f674c641f63ae91c1060f51c1a10&oe=62D3FE9Dhttps://pps.whatsapp.net/v/t61.24694-24/253665567_1128257228008063_2725218632439840063_n.jpg?ccb=11-4&oh=01_AVzRwI0n6rHjFeYAxxVHSW00uUrmHA6_CeGekGIT-0cm_g&oe=62D30384",
    status: true,
    roles: [
      Roles[3]
    ],
    tasks: [
      {
        id: 1,
        completed: true
      }
    ]
  }

];

export default mockData;
export { Roles };
