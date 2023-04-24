from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def show_homepage():
    """Show the application's homepage"""

    return render_template("homepage2.html")

@app.route("/cards")
def show_cards():
    """Show the trading cards"""

    return ('this is the cards page')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")