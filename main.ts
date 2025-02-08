let ITEM = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ITEM.DateTime(
2018,
2,
15,
4,
12,
30,
4
)
ITEM.start()
basic.forever(function () {
    basic.showNumber(Math.round(ITEM.getSecond()))
})
