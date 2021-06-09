$(document).ready(function () {
    
    var pril = ["Чудесная", "Милая", "Классненькая", "Потрясающая", "Удивительная", "Невероятно Красивая", "Самая Нежная", "Наинешнейшая", "Самая Красивая", "Наикотяшненькая", "Котяшная", "Самая Мягонькая", "Теплая и Уютненькая", "Кисинштейновая"];
    var such = ["Кисонька", "Лапонька", "Лапочка", "Лапуля", "Лисичка", "Мява", "Мявушка", "Котявушка", "Зааааюшка", "Настюшенька", "Настюшкинс", "Солншыка", "Рыжуля", "Кисуля", "Лапенчао", "Лапстудей", ];
    var s = ["С Завораживающей Улыбкой", "С Суперскими Веснушечками", "Со Стройными Ножками", "С Мягонькими Лапками", "С Чувственными Губками", "Со Светлой Головушкой", "С Вкуснейшими Бутербродичами", "С Мягонькими Щёчками", "С Прекрасными Глазками" ];

	<!-- Для кнопки-->
	$('[data-toggle="popover"]').popover({ trigger: "hover" });

	$('#button_Go').click(function () {
		let error = $('#error'),//получаем блок для вывода ошибок
			success = $('#success');//получаем блок для вывода успешного результата
		error.hide();//скрываем блок с ошибкой
		success.hide();//скрываем блок с успешным результатом
		let randomFucking = [pril[Math.floor(Math.random()*pril.length)],  such[Math.floor(Math.random()*such.length)], s[Math.floor(Math.random()*s.length)]+ "!!!"].join(" "),//генерируем комбинацию
		message = `Ты <br>${randomFucking}`;//составляем сообщение
				success.html(message);//подставляем полученное сообщение в блок успеха
				success.fadeIn(300);//показываем блок успеха
			
			});
		

	});

// let name = document.querySelector('#button_Go');
// name.addEventListener('click', () => {
// 	let randomIndex = Math.floor(Math.random() * 14);
// 	document.querySelector('#div').innerHTML = answer[randomIndex];
// })

