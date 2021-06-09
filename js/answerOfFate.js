$(document).ready(function () {
	answer = [
		'Пойдешь домой пораньше!',
		'Вкусно поешь!',
		'Хорошо погуляешь!',
		'Тебе бежать за пивасом!',
		'Любовь-Морковь!',
		'Улетит шляпа!',
		'Купишь новую шляпу!',
		'Проживешь подольше!',
		'Кончатся патроны!',
		'Знатно потусишь!',
		'Трудно сказать',
		'зависит от того хорёк ли ты!',
		'Приготовишь жареные сосиски!',
		'Еще раз, не понял!',
		'Чо'
	];
	<!-- Для кнопки-->
	$('[data-toggle="popover"]').popover({ trigger: "hover" });

	$('#button_Go').click(function () {
		let date = $('#date').val(),//получаем значение из инпута даты
			name = $('#name').val(),//получаем значение из инпута имени
			error = $('#error'),//получаем блок для вывода ошибок
			success = $('#success');//получаем блок для вывода успешного результата
		error.hide();//скрываем блок с ошибкой
		success.hide();//скрываем блок с успешным результатом
		if(date) {//проверяем заполнина ли дата
			if(name) {//проверяем заполнино ли имя
				let randomIndex = Math.floor(Math.random() * 14),//генерируем рандомное число
					message = 'Примного уважаемый '+name+' Ваше гадание на '+date+' готово<br>'+answer[randomIndex];//составляем сообщение
				success.html(message);//подставляем полученное сообщение в блок успеха
				success.fadeIn(300);//показываем блок успеха
			} else {
				error.text('Заполните свое имя');//посдтавляем текст с ошибкой в блок ошибок
				error.fadeIn(300);//показываем блок ошибок
			}
		} else {
			error.text('Выберите дату');
			error.fadeIn(300);
		}

	});
});

// let name = document.querySelector('#button_Go');
// name.addEventListener('click', () => {
// 	let randomIndex = Math.floor(Math.random() * 14);
// 	document.querySelector('#div').innerHTML = answer[randomIndex];
// })