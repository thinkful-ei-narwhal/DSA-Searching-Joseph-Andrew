import React from 'react';

class App extends React.Component {
  state = {
    count: null,
    array: ["89", "30", "25", "32", "72", "70", "51", "42", "25", "24", "53", "55", "78", "50", "13", "40", "48", "32", "26", "2", "14", "33", "45", "72", "56", "44", "21", "88", "27", "68", "15", "62", "93", "98", "73", "28", "16", "46", "87", "28", "65", "38", "67", "16", "85", "63", "23", "69", "64", "91", "9", "70", "81", "27", "97", "82", "6", "88", "3", "7", "46", "13", "11", "64", "76", "31", "26", "38", "28", "13", "17", "69", "90", "1", "6", "7", "64", "43", "9", "73", "80", "98", "46", "27", "22", "87", "49", "83", "6", "39", "42", "51", "54", "84", "34", "53", "78", "40", "14", "5"],
    error: null
  }


  handleLinearSearch(array, value) {
    let count = 0
    for(let i = 0; i < array.length; i++) {
      if (Number(array[i]) === Number(value)) {
        count++
        break;
      } 
      count++
    }
    this.setState({ count })
  }

  handleBinarySearch(array, value, start=0, end=array.length, count=0) {
    array = array.sort();

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    count++;

    if (start > end) {
      return this.setState({ error: `That value doesn't exist. It took ${count} tries to figure that out.` })
    }
    console.log(`item is ${item} |`, `value is ${value} |`, `index is ${index}`)
    if (item == value) {
      return this.setState({ count, error: null });
    }
    else if (item < value) {
        return this.handleBinarySearch(array, value, index + 1, end, count);
    }
    else if (item > value) {
        return this.handleBinarySearch(array, value, start, index - 1, count);
    }
  }

  render() {
    const { array, count, error } = this.state;
    return (
      <div className="App">
        <h1>Search</h1>
        <form onSubmit={(ev) => {
          ev.preventDefault();
          this.handleBinarySearch(array, ev.target.search.value)
        }}>
          <input type="text" id="search" name="search" />
          <button type="submit">Search</button>
        </form>
        {(count && !error) && <p>It took {count} tries to find that value</p>}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default App;
