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
      ["to smuggle", "[tuː ˈsmʌgl]", "заниматься контрабандой"],

    //-- #02-0-0-1 - words from vocabulary of UNIT VI
      ["to show smb. around (the city)", "tuː ʃəʊ ˈsʌmbədi əˈraʊnd (ðə ˈsɪti)", "показывать кому-л. (город)"],
      ["to travel by (air, sea)", "tuː ˈtrævl baɪ (eə, siː)", "ездить (на самолете, по морю)"],
      ["rich", "rɪʧ", "богатый"],
      ["wonderful", "ˈwʌndəfʊl", "перкрасный"],
      ["railway", "ˈreɪlweɪ", "железная дорога"],
      ["railway station", "ˈreɪlweɪ ˈsteɪʃən", "железнодорожный вокзал"],
      ["traffic", "ˈtræfɪk", "уличное движение"],
      ["heavy traffic", "ˈhɛvi ˈtræfɪk", "сильное движение"],
      ["traffic lights", "ˈtræfɪk laɪts", "светофор"],
      ["traffic rules", "ˈtræfɪk ruːlz", "правила уличного движения"],
      ["passenger", "ˈpæsɪnʤə", "пассажир"],
      ["crossing", "ˈkrɒsɪŋ", "переход"],
      ["to cross the street", "tuː krɒs ðə striːt", "переходить улицу"],
      ["to enjoy something", "tuː ɪnˈʤɔɪ ˈsʌmθɪŋ", "нслаждаться чем-либо"],
      ["to swim", "tuː swɪm", "плавать"],
      ["to go boating", "tuː gəʊ ˈbəʊtɪŋ", "кататься на лодке"],
      ["to lie in the sun", "tuː laɪ ɪn ðə sʌn", "загорать"],
      ["beach", "biːʧ", "пляж"],
      ["sunshine", "ˈsʌnʃaɪn", "солнце, солнечный свет"],
      ["to take pictures", "tuː teɪk ˈpɪkʧəz", "фотографировать"],
      ["view (of London)", "vjuː (ɒv ˈlʌndən)", "вид (Лондона)"],
      ["the customs office", "ðə ˈkʌstəmz ˈɒfɪs", "таможня"],
      ["sign", "saɪn", "знак, вывеска"],
      ["seashore", "ˈsiːʃɔː", "морской берег"],
      ["to ask the way to", "tuː ɑːsk ðə weɪ tuː", "спрашивать как пройти куда-л."],
      ["to be overcrowded", "tuː biː ˌəʊvəˈkraʊdɪd", "быть переполненным"],
      ["to tell somebody", "tuː tɛl ˈsʌmbədi", "сказать кому-л."],

    //-- #02-0-1 add words from text I of UNIT VI
      ["the capital of country", "ðə ˈkæpɪtl ɒv ˈkʌntri", "столица страны"],
      ["be going to", "biː ˈgəʊɪŋ tuː", "собираться"],
      ["I'm going to be your guide.", "aɪm ˈgəʊɪŋ tuː biː jɔː gaɪd.", "Я буду вашим гидом."],
      ["most of somethings", "məʊst ɒv ˈsʌmθɪŋz", "большинство чего-либо"],
      ["double-decker (a bus)", "ˈdʌblˈdɛkə (ə bʌs)", "двухэтажный (автобус)"],
      ["storey", "ˈstɔːri", "этаж"],
      ["one-storey", "wʌn-ˈstɔːri", "одноэтажный"],
      ["countryside", "ˈkʌntrɪˌsaɪd", "сельская местность"],
      ["to belong", "tuː bɪˈlɒŋ", "принадлежать"],
      ["careful", "ˈkeəfʊl", "осторожный"],
      ["to be careful", "tuː biː ˈkeəfʊl", "быть осторожным"],
      ["a corner", "ə ˈkɔːnə", "угол"],
      ["to afford", "tuː əˈfɔːd", "позволять"],
      ["to can afford", "tuː kæn əˈfɔːd", "мочь себе позволить"],
      ["a hotel", "ə həʊˈtɛl", "отель, гостиница"],
      ["What we shall do?", "wɒt wiː ʃæl duː?", "Что мы будем делать?"],

    //-- #02-7 add vocabulary from UNIT VII
      ["to do the shopping", "tuː duː ðə ˈʃɒpɪŋ", "ходить по магазинам"],
      ["to go shopping", "tuː gəʊ ˈʃɒpɪŋ", "ходить по магазинам"],
      ["a shop", "ə ʃɒp", "магазин"],
      ["a shop assistant", "ə ʃɒp əˈsɪstənt", "продавец"],
      ["a store", "ə stɔː", "магазин, запас"],

      ["a department store", "ə dɪˈpɑːtmənt stɔː", "универмаг"],
      ["a supermarket", "ə ˈsjuːpəˌmɑːkɪt", "универсам"],
      ["to get personal service", "tuː gɛt ˈpɜːsnl ˈsɜːvɪs", "обслуживаться персонально"],
      ["to buy", "tuː baɪ", "покупать"],
      ["to sell", "tuː sɛl", "продавать"],

      ["to pay", "tuː peɪ", "платить"],
      ["a price", "ə praɪs", "цена"],
      ["at a resonable price", "æt ə ˌriːˈsʌnəbl praɪs", "за разумную цену"],
      ["pound", "paʊnd", "фунт"],
      ["a five pound note", "ə faɪv paʊnd nəʊt", "банкнота в пять фунтов"],

      ["to change (money)", "tuː ʧeɪnʤ (ˈmʌni)", "менять (деньги)"],
      ["the change", "ðə ʧeɪnʤ", "сдача"],
      ["a tin", "ə tɪn", "банка (железная)"],
      ["a bottle", "ə ˈbɒtl", "бутылка"],
      ["juice", "ʤuːs", "сок"],

      ["pineapple juice", "aɪnˌæpl ʤuːs", "ананасовый сок"],
      ["the baker's", "ðə ˈbeɪkəz", "булочная"],
      ["the dairy", "ðə ˈdeəri", "молочный магазин"],
      ["the butchers", "ðə ˈbʊʧəz", "мясной магазин"],
      ["the grocer's", "ðə ˈgrəʊsəz", "бакалея"],

      ["the greengrocer's", "ðə ˈgriːnˌgrəʊsəz", "овощной магазин"],
      ["a department", "ə dɪˈpɑːtmənt", "отдел"],
      ["a shoe department", "ə ʃuː dɪˈpɑːtmənt", "обувной отдел"],
      ["a counter", "ə ˈkaʊntə", "прилавок"],
      ["ready-made clothes", "ˈrɛdɪˈmeɪd kləʊðz", "готовая одежда"],

      ["to try somthing on", "tuː traɪ ˈsʌmθɪŋ ɒn", "примерять что-либо"]

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