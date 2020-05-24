# Interpolation
Идею данного проекта я нашёл в C#. При создании игр иногда бывает нужно линейно интерполировать между двумя значениями. Это делается с помощью функции Lerp. Линейная интероляция - это поиск значения, составляющего некоторый процент между двумя значениями. Например, мы могли бы линейно интерполировать между числами 3 и 5 на 50%, чтобы получить число 4. Это потому, что 4 - это 50% пути между 3 и 5. Я решил воссоздать данную функцию на JavaScript. Данная функция принимает три параметра: первый "с" которого надо интерполировать, второй "до" которого надо интерполировать и третий показывает "как далеко" надо интерполировать. В моём примере 0.5 будет являться 50% => 1 = 100%, а 0 => 0% и т.д.
Функция - https://danielpetelin.github.io/Interpolation/
