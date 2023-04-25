from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

CARD_DATA = [
  {
        "name": "Polymorphism",
        "skill": "costumes",
        "imgUrl": "/static/img/polymorphism.jpeg",
        "cardId": 1,
    },
    {
        "name": "Short Stack Overflow",
        "skill": "ocean animal trivia",
        "imgUrl": "/static/img/shortstack-overflow.jpeg",
        "cardId": 2,
    },
    {
        "name": "Merge",
        "skill": "bullet journaling",
        "imgUrl": "/static/img/merge.png",
        "cardId": 3,
    }
];

@app.route("/")
def show_homepage():
    """Show the application's homepage."""

    return render_template("homepage2.html")

@app.route("/cards")
def show_cards():
    """Show the trading cards"""

    return render_template("cards2.html")

@app.route("/api/cards")
def get_cards_json():
    """Return a JSON response with all cards."""

    return jsonify({"serverCards": CARD_DATA})



if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")