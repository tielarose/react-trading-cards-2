from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route("/")
def show_homepage():
    """Show the application's homepage"""

    return render_template("homepage2.html")

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")