//1
document.getElementsByTagName("button")[0].onclick = () => {
    let text_1 = document.getElementsByTagName("input")[0].value;
    if (text_1 != "") {
        document.getElementsByTagName("h1")[0].textContent = text_1;
    }
    else {
        alert("Введите что-нибудь!");
    }
}
//2
document.getElementsByTagName("button")[1].onclick = () => {
    let znach_1 = document.getElementsByTagName("input")[1].value;
    let znach_2 = document.getElementsByTagName("input")[2].value;
    if (znach_1 != "" && znach_2 != "") {
        if (znach_1 < znach_2) {
            let answ = znach_1 - znach_2;
            document.getElementsByTagName("h1")[1].textContent = answ;
        }
        else {
            let answ = Number(znach_2) + Number(znach_1);
            document.getElementsByTagName("h1")[1].textContent = answ;
        }
    }
    else {
        alert("Введите что-нибудь!");
    }
}
//3
document.getElementsByTagName("button")[2].onclick = () =>{
    let input = document.getElementsByClassName("field");
    
    if(input[0].value !="" && input[1].value !="" && input[2].value !=""){
        let calc = new FormData();
        calc.append('num_1', input[0].value);
        calc.append('sym', input[1].value);
        calc.append('num_2', input[2].value);
        
        fetch("http://hw/scr/ajax_quest.php",{
            method: 'POST',
            body: calc
        })
        .then(responce => responce.json())
        .then(obj => {
            console.log(obj);  

        document.getElementById("kostili").textContent = obj; //Вообще не считаю это костылём
    })                                                  //Работает жеж
}}                                                  //Хоть элемент и создан заранее
//4
document.getElementsByTagName("button")[3].onclick = () =>{ //Крч, хз, пробовал по-другому
    let vvod = document.getElementsByClassName("pole");  //И чёт не работало
                                                        //Мб стоило просто в id кинуть
    if(vvod[0].value !="" && vvod[1].value !=""){
        let formauth = new FormData();
        formauth.append('log', vvod[0].value);
        formauth.append('pas', vvod[1].value);

        fetch ("http://hw/scr/ajax_quest_1.php",{
            method: 'POST',
            body:formauth
        })
        .then(otvet => otvet.json())
        .then(otvetka => {
            console.log(otvetka);
        })    

    }
}