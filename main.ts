namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const planet = SpriteKind.create()
}
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
