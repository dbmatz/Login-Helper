document.getElementById('btm-login').addEventListener('click', function(e){
    e.preventDefault();
    alert("Logado");
})

function showPass(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fielPass = document.getElementById('field-password');

    if(eye.style.display == 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fielPass.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fielPass.type = 'password';
    }
}