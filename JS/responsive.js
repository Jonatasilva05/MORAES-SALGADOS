const mainNone = document.getElementById('main');

/* Ação de eventos sobre o botão menu da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
openMenu.addEventListener('click', () => {

	/* Sobrepõe a propriedade display: none aplicada no
	   CSS por display: flex que o torna visível. */ 
	menu.style.display = "flex"
	mainNone.style.display = "none"

	/* Captura o tamanho do menu nav e aplica na posição. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Após 10 milésimos de segundo, adiciona o atributo style, */
	/* e adiciona as propriedades CSS.*/
	setTimeout(()=> {
		/* Faz o menu nav aparecer na velocidade em que foi
		   determinado na propriedade transition no CSS.*/
		menu.style.opacity = '1'

		/* Move o menu nav para a posição 0 a direita. Utiliza 
		   também a velocidade definida, na propriedade transition 
		   no CSS para realizar o movimento mais suave.*/
		menu.style.right = "0"

		/* Oculta o botão que torna visível o elemento nav.*/
		openMenu.style.display = 'none'
	}, 10);
})

/* Ação de eventos sobre o botão X da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
closeMenu.addEventListener('click', () => {

	/* Faz o menu nav desaparecer na velocidade em que foi
	   determinado na propriedade transition no CSS. */
	menu.style.opacity = '0'
	mainNone.style.display = "flex"

	/* Captura o tamanho do menu nav e aplica na posição. */
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	/* Torna visível o botão que apresenta o menu nav. */
	/* openMenu.style.display = 'block'*/
	
	/* Após 200 milésimos de 1 segundo, remove o atributo style. */
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})


/*FAZ O MAIN SE TORNAR ACTIVE ASSIM ATIVANDO A RESPONSIVIDADE DO SITE COM O FRONT ORIGINAL FEITO A MÃO O SEM EFEITO TRANSLATIVO*/
const main = document.querySelector('#main');

window.addEventListener('resize', () => {
	if(main.offsetWidth <= 1000){
		main.classList.add('active');
	}
	else{
		main.classList.remove('active');
	}
})