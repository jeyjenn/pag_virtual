const boton = document.querySelector('.boton');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.boton span')

boton.addEventListener('click',()=>{
    
    enlaces.classList.toggle('activado');
    barras.forEach(child =>{child.classList.toggle('animado')})
 
});


const $form =document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event) {
    event.preventDefault()
     const form = new FormData(this)
     const response = await fetch(this.action, {
         method: this.method,
         body: form,
         headers: {
            'Accept': 'application/json'
         }
     })

     if(response.ok){
         this.reset()
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'gracias por contactarme',
            showConfirmButton: false,
            timer: 1500
          })
          
     }
    
}



/* modal con mensaje de whatsapp*/
const enviar = document.querySelector('#enviar_whatsap');
enviar.addEventListener('click', enviarMen)
function enviarMen() {
    var asunto = document.querySelector('.asunto').value
    var url1 = "https://api.whatsapp.com/send?phone=593996621383&text=" + asunto +"%0A";
    window.open(url1);
    
}