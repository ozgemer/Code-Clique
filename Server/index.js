import express from 'express';
import 'dotenv/config';
import usersRoute from './Routes/membersRoute.js';
import rolesRoute from './Routes/rolesRoute.js';
import tasksRoutes from './Routes/tasksRoute.js';
import settingsRoute from './Routes/settingsRoute.js';
import appointmentsRoute from './Routes/appointmentsRoute.js';
import specRoute from './Routes/specRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoConnect from './Config/mongoConnect.js';
import authRoute from './Routes/authRoute.js';

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
mongoConnect();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Code-Clique!');
});

app.use('/settings', settingsRoute);
app.use('/appointments', appointmentsRoute);
app.use('/board', tasksRoutes);
app.use('/roles', rolesRoute);
app.use('/members', usersRoute);
app.use('/specs', specRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.info(`App listening on Port: ${port}`);
});
