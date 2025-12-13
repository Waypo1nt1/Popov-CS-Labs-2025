def field(items, *args):
    assert len(args) > 0, "Должен быть хотя бы один аргумент!"
    
    if len(args) == 1:
        key = args[0]
        for item in items:
            val = item.get(key)
            if val is not None:
                yield val
    else:
        for item in items:
            new_item = {key: item.get(key) for key in args if item.get(key) is not None}
            if len(new_item) > 0:
                yield new_item

if __name__ == '__main__':
    goods = [
        {'title': 'Ковер', 'price': 2000, 'color': 'green'},
        {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black'}
    ]

    print(list(field(goods, 'title')))
    print(list(field(goods, 'title', 'price')))