ITEM = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ITEM.date_time(2025, 8, 15, 4, 17, 5, 33)

def on_forever():
    basic.show_number(ITEM.get_second())
basic.forever(on_forever)
