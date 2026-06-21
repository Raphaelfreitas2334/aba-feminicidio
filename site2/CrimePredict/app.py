from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/feminicidio')
def feminicidio():
    return render_template('feminicidio.html')

@app.route('/furtos')
def furtos():
    return render_template('furtos.html')

if __name__ == "__main__":
    app.run(debug=True)