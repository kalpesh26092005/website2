from flask import Flask, render_template, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Needed for session-based cart

@app.route('/cart')
def cart():
    cart_items = session.get('cart', [])
    total = sum(item['total'] for item in cart_items)
    return render_template('cart.html', cart_items=cart_items, total=total)

# Add route to simulate adding to cart for testing
@app.route('/add_sample')
def add_sample():
    session['cart'] = [
        {'id': 1, 'name': 'Sample Shirt', 'price': 499, 'quantity': 2, 'total': 998, 'image': '/static/img/shirt1.png'},
        {'id': 2, 'name': 'Cool Tee', 'price': 299, 'quantity': 1, 'total': 299, 'image': '/static/img/shirt2.png'}
    ]
    return 'Sample cart added! Go to /cart to view.'
