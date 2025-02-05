let ITEM = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ITEM.DateTime(
2024,
2,
15,
4,
9,
21,
4
)
ITEM.start()
basic.forever(function () {
    basic.showNumber(ITEM.getSecond())
})
