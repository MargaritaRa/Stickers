#!/usr/bin/env python3

from flask import Flask, request, session, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import sqlalchemy
from flask_bcrypt import Bcrypt
import os

# stripe secret key #
# import stripe
# stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')


from models import db, User, Carts, Items

from dotenv import load_dotenv

load_dotenv()

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/dist',
    template_folder='../client/dist'
)

app.secret_key = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('POSTGRES_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

bcrypt = Bcrypt(app)

migrate = Migrate(app, db)

db.init_app(app)


URL_PREFIX = '/api'

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

#function for creating users
@app.post(URL_PREFIX + '/users')
def create_user():
    try:
        new_user = User(
            username = request.json['username'],
            age = request.json['age']
        )
        new_user._hashed_password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')
        db.session.add(new_user)
        db.session.commit()
        session["user_id"] = new_user.id
        return new_user.to_dict(), 201
    except Exception as e:
        return { 'error': str(e) }, 406

#functions for checking session
@app.get(URL_PREFIX + "/check-session")
def check_session():
    user = User.query.where(User.id == session.get('user_id')).first()
    if user:
        return user.to_dict(), 200
    else:
        return {}, 204

#functuon for loging in users
@app.post(URL_PREFIX + '/login')
def login():
    user = User.query.where(User.username == request.json.get('username')).first()
    if user and bcrypt.check_password_hash(user._hashed_password, request.json.get('password')):
        session['user_id'] = user.id
        return user.to_dict(), 201
    else:
        return {'error': 'username or password was invalid'}, 401

#function for loging out users
@app.delete(URL_PREFIX + '/logout')
def logout():
    session.pop('user_id')
    return {}, 204

#function for getting users; USE POSTMAN
# @app.get('/users')
# def all_users():
#     return [user.to_dict() for user in User.query.all()], 200

#function for getting users by id; USE POSTMAN
# @app.get('/users/<int:id>')
# def user_by_id(id):
#     user = User.query.where(User.id == id).first()
#     if user:
#         return user.to_dict(), 200
#     else:
#         return {'error': 'Not found'}, 404
    
#function for pathing users; USE POSTMAN
# @app.patch('/users/<int:id>')
# def patch_user_by_id(id):
#     user = User.query.where(User.id == id).first()
#     if user:
#         for key in request.json.keys():
#             setattr(user, key, request.json[key])
#         db.session.add(user)
#         db.session.commit()
#         return user.to_dict(), 202
#     else:
#         return {'error': 'Not found'}, 404

#function for deleting users; USE POSTMAN
@app.delete(URL_PREFIX + '/users/<int:id>')
def delete_user_by_id(id):
    user = User.query.where(User.id == id).first()
    if user:
        db.session.delete(user)
        db.session.commit()
        return {}, 204
    else:
        return {'error': 'Not found'}, 404
    
#function for all instances in the cart table
# @app.get('/cart')
# def all_carts():
#     return [ carts.to_dict() for carts in Carts.query.all() ], 200

#function for all cart items and their user by cart id
# @app.get('/cart/<int:id>')
# def cart_item_by_cart_id(id):
#     cart = Carts.query.where(Carts.id == id).first()
#     if cart:
#         return cart.to_dict(), 200
#     else:
#         return { 'error': 'Not found' }, 404
    
#function for adding items to cart
@app.post(URL_PREFIX + '/carts')
def post_items_to_cart():
    try:

        
        item = Carts(
            user_id = session.get('user_id'),
            item_id = request.json.get('item_id')
        )

        db.session.add(item)
        db.session.commit()
        return item.to_dict(), 201
    
    except sqlalchemy.exc.IntegrityError as error:
        return {"error": "Invalid data"}, 400
    except ValueError as error:
        return {"error": str(error)}
    
#function for getting all items pertaining to a specific user
@app.get(URL_PREFIX + '/carts')
def cart_items_by_user_id():
    # user_cart = Carts.query.where(Carts.user_id == id).first()
    user_cart = Carts.query.where(Carts.user_id == session.get('user_id')).all()
    if user_cart:
        return [cart.to_dict() for cart in user_cart], 200
    else:
        return {'error': 'Not found'}, 404

#function for deleting item from the users cart
@app.delete(URL_PREFIX + '/carts/<int:id>')
def delete_cart_item(id):
    cart_item = Carts.query.where(Carts.id == id).first()
    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()
        return {}, 204
    else:
        return {'error': 'Not found'}, 404
    
#function for getting items; USE POSTMAN
@app.get(URL_PREFIX + '/items')
def all_items():
    return [item.to_dict() for item in Items.query.all()], 200

#function for getting item by id; USE POSTMAN
@app.get(URL_PREFIX + '/items/<int:id>')
def item_by_id(id):
    user = User.query.where(User.id == id).first()
    if user:
        return user.to_dict(), 200
    else:
        return {'error': 'Not found'}, 404
    
#function adds items to the items table; USE POSTMAN
@app.post(URL_PREFIX + '/items')
def post_items():
    try:
        item = Items(
            name = request.json.get('name'),
            price = request.json.get('price'),
            image = request.json.get('image'),
            category = request.json.get('category'),
        )
        db.session.add(item)
        db.session.commit()
        return item.to_dict(), 201
    except sqlalchemy.exc.IntegrityError as error:
        return {"error": "Invalid data"}, 400
    except ValueError as error:
        return {"error": str(error)}

#functions deletes item form the items table; USE POSTMAN
@app.delete(URL_PREFIX + '/items/<int:id>')
def delete_item(id):
    item = Items.query.where(Items.id == id).first()
    if item:
        db.session.delete(item)
        db.session.commit()
        return {}, 204
    else:
        return {'error': 'Not found'}, 404

#function patches item by id in table; USE POSTMAN
@app.patch(URL_PREFIX + '/items/<int:id>')
def patch_item_by_id(id):
    item = Items.query.where(Items.id == id).first()
    if item:
        for key in request.json.keys():
            setattr(item, key, request.json[key])
        db.session.add(item)
        db.session.commit()
        return item.to_dict(), 202
    else:
        return {'error': 'Not found'}, 404
    
   
@app.post(URL_PREFIX + '/create-payment-intent')
def create_payment():
    try:
        user_id = request.json.get('user_id')

        if not user_id:
            return {'error': 'User ID is required'}, 400

        user = User.query.get(user_id)
        if not user:
            return {'error': 'User not found'}, 404

        # total amount
        total_amount = sum(cart_item.item.price for cart_item in user.carts)

        # paymentintent
        intent = stripe.PaymentIntent.create(
            amount=total_amount * 100,  # stripe requires it to be in cents
            currency='usd'
        )
        return {"client_secret": intent['client_secret']}, 200
    
    except Exception as e:
        return {'error': str(e)}, 403




if __name__ == '__main__':
    app.run(port=5555, debug=True)
