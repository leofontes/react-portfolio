import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/Home/HomeScreen'
import QuizScreen from "./screens/Quiz/QuizScreen"
import ResultScreen from "./screens/Result/ResultScreen"

const App: React.FC = () => {
  return (
    <Router>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/question' component={QuizScreen} />
      <Route path='/result' component={ResultScreen} />
    </Router>
  )
}

export default App;
