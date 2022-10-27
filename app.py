# ---- YOUR APP STARTS HERE ----
# -- Import section --
from flask import Flask , send_from_directory
from flask import render_template
from flask import request
from flask import url_for
import model
# -- Initialization section --
app = Flask(__name__)

# -- Routes section --
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/mentalhealth')
def mentalhealth():
    return render_template('mental.html')

@app.route('/creditcard')
def creditcard():
  return render_template('creditcard.html')

@app.route('/internships')
def internships():
  return render_template('internships.html')

@app.route('/static/script.js')
def script(path):
  return send_from_directory('static', path)

# if __name__ == "__main__":
#   app.run()
app.run(host='0.0.0.0', port=81, debug=True)