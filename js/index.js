function myFUN1(arg) {
    var container = document.getElementsByClassName('col_7_col_5');
    if (arg === 0) {
        container[0].innerHTML = `
                            <div class="row text_block1 ">
                            <div class="col-7">
                                <div class="col_7_div1">
                                    <h3 id="col_7_div1_h3">Основные&nbsp;настройки</h3>
                                    <div class="d-inline-flex">
                                        <p>Сопоставление&nbsp;кодировки&nbsp;соединения</p>
                                        <select class="form-control form-control-sm">
                                            <option>Small select</option>
                                            <option>Small select</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex flex-column col_7_div2">
                                    <div>
                                        <h3 id="col_7_div2_h3">Настройки&nbsp;внешнего&nbsp;вида</h3>
                                        <div class="d-inline-flex">
                                            <p>Язык&nbsp;Language</p>
                                            <select class="form-control form-control-sm">
                                                <option>Russian</option>
                                                <option>English</option>
                                                <option>Armenian</option>
                                                <option>Georgian</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-inline-flex">
                                            <p>Тема:</p>
                                            <select class="form-control form-control-sm">
                                                <option>pmahomee</option>
                                                <option>original</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-inline-flex">
                                            <p>Размер&nbsp;шрифта: </p>
                                            <select class="form-control form-control-sm">
                                                <option>100%</option>
                                                <option>80%</option>
                                                <option>60%</option>
                                                <option>40%</option>
                                                <option>20%</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-link">Дополнительные&nbsp;настройки
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="col_5_div1">
                                    <h3 id="col_5_div1_h3">Сервер&nbsp;баз&nbsp;данных</h3>
                                    <div>
                                        <ul class="col_5_ul">
                                            <li>Сервер: 127.0.0.1 via TCP/IP</li>
                                            <li>Тип сервера: MariaDB</li>
                                            <li>Соединение сервера: SSL не используетс</li>
                                            <li>Версия сервера: 10.4.6-MariaDB - mariadb.org binary distribution</li>
                                            <li>Версия протокола: 10</li>
                                            <li>Пользователь: root@localhost</li>
                                            <li>Кодировка сервера: cp1252 West European (latin1)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col_5_div2">
                                    <h3 id="col_5_div2_h3">Веб&nbsp;сервер</h3>
                                    <div>
                                        <ul class="col_5_ul">
                                            <li>Apache/2.4.41 (Win64) OpenSSL/1.1.1c PHP/7.3.9</li>
                                            <li>Версия клиента базы данных: libmysql - mysqlnd 5.0.12-dev - 20150407 -
                                                $Id: 7cc7cc96e675f6d72e5cf0f267f48e167c2abb23 $
                                            </li>
                                            <li>PHP расширение: mysqliДокументация curlДокументация
                                                mbstringДокументация
                                            </li>
                                            <li>Версия PHP: 7.3.9</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col_5_div3">
                                    <h3 id="col_5_div3_h3">phpMyAdmin</h3>
                                    <div>
                                        <ul class="col_5_ul">
                                            <li>Информация о версии: 4.9.0.1, последняя стабильная версия: 4.9.2</li>
                                            <li>
                                                <button type="button" class="btn btn-link col_5_ul_li_button">
                                                    Документация
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="btn btn-link col_5_ul_li_button">
                                                    Официальная&nbsp;страница&nbsp;phpMyAdmin
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="btn btn-link col_5_ul_li_button">
                                                    Пожертвовать
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="btn btn-link col_5_ul_li_button">Получить
                                                    помощь
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="btn btn-link col_5_ul_li_button">Список
                                                    изменений
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="btn btn-link col_5_ul_li_button">Лицензия
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


        `
    }else{

        container[0].innerHTML="";
        for (var ob in myObj){

            var tit = document.createElement("h3");
            tit.innerText = myObj[ob].name;
            container[0].appendChild(tit);

            var tables = document.createElement("table");
            tables.setAttribute("style", "width:100%");
            container[0].appendChild(tables);

            var trone= document.createElement('tr');
            tables.appendChild(trone);

            var th =document.createElement('th');
            th.innerHTML=myObj[ob].title;
            trone.appendChild(th);

            var trtwo= document.createElement('tr');
            tables.appendChild(trtwo);

            var tdone = document.createElement('td');
            td.innerHTML=myObj[ob].tabelRow1;
            trtwo.appendChild(td);

            var tdtwo = document.createElement('td');
            td.innerHTML=myObj[ob].tabelRow2;
            trtwo.appendChild(td);

            var tdthree = document.createElement('td');
            td.innerHTML=myObj[ob].tabelRow3;
            trtwo.appendChild(td);

        }
    }

}

var myObj = [
    {
        name: 'database1',
        title:'title1',
        tabelRow1: 'info for database1 tableRow1',
        tabelRow2: 'info for database1 tableRow2',
        tabelRow3: 'info for database1 tableRow3'
    },
    // {
    //     name: 'database2',
    //     title:'title2',
    //     tabelRow1: 'info for database2 tableRow1',
    //     tabelRow2: 'info for database2 tableRow2',
    //     tabelRow3: 'info for database2 tableRow3'
    // },
    // {
    //     name: 'database3',
    //     title:'title3',
    //     tabelRow1: 'info for database3 tableRow1',
    //     tabelRow2: 'info for database3 tableRow2',
    //     tabelRow3: 'info for database3 tableRow3'
    // },
    // {
    //     name: 'database4',
    //     title:'title4',
    //     tabelRow1: 'info for database4 tableRow1',
    //     tabelRow2: 'info for database4 tableRow2',
    //     tabelRow3: 'info for database4 tableRow3'
    // },
    // {
    //     name: 'database5',
    //     title:'title5',
    //     tabelRow1: 'info for database5 tableRow1',
    //     tabelRow2: 'info for database5 tableRow2',
    //     tabelRow3: 'info for database5 tableRow3'
    // }
];

var tbId = document.getElementsByClassName("row text_block1");

// function tableCreate() {
//
//     var tit = document.createElement("h1");
//     tit.innerHTML = 'dfhsh';
//     tbId.appendChild(tit);
//
//     var tables = document.createElement("table");
//     tables.setAttribute("style", "width:100%");
//     tbId.appendChild(tables);
//
//     var tr = document.createElement("tr");
//     tr.appendChild(tables);
//
//     var td = document.createElement('td');
//     td.innerHTML = 'sdfhsdfhsdh';
//     tr.appendChild(td);
// }

var arr = ["Базы данных", "SQL", "Состояние", "Учетные записи пользователей", "Экспорт", "Импорт", "Настройки", "Репликация", "Переменные", "Кодировки", "Тип таблиц", "Расширения"];
var parent = document.getElementById('nav_li');

for (var i in arr) {
    var li = document.createElement('li');
    li.setAttribute('class', 'nav-item');
    parent.appendChild(li);

    var but = document.createElement('button');
    but.setAttribute('class', 'btn btn-outline-dark btn_style');
    but.setAttribute('type', 'button');
    but.innerText = arr[i];
    li.appendChild(but);

}

// var Dtb = ["database1", "database2", "database3", "database4", "database5"];
var Dtb =[];
for (z in myObj){
    Dtb.push(myObj[z].name);
}
var par = document.getElementById("col_2_div");

for (var i in Dtb) {
    var div = document.createElement("div");
    par.appendChild(div);

    var button1 = document.createElement("button");
    button1.setAttribute('type', 'button');
    button1.setAttribute('class', 'btn btn-link fa fa-plus icon_cl test');
    button1.setAttribute('data-toggle', 'collapse');
    button1.setAttribute('data-target', '#demo' + i);
    button1.setAttribute('id', 'favBtn' + (+i + 1));
    div.appendChild(button1);

    var icon = document.createElement("i");
    icon.setAttribute('id', 'favIcon' + (+i + 1));
    icon.setAttribute('class', 'test');
    button1.appendChild(icon);

    var button2 = document.createElement("button");
    button2.setAttribute('type', 'button');
    button2.setAttribute('class', 'btn btn-link');
    button2.setAttribute('onclick', 'myFUN1(' + (+i + 1) + ')');
    button2.innerHTML = Dtb[i];
    button1.appendChild(button2);

    var div1 = document.createElement('div');
    div1.setAttribute('id', `demo${i}`);
    div1.setAttribute('class', "collapse clap");
    par.appendChild(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "accordion");
    div2.setAttribute("id", "accordion" + i);
    div1.appendChild(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "accordion-group");
    div2.appendChild(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class", "accordion-heading");
    div3.appendChild(div4);

    var button3 = document.createElement("button");
    button3.setAttribute("class", "accordion-toggle fa fa-plus icon_cl btn btn-link test1 collapsed");
    button3.setAttribute("data-toggle", "collapse");
    button3.setAttribute("data-parent", "#accordion" + (+i));
    button3.setAttribute("href", "#collapseOneA" + (+i + 1));
    button3.setAttribute("id", 'favIcon' + (+i + 1));
    button3.setAttribute("aria-expanded", 'false');
    button3.innerHTML = "Text" + (+i + 1);
    div4.appendChild(button3);

    var div5 = document.createElement("div");
    div5.setAttribute("id", "collapseOneA" + (+i + 1));
    div5.setAttribute("class", "accordion-body collapse");
    div3.appendChild(div5);

    var div6 = document.createElement('div');
    div6.setAttribute('class', 'accordion-inner');
    div6.innerHTML = ` <p>Anim pariatur cliche... Anim pariatur cliche... Anim pariatur cliche... Anim pariatur cliche... Anim pariatur cliche... </p>`;
    div5.appendChild(div6);
}

$(document).on('click', '.test', function () {
    $(this).toggleClass('fa-minus');

});
$(document).on('click', '.test1', function () {
    $(this).toggleClass('fa-minus');
});


