def field(items, *args):
    assert len(args) > 0

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
