#!/usr/bin/env python3

from app import app
from models import db , Items
from faker import Faker

faker = Faker()

if __name__ == '__main__':
    with app.app_context():
        print("Seeding database...")

        Items.query.delete()
        items = []

        # write your seeds here!

        i = Items(image="boba.png", category="Artsy", price="4")
        items.append(i)

        i = Items(image="cat.png", category="Artsy", price="4")
        items.append(i)

        i = Items(image="chatting.png", category="Artsy", price="4")
        items.append(i)

        i = Items(image="cool-monkey.png", category="Monkeys", price="3")
        items.append(i)

        i = Items(image="creativity (1).png", category="Artsy", price="5")
        items.append(i)

        i = Items(image="creativity.png", category="Artsy", price="6")
        items.append(i)

        i = Items(image="dab-monkey.png", category="Monkeys", price="5")
        items.append(i)

        i = Items(image="boba.png", category="Artsy", price="4")
        items.append(i)

        i = Items(image="done.png", category="Quotes", price="4")
        items.append(i)

        i = Items(image="dream-big.png", category="Quotes", price="6")
        items.append(i)

        i = Items(image="eat.png", category="Artsy", price="6")
        items.append(i)

        i = Items(image="glass-of-lemon.png", category="Artsy", price="6")
        items.append(i)

        i = Items(image="idea.png", category="Artsy", price="6")
        items.append(i)

        i = Items(image="kind.png", category="Quotes", price="5")
        items.append(i)

        i = Items(image="live.png", category="Quotes", price="5")
        items.append(i)

        i = Items(image="new-ideas-in-process.png", category="Artsy", price="6")
        items.append(i)

        i = Items(image="photo-editing.png", category="Artsy", price="5")
        items.append(i)

        i = Items(image="pinata-monkey.png", category="Monkeys", price="4")
        items.append(i)

        i = Items(image="planet.png", category="Artsy", price="6")
        items.append(i)

        i = Items(image="progress.png", category="Quotes", price="5")
        items.append(i)

        i = Items(image="proud.png", category="Quotes", price="5")
        items.append(i)

        i = Items(image="rainbow.png", category="Artsy", price="5")
        items.append(i)

        i = Items(image="rainbow-monkey.png", category="Monkeys", price="4")
        items.append(i)

        i = Items(image="self.png", category="Quotes", price="6")
        items.append(i)

        i = Items(image="slay.png", category="Quotes", price="6")
        items.append(i)

        i = Items(image="smore.png", category="Quotes", price="7")
        items.append(i)

        i = Items(image="space.png", category="Quotes", price="5")
        items.append(i)

        i = Items(image="spirit.png", category="Quotes", price="5")
        items.append(i)

        i = Items(image="time.png", category="Quotes", price="6")
        items.append(i)

        i = Items(image="vibes.png", category="Quotes", price="6")
        items.append(i)

        i = Items(image="watermelon-monkey.png", category="Monkeys", price="5")
        items.append(i)

        i = Items(image="you-are.png", category="Quotes", price="6")
        items.append(i)

        i = Items(image="you-can.png", category="Quotes", price="7")
        items.append(i)

        i = Items(image="yum-monkey.png", category="Monkeys", price="5")
        items.append(i)

        db.session.add_all(items)
        db.session.commit()

        print("Seeding complete!")



        








