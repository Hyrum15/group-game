namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const planet = SpriteKind.create()
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.Player)
let enemyplanet = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 7 7 6 6 6 6 . . . . . 
    . . . 6 6 7 7 7 6 6 6 6 . . . . 
    . . 6 6 6 7 7 7 7 6 6 6 6 . . . 
    . 6 6 6 6 7 7 7 7 6 6 6 6 6 . . 
    . 6 6 6 6 6 7 7 7 6 6 6 6 6 . . 
    . 7 7 6 6 6 6 6 6 6 6 6 6 6 . . 
    . 7 7 7 7 6 6 6 6 6 6 6 6 6 . . 
    . 7 7 7 7 6 6 6 7 7 6 6 7 7 . . 
    . 7 7 7 7 6 6 6 7 7 7 7 7 7 . . 
    . 7 7 6 6 6 6 6 7 7 7 7 7 7 . . 
    . . 6 6 6 6 6 6 7 7 7 7 7 . . . 
    . . . 6 6 6 6 6 6 7 7 7 . . . . 
    . . . . 6 6 6 6 6 6 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.planet)
enemyplanet.setScale(8, ScaleAnchor.Middle)
enemyplanet.setPosition(85, 5)
