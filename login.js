

function login(callback)
{
    var user=document.getElementById('username');
    var pass=document.getElementById('password');   
    callback(user,pass);
}

function validate(u,p)
{
    if (u.value=="admin" && p.value==12345)
    {
        window.location.replace("main.html");
    }
}



