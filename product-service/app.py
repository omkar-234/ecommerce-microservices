from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)
CORS(app)

def get_db():
    return mysql.connector.connect(
        host=os.environ.get('DB_HOST', 'db'),
        user=os.environ.get('DB_USER', 'root'),
        password=os.environ.get('DB_PASSWORD', 'password'),
        database=os.environ.get('DB_NAME', 'ecommerce')
    )

@app.route('/products', methods=['GET'])
def get_products():
    conn = get_db()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    conn.close()
    return jsonify(products)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "service": "product-catalog"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
