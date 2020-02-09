const progress_cats = document.getElementById('pr_cat')
const progress_dogs = document.getElementById('pr_dog')
const progress_parrot = document.getElementById('pr_par')

const ClickCat = document.getElementById('but1')
const ClickDog = document.getElementById('but2')
const ClickPar = document.getElementById('but3')


ClickCat.onclick =() =>{
	document.getElementById('section_bar').style.display='block';
	document.getElementById('allbut').style.display='none';
	$("#pr_cat").removeClass('progress-bar progress-bar-striped bg-info')
	$("#pr_cat").addClass('progress-bar progress-bar-striped bg-warning progress-bar-animated');
	$("#div1").html('<h3>Вы проголосавали за кошек!</h3><img src="./img/cat.svg" style="max-height:5vh; max-width:5vh;">');

}
ClickDog.onclick =() =>{
	document.getElementById('section_bar').style.display='block';
	document.getElementById('allbut').style.display='none';
	$("#pr_dog").removeClass('progress-bar progress-bar-striped bg-info')
	$("#pr_dog").addClass('progress-bar progress-bar-striped bg-warning progress-bar-animated');
	$("#div1").html('<h3>Вы проголосавали за собак!</h3><img src="./img/dog.svg" style="max-height:5vh; max-width:5vh;">');
}
ClickPar.onclick =() =>{
	document.getElementById('section_bar').style.display='block';
	document.getElementById('allbut').style.display='none';
	$("#pr_par").removeClass('progress-bar progress-bar-striped bg-info')
	$("#pr_par").addClass('progress-bar progress-bar-striped bg-warning progress-bar-animated');
	$("#div1").html('<h3>Вы проголосавали за попугаев!</h3><img src="./img/parrot.svg" style="max-height:5vh; max-width:5vh;">');
}

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
const ES = new EventSource(url, header)


ES.onerror = error => {
    ES.readyState ? progress_cats.textContent = "Some error" : null;
}



ES.onmessage = message => {
   	progress_cats.style.cssText = `width: ${(message.data[9]+message.data[10]+message.data[11]+message.data[12])/20}%;`
    progress_cats.textContent = `${message.data[9]+message.data[10]+message.data[11]+message.data[12]}`

   	progress_dogs.style.cssText = `width: ${(message.data[40]+message.data[41]+message.data[42]+message.data[43])/20}%;`
    progress_dogs.textContent = `${message.data[40]+message.data[41]+message.data[42]+message.data[43]}`

   	progress_parrot.style.cssText = `width: ${(message.data[26]+message.data[27]+message.data[28]+message.data[29])/20}%;`
    progress_parrot.textContent = `${message.data[26]+message.data[27]+message.data[28]+message.data[29]}`
}


function ajax_cat() { //Ajax отправка формы
	var msg = $("#form").serialize();
	$.ajax({
		type: "POST",
		url: "https://sf-pyw.mosyag.in/sse/vote/cats",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}

function ajax_dog() { //Ajax отправка формы
	var msg = $("#form").serialize();
	$.ajax({
		type: "POST",
		url: "https://sf-pyw.mosyag.in/sse/vote/dogs",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}

function ajax_par() { //Ajax отправка формы
	var msg = $("#form").serialize();
	$.ajax({
		type: "POST",
		url: "https://sf-pyw.mosyag.in/sse/vote/parrots",
		data: msg,
		success: function(data) {
			$("#results").html(data);
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}
