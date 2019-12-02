function fav() {
    var icon = document.getElementById("favIcon");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav1() {
    var icon = document.getElementById("favIcon1");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav2() {
    var icon = document.getElementById("favIcon2");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav3() {
    var icon = document.getElementById("favIcon3");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav11() {
    var icon = document.getElementById("favIcon11");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav22() {
    var icon = document.getElementById("favIcon22");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav33() {
    var icon = document.getElementById("favIcon33");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}

function fav44() {
    var icon = document.getElementById("favIcon44");
    if (icon.classList.contains("fa-minus")) {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
    } else {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}


function MyFUN1(arg) {
    var container = document.getElementsByClassName('col_7_col_5')
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
    // var x = document.querySelector(".text_block1");
    // var z = document.querySelector(".text_none1");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    //     z.style.display = "none";
    // } else {
    //     x.style.display = "none";
    //     z.style.display = "block";
    // }
}

// function MyFUN2() {
//     var x = document.querySelector(".text_block1");
//     var z = document.querySelector(".text_none2");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         z.style.display = "none";
//     } else {
//         x.style.display = "none";
//         z.style.display = "block";
//     }
// }
//
// function MyFUN3() {
//     var x = document.querySelector(".text_block1");
//     var z = document.querySelector(".text_none3");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         z.style.display = "none";
//     } else {
//         x.style.display = "none";
//         z.style.display = "block";
//     }
// }
// function MyFUN4() {
//     var x = document.querySelector(".text_block1");
//     var z = document.querySelector(".text_none4");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         z.style.display = "none";
//     } else {
//         x.style.display = "none";
//         z.style.display = "block";
//     }
// }



