import unittest
from field import field

class TestFieldFunction(unittest.TestCase):
    def setUp(self):
        self.goods = [
            {'title': 'Ковер', 'price': 2000, 'color': 'green'},
            {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black'},
            {'title': 'Стеллаж', 'price': None, 'color': 'white'},
            {'title': None, 'price': 1000, 'color': 'red'}
        ]

    def test_single_argument(self):
        result = list(field(self.goods, 'title'))
        expected = ['Ковер', 'Диван для отдыха', 'Стеллаж']
        self.assertEqual(result, expected)

    def test_multiple_arguments(self):
        result = list(field(self.goods, 'title', 'price'))
        expected = [
            {'title': 'Ковер', 'price': 2000},
            {'title': 'Диван для отдыха', 'price': 5300},
            {'title': 'Стеллаж'},
            {'price': 1000}
        ]
        self.assertEqual(result, expected)

    def test_missing_key(self):
        result = list(field(self.goods, 'weight'))
        expected = []
        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main()
