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

        i = Items(image="boba.png", category="Artsy", name="Boba", price="4")
        items.append(i)

        i = Items(image="cat.png", category="Artsy", name="Cat with Flowers", price="4")
        items.append(i)

        i = Items(image="chatting.png", category="Artsy", name="Chill dude", price="4")
        items.append(i)

        i = Items(image="cool-monkey.png", category="Monkeys", name="Cool monkey", price="3")
        items.append(i)

        i = Items(image="creativity (1).png", category="Artsy", name="Creative journal", price="5")
        items.append(i)

        i = Items(image="creativity.png", category="Artsy", name="Spark of creativity", price="6")
        items.append(i)

        i = Items(image="dab-monkey.png", category="Monkeys", name="Dab monkey", price="5")
        items.append(i)

        i = Items(image="done.png", category="Quotes", name="It's always possible", price="4")
        items.append(i)

        i = Items(image="dream-big.png", category="Quotes", name="Dream big", price="6")
        items.append(i)

        i = Items(image="eat.png", category="Artsy", name="Ramen eater", price="6")
        items.append(i)

        i = Items(image="glass-of-lemon.png", category="Artsy", name="Summer day", price="6")
        items.append(i)

        i = Items(image="idea.png", category="Artsy", name="Cutesy pencil", price="6")
        items.append(i)

        i = Items(image="kind.png", category="Quotes", name="Be kind to yourself", price="5")
        items.append(i)

        i = Items(image="live.png", category="Quotes", name="Live, Laugh, Love", price="5")
        items.append(i)

        i = Items(image="new-ideas-in-process.png", category="Artsy", name="New Ideas In Process", price="6")
        items.append(i)

        i = Items(image="photo-editing.png", category="Artsy", name="Let's take pics", price="5")
        items.append(i)

        i = Items(image="pinata-monkey.png", category="Monkeys", name="Pinata monkey", price="4")
        items.append(i)

        i = Items(image="planet.png", category="Artsy", name="Planet", price="6")
        items.append(i)

        i = Items(image="progress.png", category="Quotes", name="Progress Not Perfection", price="5")
        items.append(i)

        i = Items(image="proud.png", category="Quotes", name="Keep Going", price="5")
        items.append(i)

        i = Items(image="rainbow.png", category="Artsy", name="Rainbow", price="5")
        items.append(i)

        i = Items(image="ramen-monkey.png", category="Monkeys", name="Ramen monkey", price="4")
        items.append(i)

        i = Items(image="self.png", category="Quotes", name="Take time for yourself", price="6")
        items.append(i)

        i = Items(image="slay.png", category="Quotes", name="Wake up & slay", price="6")
        items.append(i)

        i = Items(image="smore.png", category="Quotes", name="Cutesy S'more", price="7")
        items.append(i)

        i = Items(image="space.png", category="Quotes", name="Enjoying my space", price="5")
        items.append(i)

        i = Items(image="spirit.png", category="Quotes", name="That's the spirit", price="5")
        items.append(i)

        i = Items(image="time.png", category="Quotes", name="Great things take time", price="6")
        items.append(i)

        i = Items(image="vibes.png", category="Quotes", name="Only Good Vibes", price="6")
        items.append(i)

        i = Items(image="watermelon-monkey.png", category="Monkeys", name="Watermelon monkey", price="5")
        items.append(i)

        i = Items(image="you-are.png", category="Quotes", name="Be Proud", price="6")
        items.append(i)

        i = Items(image="you-can.png", category="Quotes", name="You can do anything", price="7")
        items.append(i)

        i = Items(image="yum-monkey.png", category="Monkeys", name="Yum monkey", price="5")
        items.append(i)

        db.session.add_all(items)
        db.session.commit()

        print("Seeding complete!")



        








