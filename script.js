function func() {
    var arr = [
    {
        'phrase': "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12"
    },
    {
        'phrase': "Собираюсь жить вечно, пока всё идёт нормально"
    },
    {
        'phrase': "Не кури, не бухай, занимайся спортом. Черви любят здоровую пищу."
    },
    {
        'phrase': "Бабушка, скажите, пожалуйста, вы, может быть, поторопитесь? У нас-то время еще есть... А вот у вас, по-моему, не очень."
    },
    {
        'phrase': "Чтобы не сидеть без денег - я прилег"
    },
    {
        'phrase': "Хорошая жизнь. Жить я её, конечно, не буду."
    },
    {
        'phrase': "Взросление — это что-то про квартплату"
    }
    ];
    var rand = Math.floor(Math.random() * arr.length);
    var elem = document.getElementById("joke")
    elem.innerHTML = "<p>" + arr[rand].phrase + "</p>";
}