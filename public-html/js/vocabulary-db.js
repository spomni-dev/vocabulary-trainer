/** Array of arrays containing the vocabulary items
 *  Structure of the inner array - ["%spelling% %transcription%", %transplation% %transcription%, %past participle% %transcription%]
 *  Transcriptions are getted from http://lingorado.com/transcription/
 */
var vocabularyDB = [

  ["movie", "ˈmuːvi", "кино, фильм"],
  ["movie house", "muːvi haʊs", "кинотеатр"],
  ["to go to the cinema (pictures, movies)", "tuː gəʊ tuː ðə ˈsɪnəmə (ˈpɪkʧəz, ˈmuːviz)","ходить в кино"],
  ["cinemaer-goer", "ˈsɪnəməə-ˈgəʊə", "любитель кино"],
  ["a show", "ə ʃəʊ", "программа, представление, сеанс"],
  ["plot", "plɒt", "сюжет"],
  ["to be on", "to be on", "идти (о фильме)"],
  ["western", "ˈwɛstən", "вестерн"],
  ["horror film", "ˈhɒrə fɪlm", "фильм ужасов"],
  ["adventure film", "ədˈvɛnʧə fɪlm", "приключенческий фильм"],
  ["extremely", "ɪksˈtriːmli", "чрезвычайно"],
  ["review", "rɪˈvjuː", "обзор"],
  ["to shoot (make) a film", "tuː ʃuːt (meɪk) ə fɪlm", "снимать фильм"],
  ["performance", "pəˈfɔːməns", "постановка, исполнение"],
  ["screen", "skriːn", "экран"],
  ["amusing", "əˈmjuːzɪŋ", "развлекательный"],
  ["amusement", "əˈmjuːzmənt", "развлечение"],
  ["to entertain", "tuː ˌɛntəˈteɪn", "развлекать"],
  ["boring", "ˈbɔːrɪŋ", "скучный"],
  ["to frighten", "tuː ˈfraɪtn", "пугать"],
  ["to be interested in", "tuː biː ˈɪntrɪstɪd ɪn", "интересоваться чем-либо"],
  ["to be impressed in", "tuː biː ɪmˈprɛst ɪn", "получить впечатление"],
  ["to miss", "tuː mɪs", "пропускать"],
  ["splendid", "ˈsplɛndɪd", "великолепный"],
  ["fascinating", "ˈfæsɪneɪtɪŋ", "замечательный"],
  ["to stay up late", "tuː steɪ ʌp leɪt", "долго не ложиться спать"],
  ["to afford", "tuː əˈfɔːd", "позволять себе"],
  ["to call for somebody", "tuː kɔːl fɔː ˈsʌmbədi", "заходить за кем-либо"],
  ["particularly", "pəˈtɪkjʊləli", "особенно"],
  ["to switch on/off", "tuː swɪʧ ɒn/ɒf", "включать/выключать"],
  ["straight play", "streɪt pleɪ", "классическая пьесса"],
  ["animated cartoons", "ˈænɪmeɪtɪd kɑːˈtuːnz", "мультфильм"],
  ["to broadcast", "tuː ˈbrɔːdkɑːst", "передавать по радио (телевидению)"],
  ["to make up one's mind", "tuː meɪk ʌp wʌnz maɪnd", "решить"],
  ["director", "dɪˈrɛktə", "режиссер"],
  ["playwright", "ˈpleɪraɪt", "драматург"],
  ["script", "skrɪpt", "сценарий"],
  ["stage", "steɪʤ", "сцена"],
  ["to stage a play", "tuː steɪʤ ə pleɪ", "поставить пьесу"],
  ["to play the role of", "tuː pleɪ ðə rəʊl ɒv", "играть роль кого-либо"],
  ["musical", "ˈmjuːzɪkəl", "мьюзикл"],
  ["ballet", "ˈbæleɪ", "балет"]

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