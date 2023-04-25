const jsxCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3
  },
  {
    name: "Off-By-One",
    skill: "climbing mountains",
    imgUrl: "/static/img/off-by-one.jpeg",
    cardId: 4
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 5
  }
];

function TradingCard(props) {
  return (
    <div className="trading-card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill}</p>
    </div>
  );
}

function AllCards() {
  const allCards = [];
  const [cards, setCards] = React.useState([]);

  console.log(Date.now(), "line 48, cards is: ", cards);

  React.useEffect(() => {
    fetch("/api/cards")
      .then((response) => response.json())
      .then((data) => {
        console.log(Date.now(), "line 54, cards is: ", cards);
        setCards(data.serverCards);
        console.log(Date.now(), "line 56, cards is: ", cards);
      });
  }, []);

  for (const card of cards) {
    console.log(Date.now(), "line 61, cards is: ", cards);
    allCards.push(
      <TradingCard
        key={card.cardId}
        name={card.name}
        skill={card.skill}
        imgUrl={card.imgUrl}
      />
    );
  }

  return <React.Fragment>{allCards}</React.Fragment>;
}

{
  /* The function below the data stored in this JSX file, but is replaced by the function above that uses the data stored on the server

function AllCards() {
  const allCards = [];

  for (const card of jsxCardData) {
    allCards.push(
      <TradingCard
        key={card.cardId}
        name={card.name}
        skill={card.skill}
        imgUrl={card.imgUrl}
      />
    );
    console.log(allCards);
  }

  return <React.Fragment>{allCards}</React.Fragment>;
} */
}

ReactDOM.render(
  <AllCards />,
  document.querySelector("#trading-cards-container")
);
