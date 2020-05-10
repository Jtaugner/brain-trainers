import React from 'react';
import './coupleGame.scss'
import FindSomethingGameWrapper from "../findSomethinGameWrapper";

const couples = [["паузок","паучок"],["никель","николь"],["никель","нинель"],["кроха","крона"],["проезд","приезд"],["ломтик","ломщик"],["пошив","полив"],["кануфер","калуфер"],["лесоруб","ледоруб"],["пышка","пешка"],["пышка","пушка"],["пышка","пытка"],["заря","зоря"],["перемол","перезол"],["перемол","пересол"],["чакра","чадра"],["кожура","кобура"],["кожура","конура"],["бронь","брошь"],["бронь","бровь"],["бронь","брань"],["турка","тучка"],["турка","терка"],["турка","тушка"],["мирика","мимика"],["веда","вена"],["веда","вега"],["веда","веха"],["веда","вежа"],["веда","вера"],["веда","вода"],["камса","камка"],["камса","касса"],["пятак","пяток"],["вена","вега"],["вена","веха"],["вена","вона"],["вена","вежа"],["вена","вина"],["вена","вера"],["теща","тета"],["теща","теша"],["теща","тема"],["отсыпка","отсылка"],["отсыпка","обсыпка"],["выть","высь"],["выть","выпь"],["медяк","медик"],["мочка","мойка"],["мочка","мошка"],["мочка","мотка"],["бюретка","баретка"],["ветерок","вечерок"],["калька","килька"],["калька","калека"],["перевес","перечес"],["тапер","талер"],["тапер","тапир"],["клоп","клип"],["клоп","кляп"],["юлка","юбка"],["юлка","юкка"],["цифра","цитра"],["орудие","оружие"],["остяк","осляк"],["бобы","боны"],["монолит","моноцит"],["почка","печка"],["почка","почта"],["почка","пучка"],["почка","попка"],["почка","пачка"],["почка","полка"],["почка","почва"],["почка","порка"],["косуля","козуля"],["качалка","каталка"],["арена","арека"],["лосиха","лосина"],["рыжак","рыбак"],["рыжак","рыжик"],["рыжак","рысак"],["маевка","моевка"],["вскрик","выкрик"],["умбра","умора"],["стамуха","старуха"],["кроль","кровь"],["кроль","криль"],["шпур","шпор"],["шпур","шнур"],["паладин","палатин"],["накат","набат"],["долинка","доливка"],["янус","ярус"],["трата","трава"],["уборщик","уторщик"],["ступор","стопор"],["выродок","выводок"],["пушок","пупок"],["пушок","пучок"],["филлер","фильер"],["каток","куток"],["каток","капок"],["печаль","педаль"],["печаль","печать"],["низка","нитка"],["обмотка","обметка"],["обмотка","отмотка"],["ляжка","ложка"],["ляжка","лямка"],["ляжка","лежка"],["свая","стая"],["дружина","дрожина"],["отсечка","обсечка"],["отогрев","обогрев"],["фата","фаза"],["фата","фита"],["фата","фара"],["дора","доза"],["дора","дока"],["дора","дура"],["дора","дыра"],["шуба","шуга"],["казна","канна"],["атлант","айлант"],["багор","бугор"],["лодка","ложка"],["лодка","ломка"],["переход","перевод"],["переход","пешеход"],["переход","перерод"],["запечье","заречье"],["пронос","профос"],["пронос","принос"],["пронос","прокос"],["пронос","просос"],["возок","волок"],["нуль","ноль"],["сойма","сойка"],["дюкер","докер"],["штат","шпат"],["полива","пожива"],["пушкина","пушнина"],["келарь","кесарь"],["штоф","штуф"],["дюна","дина"],["дюна","дюза"],["крыша","крыса"],["щипание","щупание"],["щипание","щепание"],["проход","провод"],["проход","приход"],["летчик","ленчик"],["сошка","солка"],["сошка","сойка"],["сошка","сушка"],["сошка","сопка"],["сошка","соска"],["сошка","сотка"],["сошка","совка"],["кюринка","коринка"],["аббат","арбат"],["перемет","перечет"],["перемет","перелет"],["поверка","позерка"],["рысь","русь"],["щука","щека"],["оклик","облик"],["оклик","окрик"],["оклик","ослик"],["коляска","колядка"],["прыжок","пружок"],["пламя","племя"],["кретин","кретон"],["отжимок","отжилок"],["вабик","валик"],["причт","приют"],["мартын","мартен"],["ганза","ганка"],["жопа","жупа"],["клюв","клев"],["отъезд","объезд"],["палея","палия"],["фикс","факс"],["транс","трасс"],["плойка","плошка"],["подзор","подпор"],["подзор","подбор"],["олениха","оленуха"],["олениха","оленина"],["рыхляк","рухляк"],["ганка","гонка"],["ганка","гайка"],["ганка","галка"],["запонка","запинка"],["запонка","загонка"],["голец","гонец"],["голец","горец"],["выбоина","вымоина"],["опалка","опилка"],["опалка","опаска"],["саржа","суржа"],["часы","чары"],["обход","обвод"],["обход","отход"],["синьора","сеньора"],["буфы","бусы"],["лапочка","лавочка"],["опара","опера"],["опара","опала"],["опара","отара"],["опара","опора"],["скатка","скалка"],["скатка","скачка"],["скатка","сказка"],["сгиб","саиб"],["мешок","мелок"],["опорок","окорок"],["шавка","шайка"],["шавка","шапка"],["шавка","шашка"],["волосик","волосок"],["ширение","шипение"],["дырка","дымка"],["закупка","закуска"],["давка","дачка"],["давка","девка"],["давка","дамка"],["швабка","швабра"],["верфь","вервь"],["скука","скула"],["чадо","чудо"],["чадо","чаво"],["профос","прокос"],["профос","просос"],["мирт","март"],["план","плен"],["баня","батя"],["стража","страна"],["стража","страда"],["тюбик","тюник"],["катерна","каверна"],["стык","стек"],["стык","сток"],["стык","стук"],["истод","исход"],["булочка","белочка"],["булочка","будочка"],["бестер","бустер"],["оправа","отрава"],["ввод","вход"],["корейка","копейка"],["фальц","фильц"],["лавра","лавка"],["осечка","овечка"],["осечка","осочка"],["дама","даба"],["дама","дача"],["дама","дума"],["дама","дата"],["галера","галета"],["посул","посол"],["посул","посыл"],["банкир","башкир"],["помост","погост"],["рамочка","рюмочка"],["цепь","цель"],["ровик","ротик"],["ровик","ролик"],["отсадка","обсадка"],["отсадка","отладка"],["отсадка","отгадка"],["отсадка","отсидка"],["белье","былье"],["чеснок","челнок"],["удод","уход"],["удод","увод"],["удод","урод"],["ракета","ракита"],["перепел","передел"],["фора","фура"],["фора","фара"],["тетка","течка"],["тетка","татка"],["тетка","теска"],["тетка","терка"],["тетка","тешка"],["тетка","тезка"],["тетка","телка"],["отлет","отчет"],["отлет","облет"],["отлет","омлет"],["отлет","ответ"],["копыто","корыто"],["туба","туна"],["туба","туша"],["туба","туча"],["туба","тура"],["туба","тута"],["колтун","колдун"],["фига","фифа"],["фига","фуга"],["фига","фила"],["фига","фита"],["орлица","ослица"],["натуга","натура"],["обшивка","обливка"],["обшивка","обвивка"],["обшивка","оббивка"],["обшивка","отшивка"],["хлюст","хлыст"],["день","дань"],["арат","агат"],["арат","адат"],["рыбалка","рыбачка"],["тельник","тальник"],["вояка","водка"],["вояка","возка"],["коржик","кортик"],["сват","свет"],["сват","скат"],["утечка","уточка"],["окот","осот"],["пастырь","пустырь"],["отрепье","отребье"],["счес","свес"],["канонир","капонир"],["плов","плав"],["лейка","лежка"],["лейка","лерка"],["лейка","лепка"],["лейка","лайка"],["лейка","леска"],["рублик","рубщик"],["рублик","рубчик"],["скирда","скерда"],["икание","иканье"],["баска","бабка"],["баска","башка"],["баска","басма"],["баска","байка"],["баска","барка"],["баска","балка"],["баска","банка"],["стела","стена"],["стела","стека"],["лига","лиса"],["лига","лира"],["лига","липа"],["стычка","сточка"],["стычка","стачка"],["ставка","старка"],["ставка","стайка"],["ставка","стачка"],["ставка","славка"],["канон","канун"],["рыбец","рубец"],["рыбец","рябец"],["лития","лилия"],["лития","линия"],["рампа","рамка"],["стирка","стилка"],["стирка","старка"],["неофит","неолит"],["бухта","бахта"],["попойка","помойка"],["лизание","лазание"],["чердак","черпак"],["потомок","потолок"],["тета","теша"],["тета","тата"],["тета","тема"],["тета","тута"],["налой","напой"],["налой","навой"],["налой","надой"],["прищур","пращур"],["босовик","боровик"],["угар","улар"],["угар","увар"],["угар","удар"],["отрог","отлог"],["плод","плед"],["житье","жилье"],["житье","житие"],["сидение","сипение"],["сидение","синение"],["сидение","сиденье"],["дочка","дачка"],["дочка","доска"],["махан","маран"],["армада","аркада"],["масон","мамон"],["коллаж","коллеж"],["жирок","жарок"],["затычка","заточка"],["сабля","сакля"],["ворота","ворона"],["атака","абака"],["звание","знание"],["звание","здание"],["река","репа"],["река","рема"],["река","рука"],["река","рака"],["пест","пост"],["парник","пырник"],["флат","флот"],["флат","фиат"],["гурьба","гульба"],["край","крой"],["вклейка","вклепка"],["сетка","сечка"],["сетка","сотка"],["чина","чича"],["пьеса","пьеза"],["топь","толь"],["страна","страда"],["страна","сарана"],["страна","струна"],["осленок","орленок"],["платина","плотина"],["нежин","нажин"],["сосняк","сорняк"],["слух","слых"],["широта","шпрота"],["счетчик","сметчик"],["счетчик","считчик"],["нева","нива"],["нева","нега"],["труха","труба"],["невроз","нейроз"],["невроз","некроз"],["пуск","паск"],["пуск","писк"],["гриф","граф"],["герма","гемма"],["шлях","шлих"],["регата","рената"],["потек","поток"],["лучинка","личинка"],["лобок","лоток"],["лобок","лобик"],["триоль","триодь"],["бурка","бурса"],["бурка","барка"],["бурка","булка"],["бурка","будка"],["бурка","бурда"],["бурка","бирка"],["сайра","сайка"],["сайра","сайда"],["сайра","сайга"],["пересев","перепев"],["падина","пашина"],["падина","подина"],["панк","паек"],["панк","паск"],["панк","паук"],["панк","парк"],["лапа","лата"],["лапа","лафа"],["лапа","ласа"],["лапа","лама"],["лапа","лава"],["лапа","лада"],["лапа","лупа"],["лапа","лажа"],["лапа","липа"],["кабан","калан"],["кабан","каган"],["уход","увод"],["уход","урод"],["ларь","лань"],["булат","бурат"],["залет","зачет"],["залет","завет"],["лунник","ленник"],["лунник","лучник"],["подсос","поднос"],["лапша","лапта"],["лапша","лапка"],["мыто","мыло"],["удел","удол"],["удел","узел"],["трап","труп"],["трап","треп"],["трап","трип"],["трап","троп"],["конник","кончик"],["конник","кожник"],["рубец","рябец"],["пистик","пестик"],["метка","метла"],["метка","мерка"],["метка","мотка"],["метка","мекка"],["метка","матка"],["наган","нагон"],["юнкор","юниор"],["юнкор","юнкер"],["напор","набор"],["гамма","гемма"],["гамма","гумма"],["корт","карт"],["корт","копт"],["шафер","шофер"],["шафер","шабер"],["шафер","шатер"],["шафер","шифер"],["маца","мама"],["маца","мара"],["маца","мана"],["маца","мала"],["запарка","запашка"],["запарка","заварка"],["кадр","каюр"],["кадр","кедр"],["кручина","крушина"],["уточка","уторка"],["уточка","удочка"],["уточка","улочка"],["почет","полет"],["почет","помет"],["почет","повет"],["поение","прение"],["росянка","росинка"],["палочка","парочка"],["палочка","папочка"],["палочка","полочка"],["ращение","ранение"],["колея","корея"],["горка","гонка"],["бычина","былина"],["орлан","орган"],["орлан","оркан"],["доля","дуля"],["июнь","июль"],["жница","жрица"],["жница","жнива"],["купчина","купчиха"],["арфа","арба"],["арфа","арча"],["арфа","арка"],["пенье","пение"],["пузанок","пазанок"],["махание","макание"],["махание","мазание"],["скена","сцена"],["скена","смена"],["скена","стена"],["скена","сиена"],["выручка","вырубка"],["мост","муст"],["репица","репина"],["дробь","дрожь"],["нанка","ненка"],["нанка","наука"],["канкан","капкан"],["водород","водовод"],["лиска","литка"],["лиска","липка"],["лиска","ласка"],["лиска","леска"],["лето","лото"],["клипер","кливер"],["доход","довод"],["кадушка","катушка"],["бурсак","бурлак"],["казарка","казарма"],["казарка","казанка"],["казарка","казачка"],["казарка","казашка"],["иврит","иприт"],["флавон","флакон"],["свет","счет"],["свет","слет"],["перка","пешка"],["перка","перга"],["перка","печка"],["перка","пурка"],["перка","пенка"],["перка","порка"],["бетон","бутон"],["бетон","бекон"],["бетон","батон"],["калоша","колоша"],["станица","станина"],["фацеция","фацелия"],["гольфы","гольды"],["ноль","новь"],["ноль","ночь"],["грудка","грядка"],["отвес","обвес"],["казак","кабак"],["подзыв","подрыв"],["подзыв","подмыв"],["нейрон","неврон"],["нейрон","нейлон"],["пацан","патан"],["окурок","окорок"],["поза","пора"],["поза","пола"],["минер","мизер"],["минер","минор"],["минер","манер"],["пяток","поток"],["ложка","лежка"],["ложка","ломка"],["запашка","замашка"],["дыба","даба"],["дыба","дыра"],["хорт","хост"],["растр","ростр"],["корча","корда"],["корча","корма"],["корча","корка"],["рикша","ракша"],["канва","канна"],["стенка","сценка"],["чаканка","чеканка"],["порыв","позыв"],["рамс","раис"],["рамс","раус"],["рамс","рапс"],["пеночка","пуночка"],["слюда","слюна"],["дело","депо"],["дело","дуло"],["подрыв","подмыв"],["порода","погода"],["порода","пороша"],["левак","лежак"],["рогожа","рогоза"],["ровер","рокер"],["драка","драма"],["драка","драга"],["внучек","внучок"],["дойра","дойна"],["дойра","домра"],["сброс","спрос"],["сброс","сорос"],["фабула","фибула"],["капля","купля"],["камедь","камень"],["рыгание","рычание"],["рыгание","рыкание"],["рыгание","ругание"],["рыгание","рыдание"],["обтяжка","оттяжка"],["облов","отлов"],["белена","беляна"],["гемма","гумма"],["отдых","отдух"],["девон","демон"],["година","гадина"],["лапища","лапина"],["учан","улан"],["учан","ушан"],["учан","уран"],["забияка","забивка"],["бобочка","бабочка"],["ранетка","ракетка"],["паслен","паклен"],["емкость","едкость"],["писец","песец"],["напайка","нагайка"],["напайка","нанайка"],["перелог","пережог"],["булгары","болгары"],["миссия","мессия"],["посох","порох"],["мебель","метель"],["вынос","выкос"],["вынос","взнос"],["манна","манка"],["манна","майна"],["цанга","цинга"],["новик","носик"],["новик","ножик"],["новик","нолик"],["дачка","дамка"],["росинка","росичка"],["росинка","родинка"],["росинка","русинка"],["морель","модель"],["морель","мораль"],["морель","мотель"],["морель","мозель"],["полушар","полупар"],["щиповка","щитовка"],["сырок","сурок"],["сырок","сынок"],["гонор","говор"],["калинка","кабинка"],["калинка","калитка"],["скип","слип"],["скип","скоп"],["скип","скуп"],["лежание","летание"],["чешка","чашка"],["чешка","челка"],["чешка","чушка"],["билет","балет"],["силен","силин"],["силен","сирен"],["силен","селен"],["силен","силон"],["сонник","сотник"],["сонник","сошник"],["мочение","мощение"],["мочение","моление"],["мочение","мучение"],["мочение","мечение"],["педель","педаль"],["педель","пудель"],["лучение","лечение"],["лучение","лужение"],["лучение","лущение"],["банан","баран"],["банан","бадан"],["школа","шкала"],["школа","шкода"],["ручонка","речонка"],["тачанка","тачалка"],["вьюнок","вьюрок"],["нейроз","некроз"],["подвес","подмес"],["жижа","жила"],["жижа","жига"],["меха","муха"],["меха","мена"],["меха","межа"],["меха","мета"],["меха","мера"],["морок","моряк"],["морок","моток"],["мажор","майор"],["койка","кочка"],["койка","корка"],["койка","ковка"],["койка","конка"],["койка","кошка"],["спорщик","сборщик"],["омега","омела"],["милый","малый"],["жрец","жнец"],["косичка","косилка"],["борение","бурение"],["хамка","хамса"],["мари","мэри"],["мари","маки"],["сборщик","сборник"],["сандвич","сэндвич"],["моляр","маляр"],["дрема","драма"],["дрема","дрена"],["овод","обод"],["морг","мозг"],["книга","кница"],["подпал","подпил"],["подпал","подпол"],["подпал","подвал"],["кабачок","казачок"],["подток","подтек"],["тупица","турица"],["трак","трек"],["трак","трок"],["трак","трюк"],["фаска","феска"],["сырт","сорт"],["клест","крест"],["скетч","скотч"],["лямка","ломка"],["недосол","недомол"],["навет","начет"],["навет","намет"],["навет","налет"],["синьор","сеньор"],["пешка","печка"],["пешка","пушка"],["пешка","пенка"],["новация","нотация"],["щенок","щелок"],["распев","рассев"],["промыв","прорыв"],["отжим","обжим"],["отжим","отчим"],["манго","марго"],["манго","манто"],["батат","батут"],["сурдина","сурчина"],["сурдина","сардина"],["скула","скала"],["спевка","спешка"],["повод","поход"],["гафель","газель"],["навель","нагель"],["запинка","заминка"],["запинка","записка"],["креп","крап"],["креп","круп"],["обкорм","откорм"],["перга","пурга"],["привет","прилет"],["привет","причет"],["пуща","пума"],["пуща","пула"],["пуща","пища"],["малина","малица"],["малина","машина"],["малина","махина"],["малина","марина"],["сшивка","свивка"],["сшивка","сливка"],["сшивка","сшибка"],["вечер","ветер"],["провес","прочес"],["провес","промес"],["провес","протес"],["провес","привес"],["кубанец","кубинец"],["немец","ненец"],["веревка","верейка"],["рана","раба"],["рана","руна"],["рана","рапа"],["рана","рона"],["рана","рама"],["рана","раса"],["рана","рада"],["рана","рака"],["кока","кома"],["кока","копа"],["кока","кика"],["кока","коза"],["кока","коса"],["кока","кода"],["кока","кожа"],["кока","кора"],["ластик","листик"],["поводок","паводок"],["поводок","погодок"],["басмач","бахмач"],["скрепа","сурепа"],["ганец","гонец"],["раздой","разбой"],["раздой","развой"],["свитка","свивка"],["свитка","свинка"],["папаша","папаха"],["папаша","параша"],["муха","мура"],["муха","муза"],["муха","мука"],["кантон","каньон"],["кантон","картон"],["пучина","путина"],["полис","полюс"],["губан","гобан"],["губан","гуран"],["жаба","жара"],["ренет","ранет"],["объятье","объятие"],["раис","раус"],["раис","рапс"],["острота","острога"],["начет","намет"],["начет","налет"],["канцер","карцер"],["узик","усик"],["носик","ножик"],["носик","носок"],["носик","нолик"],["ланцет","лангет"],["веко","вето"],["веко","вено"],["пролог","прожог"],["ланка","лачка"],["ланка","лунка"],["ланка","лазка"],["ланка","ласка"],["ланка","лайка"],["ланка","лавка"],["ланка","лапка"],["печка","пучка"],["печка","пачка"],["печка","пенка"],["меласса","мелисса"],["этил","эдил"],["тайна","тайга"],["течка","теска"],["течка","тучка"],["течка","терка"],["течка","тешка"],["течка","тезка"],["течка","точка"],["течка","телка"],["течка","тачка"],["выпар","выпор"],["мочь","мощь"],["мочь","моль"],["немка","нерка"],["немка","ненка"],["выделка","выбелка"],["угон","урон"],["перрон","перлон"],["оградка","огранка"],["дойна","домна"],["дойна","донна"],["паек","паск"],["паек","паук"],["паек","парк"],["ключик","клювик"],["девятка","десятка"],["отжимка","обжимка"],["досыл","досол"],["пролив","прилив"],["пустырь","пустынь"],["трест","траст"],["отливка","обливка"],["отливка","отбивка"],["отливка","отшивка"],["гроза","греза"],["зрачок","значок"],["берека","береза"],["русин","рубин"],["ибис","ирис"],["мальва","мольва"],["мальва","мальма"],["улар","увар"],["улар","удар"],["ступень","степень"],["ступень","студень"],["родник","рудник"],["обминка","обжинка"],["обминка","обманка"],["ажан","азан"],["ажан","алан"],["лорд","лярд"],["стройка","струйка"],["стройка","строчка"],["истина","истица"],["скок","скак"],["скок","сток"],["скок","срок"],["мель","медь"],["мель","моль"],["метр","мэтр"],["грим","грум"],["грим","гром"],["босяк","бодяк"],["выпор","выбор"],["штыб","штаб"],["пика","пина"],["пика","пила"],["пика","пища"],["заливка","завивка"],["заливка","забивка"],["фреза","фраза"],["купание","кутание"],["купание","капание"],["купание","кусание"],["купание","копание"],["купание","кушание"],["пережог","пережиг"],["чага","чаща"],["чага","чара"],["чага","чаша"],["чага","чача"],["гомик","голик"],["кашель","кабель"],["кашель","капель"],["кашель","кафель"],["волна","волга"],["волна","война"],["хабар","хазар"],["лавр","ливр"],["опека","опера"],["самовар","саловар"],["сопилка","сопелка"],["тунец","танец"],["припуск","пропуск"],["драгун","драчун"],["нард","норд"],["ветка","вешка"],["ветка","вятка"],["ветка","ватка"],["ветка","ветла"],["принос","присос"],["прицел","придел"],["видение","висение"],["видение","ведение"],["гриб","гроб"],["гриб","граб"],["дружба","дружка"],["плата","плаха"],["плата","плита"],["топика","тоника"],["укол","удол"],["укол","угол"],["дуплет","дублет"],["атония","агония"],["леди","люди"],["ковыль","коваль"],["пугание","путание"],["кома","копа"],["кома","коза"],["кома","коса"],["кома","кума"],["кома","кода"],["кома","кожа"],["кома","кора"],["увар","удар"],["плоть","плеть"],["обрез","отрез"],["обрез","образ"],["вираж","визаж"],["узник","ушник"],["узник","умник"],["гончак","горчак"],["взрез","вырез"],["передой","перебой"],["передой","перепой"],["парез","порез"],["чаща","чара"],["чаща","чаша"],["чаща","чача"],["синец","ситец"],["латынь","латунь"],["форт","фарт"],["форт","фогт"],["капа","копа"],["капа","каша"],["капа","кара"],["капа","кипа"],["капа","кача"],["капа","купа"],["суета","смета"],["грелка","гречка"],["гонец","горец"],["роса","рожа"],["роса","роща"],["роса","рона"],["роса","роза"],["роса","роба"],["роса","ряса"],["роса","рота"],["роса","раса"],["гиль","гель"],["ступка","скупка"],["ступка","стопка"],["свайщик","свайник"],["свайщик","спайщик"],["свайщик","сварщик"],["кантор","кастор"],["лифтер","лихтер"],["индеец","индиец"],["опий","опой"],["занорыш","заморыш"],["детишки","делишки"],["посошок","порошок"],["бабка","башка"],["бабка","байка"],["бабка","барка"],["бабка","балка"],["бабка","банка"],["бугель","бушель"],["крик","каик"],["крик","крюк"],["крик","клик"],["нарва","нарта"],["спица","спина"],["двойник","дворник"],["солист","софист"],["дележка","денежка"],["трешка","трепка"],["трешка","треска"],["файл","фалл"],["прошва","прорва"],["сбой","слой"],["сбой","спой"],["взмыв","взрыв"],["амур","ажур"],["амур","азур"],["нажин","намин"],["темь","течь"],["темь","тень"],["павозок","паводок"],["мина","мена"],["мина","мана"],["кикс","кекс"],["кикс","кокс"],["копирка","копилка"],["азия","ария"],["танбур","тамбур"],["отточка","отмочка"],["отточка","обточка"],["шаровка","шуровка"],["шаровка","шарошка"],["рань","рать"],["туна","туша"],["туна","туча"],["туна","тина"],["туна","тура"],["туна","тута"],["белила","белица"],["отрава","отрада"],["нудизм","нюдизм"],["шпора","штора"],["провоз","привоз"],["битва","ботва"],["шелк","шейк"],["черенок","черепок"],["черенок","чиренок"],["черенок","черешок"],["осман","обман"],["крит","крат"],["крит","крот"],["тюль","толь"],["валет","взлет"],["валет","вылет"],["баржа","биржа"],["баржа","барка"],["скалка","счалка"],["скалка","свалка"],["скалка","скачка"],["скалка","сказка"],["барк","банк"],["барк","баск"],["зачетка","заметка"],["башка","бяшка"],["башка","байка"],["башка","барка"],["башка","балка"],["башка","банка"],["медник","мечник"],["важа","вага"],["важа","вежа"],["важа","ваза"],["важа","вата"],["девка","дедка"],["девка","детка"],["обувщик","обивщик"],["варенец","валенец"],["косец","конец"],["кража","краса"],["кража","крага"],["штыка","штука"],["турица","торица"],["осанка","осинка"],["осанка","осадка"],["осанка","осанна"],["осанка","очанка"],["урка","урна"],["урка","утка"],["тигр","титр"],["тятя","тетя"],["бейка","байка"],["бейка","белка"],["пипка","попка"],["пипка","пилка"],["пипка","папка"],["туннель","тоннель"],["вольта","волюта"],["уфолог","уролог"],["ужение","учение"],["ужение","умение"],["мазар","мазер"],["потница","пятница"],["засидка","засадка"],["плюс","паюс"],["плюс","плис"],["плюс","плес"],["плюс","пляс"],["подпек","подсек"],["подпек","подтек"],["вытье","витье"],["маниока","манишка"],["закачка","закалка"],["закачка","заначка"],["закачка","задачка"],["топка","тяпка"],["топка","тоска"],["топка","точка"],["топка","тапка"],["мена","межа"],["мена","мета"],["мена","мана"],["мена","мера"],["кощей","кофей"],["старина","станина"],["помада","пощада"],["пава","пара"],["пава","паша"],["пава","папа"],["спаржа","спарта"],["стог","слог"],["стог","стяг"],["стог","смог"],["крупа","круча"],["манник","майник"],["помойка","поморка"],["относ","обнос"],["относ","отсос"],["относ","откос"],["степ","сцеп"],["пальба","палуба"],["пальба","пальма"],["обливка","обвивка"],["обливка","оббивка"],["мирра","митра"],["мирра","мирза"],["мирра","мирта"],["откопка","отковка"],["повар","пожар"],["потеха","помеха"],["финн","фирн"],["убой","удой"],["рубщик","рубчик"],["плюшка","плюска"],["плюшка","плошка"],["штатив","штадив"],["пиемия","премия"],["коровка","коробка"],["коровка","корочка"],["коровка","коронка"],["кошара","комара"],["шпон","шмон"],["милок","мелок"],["типолог","тополог"],["копа","коза"],["копа","коса"],["копа","кода"],["копа","кипа"],["копа","кожа"],["копа","купа"],["копа","кора"],["косок","комок"],["косок","косяк"],["косок","колок"],["косок","кусок"],["кромка","крошка"],["кромка","кройка"],["помощь","помочь"],["шубка","шутка"],["фанза","фанта"],["бионик","битник"],["вервь","ветвь"],["капитул","капитал"],["сверток","сверчок"],["висок","вилок"],["висок","виток"],["малица","мулица"],["малица","матица"],["обсчет","отсчет"],["чакан","чабан"],["пыление","пиление"],["пыление","пылание"],["пыление","пяление"],["гута","губа"],["гута","гуща"],["зона","зола"],["моча","моща"],["моча","мода"],["пушка","пучка"],["пушка","пурка"],["пядь","падь"],["качание","капание"],["качание","катание"],["качание","качение"],["качание","касание"],["селедка","середка"],["фарт","фаут"],["фарт","факт"],["фарт","фант"],["зять","зябь"],["иранец","иракец"],["брошь","бровь"],["брошь","брешь"],["плена","плева"],["поломка","полоска"],["поломка","полочка"],["кофе","кафе"],["крышка","крошка"],["крышка","крынка"],["радон","район"],["концерт","конверт"],["жевание","желание"],["поля","пуля"],["охранка","огранка"],["охранка","охрянка"],["ворох","волох"],["кика","кипа"],["кика","кина"],["кика","киса"],["кика","кила"],["обвод","отвод"],["дедина","детина"],["пасха","паста"],["пасха","пасма"],["казинет","кабинет"],["лиса","лира"],["лиса","ласа"],["лиса","леса"],["лиса","липа"],["сироп","строп"],["саше","саке"],["гидрид","гибрид"],["обметка","обмерка"],["обметка","отметка"],["клип","кляп"],["почта","почва"],["калан","калин"],["калан","кулан"],["калан","каган"],["рейс","репс"],["обжимка","обнимка"],["обжимка","обжинка"],["передир","перетир"],["шленка","шлевка"],["сонет","совет"],["пучка","пачка"],["пучка","пурка"],["жила","жига"],["каверна","каверза"],["шпана","шпага"],["шпана","шпала"],["бобик","ботик"],["бобик","бобок"],["сван","стан"],["подклад","подкрад"],["подпил","подпол"],["пробел","продел"],["раус","рапс"],["нахрап","накрап"],["ящик","ялик"],["вялость","волость"],["теин","тмин"],["теин","твин"],["теин","терн"],["камешек","камелек"],["камешек","камушек"],["задувка","задумка"],["башенка","бабенка"],["ракуша","ратуша"],["хохот","хобот"],["поляк","полок"],["тасовка","тусовка"],["чернова","чернота"],["монацит","моноцит"],["скот","слот"],["скот","скат"],["скот","скит"],["сварка","свайка"],["сварка","свалка"],["сварка","сверка"],["сварка","старка"],["сварка","сванка"],["холение","хотение"],["холение","хуление"],["педаль","падаль"],["истерик","историк"],["купель","капель"],["купель","кудель"],["рожь","роль"],["дубовик","духовик"],["руда","руна"],["руда","рута"],["руда","рада"],["руда","рука"],["заделка","защелка"],["нанизм","нацизм"],["банлон","баллон"],["авар","агар"],["выточка","вытачка"],["выточка","веточка"],["костра","контра"],["уторка","уборка"],["проток","пророк"],["проток","приток"],["сустав","состав"],["сватья","статья"],["татка","тапка"],["татка","тачка"],["кочка","качка"],["кочка","корка"],["кочка","ковка"],["кочка","конка"],["кочка","кичка"],["кочка","кошка"],["кочка","кучка"],["каик","каяк"],["каик","каюк"],["каик","клик"],["бросок","брусок"],["кочан","коран"],["затор","забор"],["затор","зажор"],["затор","запор"],["затор","замор"],["затор","задор"],["затор","зазор"],["атомщик","атомник"],["вязанье","вязание"],["градина","грудина"],["колонна","колонка"],["цапфа","цапка"],["мизер","мазер"],["темя","тетя"],["профан","проран"],["профан","пропан"],["крошка","кройка"],["чернь","червь"],["ограда","отрада"],["корова","корона"],["корова","кирова"],["толк","торк"],["козонок","колонок"],["ладушка","ладошка"],["ладушка","лапушка"],["помои","побои"],["мышка","мошка"],["мышка","мышца"],["мышка","мушка"],["мление","мнение"],["мление","мщение"],["признак","призрак"],["басни","баски"],["ангар","анчар"],["ангар","анвар"],["промол","прокол"],["промол","просол"],["накал","нахал"],["накал","навал"],["рудник","рушник"],["штаб","шваб"],["тузик","тазик"],["тузик","тупик"],["белек","беляк"],["белек","белок"],["сазан","саван"],["сазан","саман"],["сазан","сабан"],["соха","сота"],["соха","сопа"],["соха","сова"],["соха","сома"],["соха","софа"],["соха","сода"],["предел","придел"],["предел","продел"],["лоток","леток"],["прорез","прирез"],["прорез","протез"],["фильтр","фильер"],["блок","блик"],["чечетка","чеченка"],["водка","возка"],["хрящ","хрущ"],["остатки","останки"],["пасть","пясть"],["посылка","посыпка"],["солка","сойка"],["солка","сопка"],["солка","соска"],["солка","сотка"],["солка","совка"],["ушник","умник"],["квакер","клакер"],["взморье","взгорье"],["ротик","ролик"],["клот","киот"],["клот","крот"],["туша","туча"],["туша","теша"],["туша","тура"],["туша","тута"],["мать","мазь"],["мать","марь"],["мать","муть"],["новотел","новосел"],["колпак","колпик"],["мощение","моление"],["злак","знак"],["грунт","грант"],["рябчик","рубчик"],["венок","веник"],["обрат","обкат"],["лесовоз","ледовоз"],["коляда","колода"],["самосад","самосуд"],["омут","омет"],["штык","шлык"],["гроб","граб"],["пильщик","пальщик"],["ажгон","аргон"],["ваер","веер"],["нарыв","намыв"],["пирог","порог"],["откол","отзол"],["корвет","корсет"],["корвет","корнет"],["отмотка","отмочка"],["отмотка","отметка"],["няня","нюня"],["настриг","наструг"],["пейсик","персик"],["дверка","дверца"],["реал","риал"],["пресс","прусс"],["щепа","щека"],["мечник","мучник"],["сиамка","саамка"],["попка","полка"],["попка","папка"],["попка","порка"],["кукан","кулан"],["сель","силь"],["сель","соль"],["сель","сеть"],["сель","семь"],["сель","сень"],["шайка","шапка"],["шайка","шайба"],["шайка","шашка"],["обивка","оливка"],["обивка","оживка"],["обивка","обувка"],["боровик","буровик"],["отчет","ответ"],["олень","осень"],["перо","песо"],["пума","пула"],["увод","урод"],["тара","тора"],["тара","тата"],["тара","тура"],["чешки","четки"],["парта","пахта"],["парта","парча"],["парта","парша"],["парта","паста"],["бита","бета"],["кулуар","кугуар"],["шлихта","шляхта"],["правда","правка"],["парс","паюс"],["парс","пирс"],["парс","пасс"],["парс","перс"],["полет","помет"],["полет","повет"],["гниль","гриль"],["котенок","котелок"],["котенок","китенок"],["пахта","пихта"],["пахта","паста"],["мант","март"],["мант","мент"],["прасол","просол"],["марс","морс"],["марс","маис"],["кончик","кобчик"],["кончик","копчик"],["тропка","трепка"],["тропка","тряпка"],["тропка","тройка"],["печеное","печенье"],["печеное","печение"],["мостик","мосток"],["мостик","мистик"],["откуп","отлуп"],["ретина","рутина"],["ретина","резина"],["ретина","репина"],["ярутка","якутка"],["бабушка","бабашка"],["сержант","сервант"],["буфет","букет"],["строп","струп"],["толкач","толмач"],["узбечка","уздечка"],["крутка","кружка"],["мойка","мошка"],["мойка","мойва"],["мойка","мотка"],["мойка","майка"],["жулье","жилье"],["обгон","отгон"],["рычание","рыкание"],["рычание","рыдание"],["лицо","лихо"],["дзета","диета"],["откидка","отсидка"],["пехота","пахота"],["теснота","темнота"],["сусак","судак"],["астра","астма"],["морс","мопс"],["поэма","пойма"],["бутара","бухара"],["стайер","стажер"],["каление","качение"],["дуриан","дурман"],["панда","панна"],["карат","кагат"],["карат","карст"],["карат","канат"],["долг","донг"],["вега","веха"],["вега","вага"],["вега","вежа"],["вега","вера"],["шпулька","шпилька"],["слепень","степень"],["банька","батька"],["сукно","судно"],["рыбоход","рыбовод"],["теска","терка"],["теска","тешка"],["теска","тезка"],["теска","тоска"],["теска","телка"],["отит","офит"],["кулик","кулек"],["кулик","кубик"],["кулик","кулак"],["тиран","титан"],["тиран","таран"],["рыбак","рысак"],["допайка","допашка"],["душа","дуга"],["душа","дуда"],["душа","дума"],["душа","дура"],["погон","полон"],["агат","адат"],["намет","налет"],["отмычка","отмочка"],["отмычка","отмывка"],["карга","карда"],["карга","карра"],["карга","карма"],["карга","карта"],["навес","натес"],["навес","начес"],["навес","навис"],["подвод","подвид"],["подвод","подход"],["полутон","полусон"],["краска","крачка"],["овоскоп","отоскоп"],["триба","треба"],["триба","труба"],["моряна","морена"],["бачок","бочок"],["бачок","басок"],["бачок","бычок"],["бачок","балок"],["норник","ночник"],["пачка","пайка"],["пачка","папка"],["пачка","палка"],["сласть","снасть"],["скрап","скрип"],["помета","помеха"],["нона","нома"],["нона","ноша"],["нона","нога"],["нона","нора"],["нона","нота"],["отрок","оброк"],["отрок","отток"],["сабо","сало"],["сабо","саго"],["черва","черта"],["гать","гарь"],["поделка","побелка"],["мосол","могол"],["лата","лафа"],["лата","ласа"],["лата","лама"],["лата","лава"],["лата","лада"],["лата","лажа"],["плакун","плавун"],["биение","бдение"],["солянка","солонка"],["солянка","склянка"],["солянка","солярка"],["рейтер","рейтар"],["рейтер","рейдер"],["турпан","турман"],["колючка","колюшка"],["повадка","помадка"],["повадка","посадка"],["обточка","обтачка"],["уголь","угорь"],["колено","колесо"],["ищейка","идейка"],["чилига","чиляга"],["кагал","канал"],["даба","дача"],["даба","дата"],["шторм","штурм"],["откат","обкат"],["вклепка","вылепка"],["делание","деление"],["моховик","маховик"],["шишка","шашка"],["ковшик","коврик"],["мафия","мания"],["мафия","магия"],["шапка","шашка"],["белуха","белуга"],["каша","кара"],["каша","кача"],["будра","будка"],["будра","бедра"],["будра","будда"],["репа","рема"],["репа","рапа"],["щеточка","щелочка"],["щеточка","щепочка"],["пират","пирит"],["сойка","сайка"],["сойка","сопка"],["сойка","соска"],["сойка","сотка"],["сойка","совка"],["кирха","кирка"],["кутание","катание"],["кутание","кусание"],["кутание","кушание"],["отрывок","обрывок"],["бабуля","бабуся"],["малик","мазик"],["малик","малек"],["лощение","лущение"],["корда","карда"],["корда","корма"],["корда","корка"],["сапа","сопа"],["сапа","саба"],["сапа","сага"],["сапа","сажа"],["паремия","паремья"],["перчик","персик"],["закат","закут"],["грешок","гренок"],["мазик","мазок"],["потесь","помесь"],["лежка","лерка"],["лежка","лепка"],["лежка","леска"],["капер","катер"],["капер","капор"],["подцвет","подсвет"],["банкрот","банкнот"],["забор","зажор"],["забор","запор"],["забор","замор"],["забор","задор"],["забор","зазор"],["бракер","брокер"],["крикет","крокет"],["слизняк","сливняк"],["печь","пень"],["вещь","весь"],["наклон","нуклон"],["рябость","робость"],["вывод","выход"],["вывод","взвод"],["зала","зола"],["куличок","кулачок"],["помет","повет"],["паюс","пасс"],["размыв","разрыв"],["каталка","катанка"],["косарь","кесарь"],["капсюль","капсель"],["вуаль","враль"],["гниение","гноение"],["народ","наряд"],["варка","ватка"],["мгла","мала"],["баян","буян"],["валек","валик"],["солесос","солерос"],["бурса","бутса"],["бурса","бурда"],["бурса","букса"],["опера","опора"],["подзол","подсол"],["подзол","подпол"],["руина","раина"],["суверен","соверен"],["босс","бокс"],["нищание","низание"],["коза","коса"],["коза","кода"],["коза","кожа"],["коза","кора"],["хром","храм"],["осинка","очинка"],["всхрап","всхрип"],["клок","клик"],["клок","клык"],["завал","запал"],["тенек","телек"],["кабель","капель"],["кабель","кобель"],["кабель","кафель"],["сало","село"],["сало","саго"],["сало","соло"],["рыкание","рыдание"],["свайка","свалка"],["свайка","стайка"],["свайка","сванка"],["свайка","спайка"],["барин","баран"],["барин","барон"],["барин","бадин"],["глот","грот"],["обсолка","обколка"],["недочет","недолет"],["стон","стан"],["стон","сгон"],["стон","стен"],["стон","слон"],["обжиг","отжиг"],["обжиг","обжог"],["разбой","развой"],["свивка","свинка"],["свивка","сливка"],["пони","пани"],["лира","липа"],["отпалка","отпайка"],["отпалка","отвалка"],["удилище","училище"],["парочка","папочка"],["прирост","пророст"],["мазь","марь"],["ампир","ампер"],["ранг","ринг"],["обделка","отделка"],["зажор","запор"],["зажор","замор"],["зажор","задор"],["зажор","зазор"],["селение","сечение"],["селение","соление"],["питер","патер"],["козляк","козлик"],["рожа","роща"],["рожа","рона"],["рожа","роза"],["рожа","роба"],["рожа","рота"],["братва","бритва"],["скоба","скопа"],["скоба","сдоба"],["сена","сема"],["сена","сера"],["сноска","сновка"],["чашка","чайка"],["чашка","чушка"],["чашка","чалка"],["чашка","чарка"],["веха","вежа"],["веха","вера"],["арба","арча"],["арба","арка"],["медонос","медосос"],["щипок","щиток"],["нанос","насос"],["магнат","магнит"],["ленник","лесник"],["ленник","ледник"],["ленник","ленчик"],["качка","кадка"],["качка","кичка"],["качка","камка"],["качка","каска"],["качка","кашка"],["качка","кучка"],["штабель","штапель"],["грушин","грузин"],["озерко","озерцо"],["птаха","плаха"],["чеглок","чоглок"],["обновка","обножка"],["водочка","водичка"],["стация","стадия"],["игрок","игрек"],["копь","конь"],["копь","корь"],["культ","кельт"],["культ","кольт"],["арфист","артист"],["сиделка","седелка"],["оттеска","обтеска"],["плица","птица"],["плица","плита"],["рубаха","рубака"],["стужа","ступа"],["ползок","полчок"],["пригрев","прогрев"],["спрос","сорос"],["лапник","латник"],["ссыпка","ссылка"],["поганка","пеганка"],["греча","греза"],["греча","грена"],["крейсер","крейцер"],["засадка","загадка"],["пафос","пифос"],["упор","узор"],["упор","укор"],["упор","утор"],["упор","убор"],["даль","дань"],["драма","драга"],["рапс","репс"],["наладка","насадка"],["сума","сура"],["сума","сема"],["сума","сука"],["сума","сома"],["сума","суша"],["гематит","гепатит"],["крат","крот"],["мерка","мекка"],["мерка","марка"],["полуда","посуда"],["палаван","параван"],["теист","текст"],["теист","твист"],["снежок","стежок"],["снежок","снеток"],["камфара","камфора"],["разница","розница"],["разница","ризница"],["челка","чалка"],["одежка","одежда"],["эжекция","эрекция"],["скак","смак"],["мошка","мошна"],["мошка","мотка"],["мошка","мушка"],["мытье","мятье"],["дорн","дерн"],["трение","тление"],["пена","пина"],["приплав","проплав"],["обидчик","ободчик"],["лунь","лань"],["лунь","лень"],["лунь","линь"],["ручка","рубка"],["ручка","речка"],["копилка","косилка"],["колер","ковер"],["балкон","баллон"],["сережка","середка"],["отсчет","отсвет"],["вещун","ведун"],["перевод","перерод"],["стопа","скопа"],["стопа","ступа"],["бакун","бакен"],["воробей","ворожей"],["станс","сеанс"],["слог","смог"],["казанка","казачка"],["казанка","казашка"],["казанка","катанка"],["плевра","плевна"],["копытце","корытце"],["ярка","явка"],["балык","балок"],["вица","вина"],["вица","вира"],["вица","виза"],["вица","вика"],["кивание","кидание"],["пани","пари"],["клевер","кливер"],["резина","репина"],["фирма","фурма"],["фирма","форма"],["фирма","ферма"],["мошна","мохна"],["богомил","богомол"],["машина","махина"],["машина","марина"],["поимка","поилка"],["тамга","тайга"],["счалка","свалка"]];
function getCouple(sameCouple) {
    if(sameCouple) {
        let rand = Math.floor(Math.random() * 2 );
        const word = couples[Math.floor(Math.random() * couples.length)][rand];
        return [
            word, word,
        ];
    }
    return couples[Math.floor(Math.random() * couples.length)];
}
function createFieldCouples(height, amount) {
    const field = [];
    const couplesPlaces = [];
    let length = height * 4;
    while (couplesPlaces.length < amount) {
        const randPlace = Math.floor(Math.random() * length);
        if (!couplesPlaces.includes(randPlace)) couplesPlaces.push(randPlace)
    }
    for(let i = 0; i < length; i++){
        if(couplesPlaces.includes(i)){
            field.push(getCouple(false));
        }else{
            field.push(getCouple(true));
        }
    }
    return {field, answers: couplesPlaces};
}
function coupleGame(OriginalComponent) {
    return (props) => {
        return (
            <OriginalComponent
                {...props}
                mainClass={'couple'}
                createField={createFieldCouples}
                findLetter={false}
            />
        )
    }

}

export default coupleGame(FindSomethingGameWrapper);

