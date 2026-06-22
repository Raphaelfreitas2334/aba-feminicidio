from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route("/index")
def index():
    return render_template("index.html")

@app.route('/feminicidio')
def feminicidio():
    return render_template('feminicidio.html')

@app.route('/furtos')
def furtos():
    return render_template('furtos.html')

@app.route('/latrocinio')
def latrocinio():
    return render_template('latrocinio.html')

@app.route('/trafico')
def trafico():
    return render_template('trafico.html')

@app.route('/assalto')
def assalto():
    return render_template('assalto.html')


if __name__ == "__main__":
    app.run(debug=True)