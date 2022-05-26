import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxstore/store";
import Header from "./components/common/header";
import AllExpenses from "./components/all-expenses";
import AddExpense from "./components/add-expense";
import ExpenseAnalysis from "./components/expense-analysis";
import DueExpenses from "./components/due-expenses";
import Footer from "./components/common/footer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <AllExpenses />
            </Route>
            <Route exact path="/add-expense">
              <AddExpense />
            </Route>
            <Route exact path="/expenses-analysis">
              <ExpenseAnalysis />
            </Route>
            <Route exact path="/due-expenses">
              <DueExpenses />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
