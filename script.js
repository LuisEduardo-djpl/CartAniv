function start() 
{
    var turn = document.getElementById("capa").style;
    
    turn.opacity = "1";
    turn.transformOrigin = "0";
    
}

function but()
{
    var turn = document.getElementById("capa").style;

    if ( turn.opacity == "1")
    {
        turn.opacity = "0";
        turn.transform = "rotateY(70deg)";
    }
    else
    {
        turn.opacity = "1";
        turn.transform = "rotateY(0deg)";
    }
}
