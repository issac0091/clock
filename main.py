ITEM = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ITEM.date_time(2018, 2, 15, 4, 12, 30, 4)
ITEM.start()

def on_forever():
    basic.show_number(Math.round(ITEM.get_second()))
basic.forever(on_forever)
