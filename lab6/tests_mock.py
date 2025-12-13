import unittest
from unittest.mock import patch
from gen_random import gen_random

class TestGenRandom(unittest.TestCase):
    @patch('gen_random.random.randint')
    def test_gen_random_mock(self, mock_randint):
        mock_randint.return_value = 5

        result = list(gen_random(3, 1, 10))

        self.assertEqual(result, [5, 5, 5])

        self.assertEqual(mock_randint.call_count, 3)

    @patch('gen_random.random.randint')
    def test_gen_random_sequence(self, mock_randint):
        mock_randint.side_effect = [10, 20, 30]

        result = list(gen_random(3, 1, 100))

        self.assertEqual(result, [10, 20, 30])

if __name__ == '__main__':
    unittest.main()
