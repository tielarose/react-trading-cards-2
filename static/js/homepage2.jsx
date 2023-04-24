function Homepage() {
  return (
    <p>
      Click <a href="/cards">here</a> to view the trading cards!
    </p>
  );
}

ReactDOM.render(<Homepage />, document.querySelector("#app"));
