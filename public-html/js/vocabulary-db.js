/** Array of arrays containing the vocabulary items
 *  Structure of the inner array - ["%spelling% %transcription%", %transplation% %transcription%, %past participle% %transcription%]
 *  Transcriptions are getted from http://lingorado.com/transcription/
 */
var vocabularyDB = [
  //-- v?.?.0 - vocabulary from UNIT VI
    //-- v?.?.0-0 - 13 words from vocabulary
      ["a guide", "[ə gaɪd]", "гид"],
      ["a guide book", "[ə gaɪd bʊk]", "путеводитель"],
      ["a tourist", "[ə ˈtʊərɪst]", "турист"],
      ["a foreign tourist", "[ə ˈfɒrɪn ˈtʊərɪst]", "иностранный турист"],
      ["a stranger", "[ə ˈstreɪnʤə]", ["незнакомец", "чужак"]],
      ["a trip", "[ə trɪp]", ["поездка", "устройство отключения"]],
      ["to make a trip", "[tuː meɪk ə trɪp]", "совершать поездку"],
      ["famous", "[ˈfeɪməs]", ["знаменитый", "известный"]],
      ["to keep to the left", "[tuː kiːp tuː ðə lɛft]", "держаться левой стороны"],
      ["to keep to the right", "[tuː kiːp tuː ðə raɪt]", "держаться правой стороны"],
      ["to book tickets in advance", "tuː bʊk ˈtɪkɪts ɪn ədˈvɑːns", "заказать билеты заранее"],
      ["to book", "tuː bʊk", "заказывать"],
      ["a ticket", "[ə ˈtɪkɪt]","билет"],
      ["an advance", "[ən ədˈvɑːns]", "движение вперед"],
      ["to advance", "[tuː ədˈvɑːns]", "двигаться вперед"],
      ["to change for", "[tuː ʧeɪnʤ fɔː]", "пересесть на автобус"],
      ["a travel agency", "[ə ˈtrævl ˈeɪʤənsi]", "туристическое агенство"],
      ["to spend holidays", "[tuː spɛnd ˈhɒlədeɪz]", "проводить отпуск"],

    //-- v?.?.0-1 - words from exercise XI.b
      ["a customs officer", "[ə ˈkʌstəmz ˈɒfɪsə]", "сотрудник таможни"],
      ["a busy town", "[ə ˈbɪzi taʊn]", "оживленный город"],
      ["once a week", "[wʌns ə wiːk]", "раз в неделю"],
      ["a truck", "[ə trʌk]", "грузовик"],
      ["never", "[ˈnɛvə]", "никогда"],
      ["one day", "[wʌn deɪ]", ["один день", "однажды"]],
      ["a smuggler", "[ə ˈsmʌglə]", "контрабандист"],
      ["last year", "[lɑːst jɪə]", "в прошлом году"],
      ["to retire", "[tuː rɪˈtaɪə]", "выходить на пенсию"],
      ["expensive", "[ɪksˈpɛnsɪv]", "дорогостоящий"],
      ["rich", "rɪʧ", "богатый"],
      ["to smuggle", "[tuː ˈsmʌgl]", "заниматься контрабандой"]
];

// console.log(vocabularyDB);

/**
 *  критерии корректоности базы данных
 *    после каждого элемента массива, кроме последнего, стоит запятая
 *    элемент массива instanceof Array
 *    каждый элемент массива уникален
 *    первый и второй элементы подмассива - строки
 *    второй элемент подмассива начинается символом "[" и завершается "]"
 *    третий элемент подмассива - строка или массив строк
 */