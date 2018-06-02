/** Array of arrays containing the vocabulary items
 *  Structure of the inner array - ["%spelling% %transcription%", %transplation% %transcription%, %past participle% %transcription%]
 *  Transcriptions are getted from http://lingorado.com/transcription/
 */
var vocabularyDB = [

    ["meal", "miːl", "еда (трапеза)"],
    ["We have four a  meals a day.", "wiː hæv fɔːr ə miːlz ə deɪ.", "Мы едим четыре раза в день."],
    ["dish", "dɪʃ", "блюдо"],
    ["fish dish", "fɪʃ dɪʃ", "рыбное блюдо"],
    ["boiled egg", "bɔɪld ɛg", "вареное яйцо"],
    ["beer", "bɪə", "пиво"],
    ["tongue", "tʌŋ", "язык"],
    ["sausage", "ˈsɒsɪʤ", "колбаса"],
    ["apricot", "ˈeɪprɪkɒt", "абрикос"],
    ["ham", "hæm", "ветчина, окорок"],
    ["mutton chop", "ˈmʌtn ʧɒp", "баранья котлета"],
    ["roast meat", "rəʊst miːt", "запеченое мясо"],
    ["fried fish", "fraɪd fɪʃ", "жареная рыба"],
    ["substantial", "səbˈstænʃəl", "обстоятельный"],
    ["(im)possible", "(im)ˈpɒsəbl", "(не)возможный"],
    ["to follow", "tuː ˈfɒləʊ", "следовать"],
    ["to have a chat", "tuː hæv ə ʧæt", "болтать (разговаривать)"],
    ["to consist of", "tuː kənˈsɪst ɒv", "состоять из"],
    ["course", "kɔːs", "блюдо"],
    ["for the first course", "fɔː ðə fɜːst kɔːs", "на первое (блюдо)"],
    ["dessert (=sweet dish)", "dɪˈzɜːt (=swiːt dɪʃ)", "десерт"],
    ["soup", "suːp", "суп"],
    ["chicken broth", "ˈʧɪkɪn brɒθ", "куриный бульён"],
    ["biscuits", "ˈbɪskɪts", "печенье"],
    ["pie",  "paɪ",  "пирог"],
    ["plate", "pleɪt", "тарелка"],
    ["knife", "naɪf", "нож"],
    ["fork", "fɔːk", "вилка"],
    ["spoon", "spuːn", "ложка"],
    ["to be hungry", "tuː biː ˈhʌŋgri", "быть голодным"],
    ["to be thirsty", "tuː biː ˈθɜːsti", "хотеть пить"],
    ["to have a snack", "tuː hæv ə snæk", "перекусить"],
    ["health", "hɛlθ", "здоровье"],
    ["motto", "ˈmɒtəʊ", "девиз"],
    ["waiter", "ˈweɪtə", "официант"],
    ["waitress", "ˈweɪtrɪs", "официантка"],
    ["to order", "tuː ˈɔːdə", "заказывать"],
    ["to lay the table", "tuː leɪ ðə ˈteɪbl", "накрыть на стол"],
    ["taste", "teɪst", "вкус"],
    ["to taste smth.", "tuː teɪst ˈsʌmθɪŋ", "пробовать что-либо вкус"],
    ["tasty", "ˈteɪsti", "вкусный (имеющий вкус)"],
    ["to smell", "tuː smɛl", "нюхать; пахнуть"],
    ["delicious", "dɪˈlɪʃəs", "вкусный (с приятным вкусом)"],
    ["to be on a slimming diet", "tuː biː ɒn ə ˈslɪmɪŋ ˈdaɪət", "быть на диете для похудания"],
    ["recipe", "ˈrɛsɪpi", "рецепт"],
    ["green peas", "griːn piːz", "зелёный горошек"],
    ["rice", "raɪs", "рис"],
    ["porridge", "ˈpɒrɪʤ", "овсяная каша"],
    ["cereals", "ˈsɪərɪəlz", "сухое дробл. зерно; крупы"],
    ["cornflakes", "ˈkɔːnfleɪks", "кукрузные хлопья"]

]
/**
 *  критерии корректоности базы данных
 *    после каждого элемента массива, кроме последнего, стоит запятая
 *    элемент массива instanceof Array
 *    каждый элемент массива уникален
 *    первый и второй элементы подмассива - строки
 *    второй элемент подмассива начинается символом "[" и завершается "]"
 *    третий элемент подмассива - строка или массив строк
 */