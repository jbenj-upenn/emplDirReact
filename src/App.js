import React from 'react';
import './App.css';
import EmployeeCard from './components/EmployeeCard';
import Header from './components/Header';
import EmpDetail from './components/EmpDetail';
// import SearchForm from './components/SearchForm';
// import SearchResults from './components/SearchResults';

// class SearchForm extends Component {
//   state = {
//     search: "",
//     results: []
//   };

function App() {
  return (
    <div className="App">
      <Header />
      <EmpDetail />
      <EmployeeCard />
      {/* <Search Results /> */}
      
    </div>
  );
}

export default App;
