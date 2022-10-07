let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
    	
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
