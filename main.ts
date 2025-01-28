let ITEM = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ITEM.start()
ITEM.DateTime(
2020,
2,
15,
4,
0,
0,
0
)
basic.forever(function () {
    basic.showNumber(Math.round(ITEM.getSecond()))
})
