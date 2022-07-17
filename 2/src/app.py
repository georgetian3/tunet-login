from flask import Flask, request, render_template, redirect

app = Flask(__name__)

connected = False
credentials = {}

@app.route('/login')
@app.route('/', methods=['GET', 'POST'])
def index():
    global connected
    if connected:
        return redirect('/success')
    if request.method == 'GET':
        return render_template('login.html')
    else:
        global credentials
        credentials = request.get_json()
        if credentials['username'] != 'tianzq20':
            return 'username_does_not_exist'
        if credentials['password'] != 'password':
            return 'wrong_password'
        connected = True
        return 'success'
        
start = False
usage = 0
increment = 7.24

@app.route('/success', methods=['GET', 'POST'])
def success():
    global connected, credentials, start, usage, increment
    if not connected:
        return redirect('/')
    if request.method == 'GET':
        return render_template(
            'success.html',
            username=credentials['username'],
            usage=f'{usage:.2f}',
        )
    else:
        usage += increment
        connected = False
        return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)