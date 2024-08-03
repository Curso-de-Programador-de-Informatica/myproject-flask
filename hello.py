from flask import Flask, request, url_for, render_template, send_from_directory
from markupsafe import escape
import os

# App 
app = Flask(__name__, static_folder='static', static_url_path='')

# Definindo a Função para Fazer o Login
def show_info():  # Erro
    return f'Logged as Desconhecido!'

# Definindo a Função para Mostrar o Formulário de Login
def check_info(info):
    if(info == 'antonio'):
        return f'Logged as {info}'
    else:
        return show_info()

# Página Inicial
@app.route('/')
def pag():
    return 'Vá á rota /index.html'

# Rota para servir o arquivo HTML
@app.route('/index.html')
def index():
    return render_template('index.html')

# Página de Projectos
@app.route('/projects/')
def projects():
    return 'The project page.'

# Página de About
@app.route('/about')
def about():
    return 'The about page.'

# Rota de Hello
@app.route('/hello')
def hello():
    return 'Hello, World!'

@app.route('/user/<username>')
def profile(username):
    return f'{username}\'s profile'
'''
# Executando o Contexto de Teste para Gerar URLs
with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
    
'''

# Rota de Exibição de Postagem
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f'Post {post_id}'

# Rota de Exibição de Subcaminho
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    return f'Subpath {escape(subpath)}'

# Rota de Login (GET e POST)
@app.route('/login/<info>', methods=['GET', 'POST'])
def login(info):
    if request.method == 'GET':
        return check_info(info)

# Adicionando uma rota para servir arquivos estáticos (como CSS, JS, imagens)
@app.route('/static/<path:path>')
def serve_static(path):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'static'), path)

if __name__ == "__main__":
    app.run(debug=True)
