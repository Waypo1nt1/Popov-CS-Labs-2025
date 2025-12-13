class Unique(object):
    def __init__(self, items, **kwargs):
        self.ignore_case = kwargs.get('ignore_case', False)
        self.items = iter(items)
        self.seen = set()

    def __next__(self):
        while True:
            item = next(self.items)
            
            if self.ignore_case and isinstance(item, str):
                check_val = item.lower()
            else:
                check_val = item

            if check_val not in self.seen:
                self.seen.add(check_val)
                return item

    def __iter__(self):
        return self

if __name__ == '__main__':
    data = ['a', 'A', 'b', 'B', 'a', 'A', 'b', 'B']
    
    print(list(Unique(data)))
    print(list(Unique(data, ignore_case=True)))