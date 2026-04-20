namespace SpriteKind {
    export const Gold = SpriteKind.create()
    export const silver = SpriteKind.create()
    export const junk = SpriteKind.create()
}
scene.onHitWall(SpriteKind.silver, function (sprite, location) {
    sprites.destroy(mySprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.junk, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(-2)
    junkStreak += 1
    if (junkStreak >= 3) {
        warning = textsprite.create(" \"overload\"")
        warning.setPosition(80, 20)
        warning.setBorder(2, 6)
        mySprite.setFlag(SpriteFlag.AutoDestroy, false)
        hero.sayText("\"OVERLOADED\"", 2000, true)
        hero.vy = 0
        pause(4000)
        hero.vx = 50
        junkStreak = 0
    }
})
scene.onHitWall(SpriteKind.junk, function (sprite, location) {
    sprites.destroy(mySprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.silver, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    junkStreak = 0
})
scene.onHitWall(SpriteKind.Gold, function (sprite, location) {
    sprites.destroy(mySprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gold, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(3)
    junkStreak = 0
})
let rand = 0
let warning: TextSprite = null
let mySprite: Sprite = null
let hero: Sprite = null
let junkStreak = 0
let gameOver = false
junkStreak = 0
info.setLife(3)
info.startCountdown(90)
hero = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
hero.setPosition(80, 110)
controller.moveSprite(hero, 100, 0)
game.onUpdateInterval(2000, function () {
    rand = randint(0, 2)
    if (rand == 0) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Gold)
        mySprite.setPosition(randint(0, 160), 20)
        mySprite.setVelocity(0, randint(80, 150))
    } else if (rand == 1) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.silver)
        mySprite.setPosition(randint(0, 160), 20)
        mySprite.setVelocity(0, randint(80, 150))
    } else {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.junk)
        mySprite.setPosition(randint(0, 160), 20)
        mySprite.setVelocity(0, randint(80, 150))
    }
})
forever(function () {
    if (info.score() >= 20) {
        game.gameOver(true)
    }
})