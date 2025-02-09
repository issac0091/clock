let ITEM = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ITEM.DateTime(
2025,
2,
9,
7,
18,
47,
59
)
ITEM.start()
basic.forever(function () {
    basic.showNumber(Math.round(ITEM.getSecond()))
})
