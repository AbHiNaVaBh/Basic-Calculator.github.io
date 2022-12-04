function button_click(val)
{
    console.log(val)
    document.getElementById("screen").value+=val
}
function cscreen()
{
    document.getElementById("screen").value=""
}
function equal()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}