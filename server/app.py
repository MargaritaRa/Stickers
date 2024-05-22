#!/usr/bin/env python3

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, User, Carts # import your models here!

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

migrate = Migrate(app, db)

db.init_app(app)

URL_PREFIX = '/api'

#function for creating users
@app.post(URL_PREFIX + '/users')
def create_user():
    pass

#functions for checking session
@app.get(URL_PREFIX + "/check-session")
def check_session():
    pass

#functuon for loging in users
@app.post(URL_PREFIX + '/login')
def login():
    pass

#function for loging out users
@app.delete(URL_PREFIX + '/logout')
def logout():
    pass

#function for getting users; USE POSTMAN
@app.get('/users')
def all_users():
    return [user.to_dict() for user in User.query.all()], 200

#function for getting users by id; USE POSTMAN
@app.get('/users/<int:id>')
def user_by_id(id):
    user = User.query.where(User.id == id).first()
    if user:
        return user.to_dict(), 200
    else:
        return {'error': 'Not found'}, 404
    
#function for pathing users; USE POSTMAN
@app.patch('/users/<int:id>')
def patch_user_by_id(id):
    user = User.query.where(User.id == id).first()
    if user:
        for key in request.json.keys():
            setattr(user, key, request.json[key])
        db.session.add(user)
        db.session.commit()
        return user.to_dict(), 202
    else:
        return {'error': 'Not found'}, 404

#function for deleting users; USE POSTMAN
@app.delete('/users/<int:id>')
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
@app.get(URL_PREFIX + '/carts')
def post_video_game():
    item = Carts(
        user_id = request.json.get('user_id'),
        item_id = request.json.get('item_id')
    )
    db.session.add(item)
    db.session.commit()
    return item.to_dict()
    
#function for all items pertaining to a specific user
@app.get(URL_PREFIX + '/carts/<int:id>')
def cart_items_by_user_id(id):
    user_cart = Carts.query.where(Carts.user_id == id).first()
    if user_cart:
        return user_cart.to_dict(), 200
    else:
        return {'error': 'Not found'}, 404
    
@app.delete(URL_PREFIX + '/carts/<int:id>')
def delete_cart_item(id):
    cart_item = Carts.query.where(Carts.id == id).first()
    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()
        return {}, 204
    else:
        return {'error': 'Not found'}, 404


if __name__ == '__main__':
    app.run(port=5555, debug=True)
