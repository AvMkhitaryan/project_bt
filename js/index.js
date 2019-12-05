// function fav(argumnet) {
//     var icon = document.getElementById("favIcon"+ (+i + 1));
//     console.log(icon);
//     if (argument === i) {
//         if (icon.classList.contains("fa-minus")) {
//             icon.classList.remove("fa-minus");
//             icon.classList.add("fa-plus");
//         } else {
//             icon.classList.remove("fa-plus");
//             icon.classList.add("fa-minus");
//         }
//     }
// }

// function fav(argument) {
//     if (argument === 1) {
        // let icon_plus = document.getElementsByTagName('i')[0];
        // let btn = document.getElementById('favBtn1');
        // btn.setAttribute('class', 'btn btn-link fa fa-minus');
    // }
// }


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
    }
    if (arg === 1) {
        container[0].innerHTML = `
                             <div class="row text_none1">
                            <h1>Table 1</h1>
                            <table style="width:100%">
                                <tr>
                                    <th>Fir1stname</th>
                                    <th>Las1tname</th>
                                    <th>A1ge</th>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>
                                    <td>501</td>
                                </tr>
                                <tr>
                                    <td>Eve</td>
                                    <td>Ja1ckson</td>
                                    <td>914</td>
                                </tr>
                            </table>
                        </div>

        `
    }
    if (arg === 2) {
        container[0].innerHTML = `
                             <div class="row text_none2">
                            <h1>Table 2</h1>
                            <table style="width:100%">
                                <tr>
                                    <th>Fir2stname</th>
                                    <th>Las2tname</th>
                                    <th>Age</th>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smi2th</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>E2ve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                </tr>
                            </table>
                        </div>

        `
    }
    if (arg === 3) {
        container[0].innerHTML = `
                            <div class="row text_none2">
                            <h1>Table 3</h1>
                            <table style="width:100%">
                                <tr>
                                    <th>Fir2stname</th>
                                    <th>Las2tname</th>
                                    <th>Age</th>
                                </tr>
                                <tr>
                                    <td>Jildtyjl</td>
                                    <td>Smi2th</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>E2ve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                </tr>
                            </table>
                        </div>

        `
    }
    if (arg === 4) {
        container[0].innerHTML = `
                            <div class="row text_none2">
                            <h1>Table 4</h1>
                            <table style="width:100%">
                                <tr>
                                    <th>Fir2stname</th>
                                    <th>Lasgfh2tname</th>
                                    <th>Age</th>
                                </tr>
                                <tr>
                                    <td>Jill</td>
                                    <td>Smigh2th</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>E2ve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                </tr>
                            </table>
                        </div>

        `
    }
    if (arg === 5) {
        container[0].innerHTML = `
                            <div class="row text_none2">
                            <h1>Table 5</h1>
                            <table style="width:100%">
                                <tr>
                                    <th>Fir255stname</th>
                                    <th>Las5gfh2tname</th>
                                    <th>Ag55e</th>
                                </tr>
                                <tr>
                                    <td>Ji55ll</td>
                                    <td>Smi55gh2th</td>
                                    <td>5055</td>
                                </tr>
                                <tr>
                                    <td>E552ve</td>
                                    <td>Ja55ckson</td>
                                    <td>9554</td>
                                </tr>
                            </table>
                        </div>

        `
    }

}


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

var Dtb = ["database1", "database2", "database3", "database4", "database5"];
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
    // button3.setAttribute("onclick", "fav(" + (+i + 1) + ")");
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
  //   par.innerHTML+=`<div class="accordion" id="accordionExample${i}">
  //       <div class="card">
  //       <div class="card-header" id="headingOne${i}">
  //       <h5 class="mb-0">
  //       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne${i}" aria-expanded="true" aria-controls="collapseOne${i}">
  //       Collapsible Group Item #${i}
  //   </button>
  //   </h5>
  //   </div>
  //
  //   <div id="collapseOne${i}" class="collapse" aria-labelledby="headingOne${i}" data-parent="#accordionExample${i}">
  //       <div class="card-body">
  //               <div class="card">
  //   <div class="card-header" id="headingTwo${i}">
  //     <h5 class="mb-0">
  //       <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo${i}" aria-expanded="false" aria-controls="collapseTwo${i}">
  //         Collapsible Group Item Tow#${i}
  //       </button>
  //     </h5>
  //   </div>
  //   <div id="collapseTwo${i}" class="collapse" aria-labelledby="headingTwo${i}" data-parent="#collapseOne${i}">
  //     <div class="card-body">
  //       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
  //     </div>
  //   </div>
  // </div>
  //       </div>
  //   </div>
  //   </div>`


}
$(document).on('click', '.test', function () {
    $(this).toggleClass('fa-minus');
});
$(document).on('click', '.test1', function () {
    $(this).toggleClass('fa-minus');
});