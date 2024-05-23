from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# write your models here!

class User (db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    age = db.Column(db.Integer)

    carts = db.relationship('Carts', back_populates='user')

    @validates('username')
    def validate_username(self, key, value):
        user = User.query.where(User.username == value).first()
        if value and len(value.strip().replace(' ', '_')) < 5:
            raise ValueError('Username must be greater than or equal to 5 characters')
        if user:
            raise ValueError('Username must be unique!')
        return value.strip().replace(' ', '_')
    
    @validates('password')
    def validate_password(self, key, value):
        if len(value) < 8:
            raise ValueError('Password must be at least 8 characters long!')
        return value

    @validates('age')
    def validate_age(self, key, value):
        if value >= 13:
            return value
        else:
            raise ValueError('Must be at least 13 years old!')

class Items (db.Model, SerializerMixin):
    __tablename__ = "items"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    image = db.Column(db.String)
    category = db.Column(db.String)

    carts = db.relationship('Carts', back_populates='item')

class Carts (db.Model, SerializerMixin):
    __tablename__ = "carts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'))

    user = db.relationship("User", back_populates="carts")
    item = db.relationship("Items", back_populates="carts")




    