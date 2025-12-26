import unittest
import rk2

class TestRK2(unittest.TestCase):
    
    def setUp(self):
        """Инициализация данных перед каждым тестом"""
        self.books = rk2.books
        self.libraries = rk2.libraries
        self.booksLibraries = rk2.booksLibraries

    def test_task_1(self):
        """Тестирование Задания А1 (Сортировка по библиотекам)"""
        expected_first_lib_name = "Государственная библиотека фантастики"
        
        result = rk2.task_1(self.books, self.libraries)
        
        self.assertTrue(len(result) > 0)

        self.assertEqual(result[0][3], expected_first_lib_name)

    def test_task_2(self):
        """Тестирование Задания А2 (Сумма страниц и сортировка)"""
        
        
        result = rk2.task_2(self.books, self.libraries)
        
        self.assertEqual(result[0][0], "Районная библиотека №5")
        self.assertEqual(result[0][1], 584)
        
        self.assertTrue(result[0][1] >= result[1][1])

    def test_task_3(self):
        """Тестирование Задания А3 (Поиск 'библиотека' и M:M связи)"""
        result = rk2.task_3(self.books, self.libraries, self.booksLibraries)
        
        self.assertIsInstance(result, dict)
        
        lib_cosmos = "Научная библиотека 'Космос'"
        self.assertIn(lib_cosmos, result)
        self.assertIn("Дивный новый мир", result[lib_cosmos])

if __name__ == "__main__":
    unittest.main()