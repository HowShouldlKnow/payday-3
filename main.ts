namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const duffel_bag = SpriteKind.create()
    export const get_away_car = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.duffel_bag, function (sprite, otherSprite) {
    if (true) {
        player_idle.setImage(img`
            f f f f f f f f . . . . . 
            f f f f f f f f f f . . . 
            f f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f f 
            . f 4 1 f 4 4 f 1 4 f f f 
            . f e 4 4 4 4 4 4 e f f f 
            . f f f e e e e f f f f f 
            f e f b 7 7 7 f f f e f f 
            e 4 f 7 7 f f f 7 f 4 e f 
            e e f f f f 6 6 6 f e e . 
            . . f f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `)
        duffel_bagsprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.get_away_car, function (sprite, otherSprite) {
    player_idle.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
    player_idle.startEffect(effects.confetti, 500)
    duffel_bagsprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f f f f f f f f f f f . . . . 
        f f . . f f f f f f f f f . . . 
        f . . . . f f f f f f f f . . . 
        f . . . . . f f f f f f f f . . 
        f f . . . . . f f f f f f f f . 
        . f . . . . . . f f f f f f f . 
        . f f . . . . . f f f f f f f . 
        . . f f f . . . . f f f f f f . 
        . . . . f f . . . . . f f f f . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.duffel_bag)
    duffel_bagsprite.setPosition(73, 7)
    info.changeScoreBy(0.5)
})
function doSomething (player_idle: Sprite) {
	
}
let player_idle: Sprite = null
let duffel_bagsprite: Sprite = null
scene.setBackgroundColor(7)
let get_away_car = sprites.create(img`
    . . . . . . 8 8 c c 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 c 6 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 c 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 c 6 9 9 6 6 6 c 6 f . 
    . . . 8 6 c 8 c c c c 8 c 6 8 . 
    . . . 8 6 8 c b b b b c 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 d 8 8 8 8 8 8 d 8 f . 
    . . . f 8 6 d 8 8 8 8 d 6 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `, SpriteKind.get_away_car)
duffel_bagsprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . f f f f f f f . . . . . . . 
    . . f f f f f f f f . . . . . . 
    . f f f f f f f f f f f . . . . 
    f f . . f f f f f f f f f . . . 
    f . . . . f f f f f f f f . . . 
    f . . . . . f f f f f f f f . . 
    f f . . . . . f f f f f f f f . 
    . f . . . . . . f f f f f f f . 
    . f f . . . . . f f f f f f f . 
    . . f f f . . . . f f f f f f . 
    . . . . f f . . . . . f f f f . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.duffel_bag)
player_idle = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
let tree_2 = sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.wall)
let tree = sprites.create(img`
    ........................
    ...........66...........
    ..........6776..........
    ..........6776..........
    .........877778.........
    ........86777768........
    .......6777777776.......
    ......677677776776......
    ......866777777668......
    .....86677677677668.....
    ....8668866766888668....
    ....8888668886686888....
    .....86868868868668.....
    ....866888668888868.....
    ....8688886888888888....
    ....8886688888866888....
    ....8676888868886768....
    ...87778868678688776....
    ..8777767767787767778...
    .877767777777677776778..
    .8866777777777777776778.
    .8667776776767776777688.
    ..887766768668776667668.
    ..8688668886688686688668
    .86688688686866888688888
    8668868866888866888868..
    88886686688888868688668.
    .8688888888888888668868.
    .8878888868868878868788.
    .87768776788778777667788
    877677767787776767776778
    88877787766777777877788.
    ..88886786777667768888..
    .....86887786668868.....
    ......8886888668888.....
    .........88ee88.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.wall)
tree.setPosition(15, 31)
tree_2.setPosition(98, 55)
duffel_bagsprite.setPosition(73, 7)
get_away_car.setPosition(79, 109)
controller.moveSprite(player_idle, 100, 100)
