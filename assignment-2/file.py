import random


class deck:
    numbers = [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
    ]
    shades = ["Hearts", "Diamond", "Spades", "Club"]

    def __init__(self):
        self.card = str(
            random.choice(self.numbers) + " of " + random.choice(self.shades)
        )

    pass


pick = deck()

print("You randomly got", pick.card)

