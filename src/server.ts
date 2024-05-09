import express, { Request, Response } from 'express';
import * as exphbs from 'express-handlebars';
import path from 'path';

const app = express();

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

// Caminho das views.
app.set('views', path.join(__dirname, './', 'views'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

// Rotas
app.get('/', (request: Request, response: Response) => {
  response.render('index');
});

app.listen(3333, () => {
  console.clear()
  console.log('Backend Start!');
});
