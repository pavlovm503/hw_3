supSolyanka()
function supSolyanka(){
  alert("привет сегодня мы приготовим солянку");
  alert("давай пройдёмся по рецепту");
  asq("сколько нужно мяса (450 грамм)",450);
  asq("сколько нужно мясных изделий(300 грамм)",300);
  asq("растительного масла нужно (2 ст.ложки)",2);
  ors("чеснока нам нужно (2-4 зубчика)",2,4);
  asq("луквовиц нам нужно (1 шт)",1);
  asq("томатной пасты (1 ст.ложка)",1);
  ors("маринованых огурцов (2-4 шт)",2,4);
  alert("а также нам понадобится по вкусу : маслины, соль, перец, специи, зелень, лимон и сметана");
  gotovka ();
}
function gotovka (){
  omp("будем ставить кастрюлю?");
  omp("зальём водой кастрюлю?");
  omp("добавим мясо?");
  omp("добавим лавровый лист?");
  omp("добавим овощи?");
  asq("сколько варить будем? (2 часа)");
  omp("мясо сварилось?");
  alert("достанте его");
  alert("остудите его");
  alert("измельчите");
  alert("процедите буль и снова отправте на огонь");
  alert("выложите туда нарезное мясо");
  omp("отправте туда нарезаное мясо");
  omp("нарежте огурец");
  alert("полижите агурци в бульён");
  omp("варите до кипения на медленом огне");
  omp("очистите лук и чеснок");
  omp("положите на сковородку и обжарте");
  omp("добавить соль перец специи по вкусу?");
  alert("томите соус минут 5?");
  omp("положите в бульён");
  alert("Выключите огонь, накройте кастрюлю крышкой и оставьте на полчасика, чтобы солянка настоялась. Подавайте к столу горячей, дополнив лимоном и сметаной по желанию. Приятного аппетита!");
}

function asq (ask ,nums){
  let numb;
  do{
	numb = prompt(ask);
  }while (numb != nums && nums);
}

function ors (ask , minNumb , maxNumb){
	let ass = prompt(ask);
	while (ass < minNumb || ass > maxNumb)  {  
		ass = prompt(ask);
	}
}

function omp (ask){
	let ass ;
	do{
		ass = confirm(ask);
	}while (ass != true);
}
