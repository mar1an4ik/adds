import React from "react"

let initialState = {
    posts: [
        {title: "Продавець-консультант мобільних телефонів і аксесуарів",
            description: "Торгівельна мережа «Смартшоп»  запрошує" +
                " на роботу продавця-консультанта для роздрібного продажу мобільних телефонів та аксесуарів в м.Львів. Компанія гарантує:\n" +
                "\n" +
                "Офіційне працевлаштування з 1-го дня (повний соціальний пакет).\n" +
                "Оплачуване стажування.\n" +
                "Стабільний рівень мінімальної заробітної плати 7000 грн. (за 21 робочий день).\n" +
                "Середній рівень зарплати співробітника 14000 — 16000 грн.\n" +
                "Максимальний рівень заробітної плати від 18000 грн.\n" +
                "Своєчасну виплату заробітої плати 2 рази на місяць.\n" +
                "Індивідуальний графік: 5/2.\n" +
                "Розвиток і навчання за рахунок компанії.\n" +
                "Широкі можливості для професійного та кар'єрного росту.",
            date: "01.08.2020 12:59",
            id:1,},

        {title: "Консультант в тютюнову компанію",
            description: "«Бритіш Американ Тобакко Україна» входить до складу Групи компаній «Бритіш Американ Тобакко» — провідної міжнародної тютюнової компанії, продукція якої продається у більш ніж 200 країнах. У портфелі компанії такі відомі в Україні та світі марки як Kent, Rothmans, Vogue, Pall Mall, Lucky Strike, «Прилуки Особливі».\n" +
                "\n" +
                "Запрошуємо молодих, енергійних та комунікабельних людей що мають прагнення працювати на результат до співпраці в якості КОНСУЛЬТАНТА у м. Львів та інших у Львівській обл.\n" +
                "\n" +
                "Основні обов’язки:\n" +
                "\n" +
                "Знати асортимент продукції та вміти привернути увагу споживачів.\n" +
                "Надавати споживачам продукції інформацію та консультації.\n" +
                "Вміти правильно презентувати товар, звертаючи увагу на особливості товару та переваги.\n" +
                "Володіти інформацією щодо новинок продукції на ринку, на якому спеціалізується компанія.",
            date: "01.08.2020 12:49",
            id:2,},
        {title: "Фахівець з обслуговування торгівлі, мерчендайзер з власним авто",
            description: "Партнер тютюнової компанії «Філіп Морріс Сейлз енд Дистриб’юшн», афілійованої компанії «Філіп Морріс Інтернешнл» в Україні, запрошує до співпраці в якості Фахівеця з обслуговування торгівлі (мерчендайзера з власним авто).\n" +
                "\n" +
                "ПОПЕРЕДНІЙ ДОСВІД РОБОТИ У СФЕРІ ПРОДАЖІВ НЕ ОБОВ’ЯЗКОВИЙ!\n" +
                "\n" +
                "Партнер тютюнової компанії «Філіп Морріс Сейлз енд Дистриб’юшн» шукає кандидата, який/яка хоче отримати досвід у сфері обслуговування торгівлі, прагне розвитку, цікавих та складних завдань. Якщо Вам подобається навчатися на практиці" +
                " та спілкуватися з людьми, якщо Ви орієнтовані на результат, то ця пропозиція саме для Вас.",
            date: "01.08.2020 13:44",
            id:3,},
        {title: "Мерчендайзер",
            description: "Представництво великої іноземної компанії, лідер в своїй області на ринку Східної Європи, запрошує на постійну роботу Мерчендайзера у м. Львів та область.\n" +
                "\n" +
                "Робота передбачається в магазинах Епіцентр, Нова Лінія, локальних мережах, роздрібних будівельних магазинах (непродовольча група товарів — малярний ручний інструмент).\n" +
                "\n" +
                "Вимоги:\n" +
                "\n" +
                "Бажаний д/р промоутером, мерчендайзером;\n" +
                "Креативність;\n" +
                "Відповідальність, старанність;\n" +
                "готовність до відряджень по області.",
            date: "01.08.2020 13:44",
            id:4,},
        {title: "Менеджер з активних продажів",
            description: "«ВіЯр» торгівельно — виробнича компанія, що понад 18 років створює якісний український продукт. Запрошуємо стати частиною команди та пройти конкурс на заміщення посади Менеджер з активних продажів\n" +
                "\n" +
                "Обов’язки:\n" +
                "\n" +
                "продаж товарів та послуг компанії (меблева фурнітура, плитні матеріали для виробництва меблевих комплектуючих);\n" +
                "утворення та утримання клієнтської бази;\n" +
                "відрядждення з метою пошуку і залучення нових клієнтів і підтримання відносин з існуючими (обов«язкова вимоги — водійські права і досвід водіння авто) ;\n" +
                "розробка пропозицій, що сприяють збільшенню продажів по закріпленим клієнтам, підготовка та просування акцій;\n" +
                "залучення, утримання та консультація клієнтів;\n" +
                "проведення телефонних переговорів;\n" +
                "ведення клієнтів та їх замовлень.",
            date: "01.08.2020 13:44",
            id:5,},

                ],
    number:6,
    title:"",
    };


const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addPost": {
            let statecopy={...state};
           statecopy.posts=[...state.posts]
            let newObj={
               title:action.title,
            description:action.description,
            date:action.date,
                id:state.number,
           }
           statecopy.number++;
           statecopy.posts.push(newObj)
            return statecopy;
        }
        case "deletePost":{
            let statecopy={...state};
            statecopy.posts=[...state.posts];

            const index = statecopy.posts.findIndex(n => n.id === action.id);
            if (index !== -1) {
                statecopy.posts.splice(index, 1);

                for (let i=1;i<=statecopy.posts.length;i++){
                    statecopy.posts[i-1].id=i

                }
            }
return statecopy;
        }
        case "changeTitle": {
            let statecopy = {...state};
            statecopy.posts = [...state.posts];
            const index = statecopy.posts.findIndex(n => n.id === action.id);
            if (index !== -1) {
                statecopy.posts[index].title = action.newTitle;

            }
            return statecopy;
        }
        case "changeDescr": {
            let statecopy = {...state};
            statecopy.posts = [...state.posts];
            const index = statecopy.posts.findIndex(n => n.id === action.id);
            if (index !== -1) {
                statecopy.posts[index].description = action.newDescr;

            }
            return statecopy;
        }
        case "searchTitle":{

            let statecopy={...state};
            statecopy.title=action.title;
            return statecopy;


        }
        default: {
            return state;
        }
    }
};

export const addPost = (title,description,date) => {

    return {
        type: "addPost",
        title:title,
        description:description,
        date:date,
    }
};
export const deletePost=(id)=>{
    return {
        type: "deletePost",
        id:id,
    }
}
export const changeTitle=(id,newTitle)=>{
    return {
        type: "changeTitle",
        id:id,
        newTitle:newTitle,
    }
}
export const changeDescr=(id,newDescr)=>{
    return {
        type: "changeDescr",
        id:id,
        newDescr:newDescr,
    }
}
export const searchTitle=(title)=>{
    return {
        type: "searchTitle",
        title:title,
    }
}

export default PostsReducer;