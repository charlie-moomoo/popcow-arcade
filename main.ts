controller.combos.attachCombo(controller.combos.idToString(controller.combos.ID.A), function () {
    spriteChanging = 1
    random = randint(1, 5)
    console.log(random)
    if (random == 1) {
        Cow.setImage(assets.image`Happy Cow`)
    } else if (random == 2) {
        Cow.setImage(assets.image`XD Cow`)
    } else if (random == 3) {
        Cow.setImage(assets.image`Unhappy Cow`)
    } else if (random == 4) {
        Cow.setImage(assets.image`Angry Cow`)
    } else {
        Cow.setImage(assets.image`Oh Cow`)
    }
    pops += 1
    spriteChanging = 0
})
controller.combos.attachCombo(controller.combos.idToString(controller.combos.ID.B), function () {
    blockSettings.writeString("1", "0")
    blockSettings.writeString("2", "0")
    blockSettings.writeString("3", "0")
})
let pops = 0
let random = 0
let spriteChanging = 0
let Cow: Sprite = null
if (blockSettings.readString("1").isEmpty()) {
    blockSettings.writeString("1", "0")
    blockSettings.writeString("2", "0")
    blockSettings.writeString("3", "0")
}
scene.setBackgroundImage(assets.image`White Background`)
Cow = sprites.create(assets.image`Smily Cow`, SpriteKind.Player)
Cow.setScale(4.5, ScaleAnchor.Middle)
Cow.y = 65
let Title = sprites.create(assets.image`POPCOW Title`, SpriteKind.Text)
Title.setScale(3, ScaleAnchor.Middle)
Title.y = 12
let selfPop = textsprite.create("0")
selfPop.setOutline(2, 15)
selfPop.y = 26
selfPop.x = 80
let Leaderboard = sprites.create(assets.image`Leaderboard Frame`, SpriteKind.Player)
Leaderboard.setScale(5, ScaleAnchor.Middle)
Leaderboard.y = 80
let Leaderboard_Text = textsprite.create("|")
Leaderboard_Text.setIcon(assets.image`Leaderboard Trophy`)
Leaderboard_Text.setOutline(2, 15)
Leaderboard_Text.y = 112
Leaderboard_Text.setMaxFontHeight(2)
Leaderboard_Text.x = 35
forever(function () {
    if (!(spriteChanging)) {
        selfPop.setText(convertToText(pops))
        Leaderboard_Text.setText("| #1 " + blockSettings.readString("1") + " #2 " + blockSettings.readString("2") + " #3 " + blockSettings.readString("3"))
        if (pops > parseFloat(blockSettings.readString("1"))) {
            blockSettings.writeString("1", convertToText(pops))
        } else if (pops < parseFloat(blockSettings.readString("1")) && pops > parseFloat(blockSettings.readString("2"))) {
            blockSettings.writeString("2", convertToText(pops))
        } else if (pops < parseFloat(blockSettings.readString("2")) && pops > parseFloat(blockSettings.readString("3"))) {
            blockSettings.writeString("3", convertToText(pops))
        } else {
        	
        }
        pause(1500)
        Cow.setImage(assets.image`Smily Cow`)
    }
})
