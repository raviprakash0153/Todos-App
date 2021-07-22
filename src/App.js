import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header';
import { Todos } from './Mycomponents/Todos';
import { Footer } from './Mycomponents/Footer';
import { AddTodo } from './Mycomponents/AddTodo';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './Mycomponents/About';

function App() {
  const onDelete = (todo) => {
    console.log('I am deleted', todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    let sno1;
    if (todos.length === 0) {
      sno1 = 0;
    } else {
      sno1 = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno1,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState([]);
  //
  // {
  //   sno: 1,
  //   title: 'Go to the market',
  //   desc: 'Well go then',
  // },
  // {
  //   sno: 2,
  //   title: 'Go to the mall',
  //   desc: 'Well go there in mall',
  // },
  // {
  //   sno: 3,
  //   title: 'Go to the Car',
  //   desc: 'Well go there in Car',
  // },
  //
  return (
    <Router>
      <Header title='My Todos list' searchBar={true} />
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            );
          }}
        ></Route>
        <Route excat path='/about'>
          <About />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
