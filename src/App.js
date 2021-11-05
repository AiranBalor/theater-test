import React from "react";
import "./App.css";
import PieceInfo from "./components/PieceInfo";
import Search from "./components/Search";
import localData from "./utils/constants";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [filteredCardData, setFilteredData] = React.useState([]);
  const [sortedAuthors, setSortedAuthors] = React.useState();
  const [hasSearch, setHasSearch] = React.useState(false);
  const [hasResult, setHasResult] = React.useState(false);

  React.useEffect(() => {
    handleAuthors();
  }, [filteredCardData]);

  React.useEffect(() => {}, [sortedAuthors]);

  function handleSearchValue(e) {
    setSearchValue((prevState) => e.target.value);
  }

  function handleSearchResult() {
    setHasSearch((prevState) => true);
    const searchResult = localData.result.filter((data) => {
      if (data.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (searchResult.length > 0) {
      setHasResult((prevState) => true);
    } else {
      setHasResult((prevState) => false);
    }
    return setFilteredData((prevState) => searchResult);
  }

  function handleAuthors() {
    if (hasSearch) {
      const searchAuthorsResult = localData.result.filter((data) => {
        if (
          data.author_firstName
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ) {
          return true;
        } else if (
          data.author_lastName.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      if (searchAuthorsResult.length > 0) {
        //Проверка на пустоту входящего массива
        const authors = searchAuthorsResult.map((item) => {
          const author = item.author_lastName + " " + item.author_firstName;
          return author;
        });
        const uniqueAuthors = Array.from(new Set(authors)).sort();

        const authorsArray = [];
        let initialSymbol = uniqueAuthors[0][0];
        let intermediateArray = [];
        uniqueAuthors.map((author) => {
          if (author[0] === initialSymbol) {
            intermediateArray.push(author);
          } else {
            authorsArray.push(intermediateArray);
            initialSymbol = author[0];
            intermediateArray = [];
            intermediateArray.push(author);
          }
        });
        authorsArray.push(intermediateArray);
        setSortedAuthors((prevState) => authorsArray);
      }
    }
  }

  console.log(hasResult);
  return (
    <div className="App">
      <Search
        handleSearchResult={handleSearchResult}
        handleSearchValue={handleSearchValue}
        hasSearch={hasSearch}
        searchValue={searchValue}
        hasResult={hasResult}
      ></Search>
      <PieceInfo
        filteredData={filteredCardData}
        sortedAuthors={sortedAuthors}
      ></PieceInfo>
    </div>
  );
}

export default App;
