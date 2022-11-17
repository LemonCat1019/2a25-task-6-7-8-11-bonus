input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() >= 38) {
        led.setBrightness(input.lightLevel())
        if (input.compassHeading() <= 180) {
            basic.showIcon(IconNames.Heart)
            basic.pause((255 - input.soundLevel()) * 5)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause((255 - input.soundLevel()) * 5)
        } else {
            basic.showIcon(IconNames.Happy)
            basic.pause((255 - input.soundLevel()) * 5)
            basic.showIcon(IconNames.Sad)
            basic.pause((255 - input.soundLevel()) * 5)
        }
    }
})
