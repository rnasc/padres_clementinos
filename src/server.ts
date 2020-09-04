import express from 'express';
import * as path from 'path';

const app = express();

const root_path = path.join(__dirname, 'public')

app.use(express.static(root_path));

app.listen(3333); 