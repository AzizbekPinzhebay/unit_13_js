// task 1 --------------------
// Task 1
// Выведите массив a1 на страницу.

    a1 = {
    3 : 'hello',
    'one' : 'hi'
    };

    let out1 = document.querySelector('.out_1');

    for (key in a1){
        out1.innerHTML += `${key}:${a1[key]}<br>`;
    }



// Task 2
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.

    a2 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
    };

    let out2 = document.querySelector('.out_2');

    for (key in a2){
      
        if(a2[key].length > 4){

            out2.innerHTML += `${key}:${a2[key]}<br>`
        }
       
    }
      


// Task 3
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.

    a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
    };


    let out3 = document.querySelector('.out_3');

    for (key in a3){
      
        if(key.length > 4){

            out3.innerHTML += `${key}:${a3[key]}<br>`
        }
       
    }





// Task 4
// Выведите на страницу элементы из масиива a4 у которых значение - число.

    a4 = {
    3 : 'hello',
    'one' : 4,
    'testt' : 'vodoley',
    'ivan' : 6
    };

    let out4 = document.querySelector('.out_4');

    for (key in a4){
      
        if(typeof a4[key] == 'number'){

            out4.innerHTML += `${key}:${a4[key]}<br>`
        }
       
    } 




// Task 5
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.

    a5 = {
    a : 7,
    z : 4,
    45 : 12,
    f : 6
    };

    let result_5 = 0;

    for (key in a5){
        
         result_5 = result_5 + a5[key];
    
    } 

    console.log(result_5);


// Task 6
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.

    let a6 = {
        'name': 'Azizbek',
        'age': 29,
        'sex': 'male',
        'height': 170,
    };

    let out6 = document.querySelector('.out_6');
    for(key in a6){

        out6.innerHTML += `${key}: ${a6[key]}<br>`
    }





// Task 7
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.


    let a7 = {
        'width': '100px',
        'height': '50px',
        'color': 'red',
    };
    
    let out7 = document.querySelector('.out_7');

    let inpKey = document.querySelector('.u7-key__input');//ключ массива

    let inpValue = document.querySelector('.u7-value__input');// значение массива
   

    document.querySelector('.u7-button').onclick = ()=>{

        let key_7 = inpKey.value;
        let val_7 = inpValue.value;
       
         a7[key_7] = val_7;
        out7.innerHTML += `${key_7}: ${a7[key_7]}<br>`;
        
    }
  

// Task 8
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.

    let inp8 = document.querySelector('.u8-key__input');// ввод 
    let btn_8 = document.querySelector('.btn_delete');// кнопка 
    

    btn_8.onclick =()=>{

        out7.innerHTML = '';
        let deletVal = inp8.value;// удаляемый ключ

            for(let kei in a7){

            if(deletVal == kei){

                delete a7[kei];
               
             }
           
            out7.innerHTML += `${kei} : ${a7[kei]}<br>`;
        }
        
    }


// Task 9
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.

    let inp_9 = document.querySelector('.u9-delete-value__input');
    let btn_9 = document.querySelector('.btn_del_value');
    let out_9 = document.querySelector('.out_9');

    btn_9.onclick =()=>{
        let out9 = '';
      let dvalue = inp_9.value;  // удаляемый ключ

           
        for(let kei in a7){

            if(dvalue == a7[kei]){

                delete  a7[kei];
                
            }
            console.log(a7)
            out9 +=`${kei} : ${a7[kei]}<br>`;
            
        }
        out_9.innerHTML += out9;
    }

    

// Task 10
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.

    let inp10 = document.querySelector('.u10-has-key__input');
    console.log(inp10);

    document.querySelector('.u10-has-key__button').onclick = taskTen;


        function taskTen(){
    
            let val10 = inp10.value;
          
            for(let keu  in a7){
    
               
                if(val10 == keu){
    
                    return true
                }
                else {
                   return false
                }
            }
           
        }

        
  


    

// Task 11
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.

// a11 = {
// 	"red" : ['Академгородок',...],
// 	"green" : 
// }

        let a11 = {
            "red" : ['Академгородок', 'Житомирська', 'Святошин', 'Нивки', 'Берестейська', 'Шулявська', 'Политех', 'Вокзальная', 'Университет', 'Театральная', 'Хрещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережна', 'Дарница', 'Чернігівіська', 'Лисова'],

            "green" : ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],

            "blue" : ['Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Площадь Независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки']
        }

            let out11 = document.querySelector('.out_11');
            let cout = '';

            for(let key in a11){

                cout += `${key}: ${a11[key]}<br>`;
            }

            out11.innerHTML = cout;


// Task 12
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.

    let select = document.querySelector('.u12-branch');
    let out12 = document.querySelector('.out_12');
    let outer = '';

    document.querySelector('.u12-btn').onclick = ()=>{

        let selectValue = select.value;

     for(let key in a11){

            if(selectValue == key){

                outer += `${a11[key]}`;
             }
        }
        out12.innerHTML = outer;
    }
       



// Task 13
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!

    let out13 = document.querySelector('.out_13');

    document.querySelector('.u13-reverse').onclick = function(){
        console.log(out13)

        let outer13 = '';

        for(let key in a11){

            for(let i = a11[key].length-1; i >= 0; i--){
                  
                outer13 += `${a11[key][i]}, `;
            }
           
        }
        out13.innerHTML += outer13;
    }




// Task 14
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, а вы перебирая массив - вывести ветку на которой эта станция находится.

        let selected = document.querySelector('.u14-find-station');
        let cout14 = '';

       function optionAdd (){

            for(let key in a11){

                for(let i = 0; i < a11[key].length; i++){

                 cout14 += `<option value"${a11[key][i]}">${a11[key][i]}</option>`;

                }
            }
            selected.innerHTML =cout14;
        }
        optionAdd ();

    
    let out14 = document.querySelector('.out_14');
    document.querySelector('.u14-btn').onclick = function(){

    let select_14 = document.querySelector('.u14-find-station').value;
  
        for(let key in a11){

            let st = a11[key];
               
            if (st.indexOf(select_14) != -1){

                out14.innerHTML = key;

                }
        }
}


// Task 15
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).

    function optionAdder (){
        let cout15 = '';
        let sel15_01 = document.querySelector('.u15-find-st01');
        let sel15_02 = document.querySelector('.u15-find-st02');

        for(let key in a11){

            for(let i = 0; i < a11[key].length; i++){

            cout15 += `<option value"${a11[key][i]}">${a11[key][i]}</option>`;

            }
        }
        sel15_01.innerHTML = cout15;
        sel15_02.innerHTML = cout15;
    }
    optionAdder();

    

    let out15 = document.querySelector('.out_15');

    document.querySelector('.u15-btn').onclick = function(){

        let sValue01 = document.querySelector('.u15-find-st01').value;
        let sValue02 = document.querySelector('.u15-find-st02').value;

            for(let key in a11){

                let st = a11[key];
                
                    if (st.indexOf(sValue01) != -1 ){

                        if(st.indexOf(sValue02) != -1){
                            let sum =  st.indexOf(sValue01) - st.indexOf(sValue02);

                            
                             
                            if(sum < 0){
                                let posNumber = Math.abs(sum);
                                out15.innerHTML = posNumber-1;
                             }
                             else{
                                 out15.innerHTML = sum-1;
                             }
                        }

                    }
                
                
                }
                
            }
           

    

    

// Task 16
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.

    let radioBtn = document.querySelectorAll('.u16-radio');

            for(let i = 0; i < radioBtn.length; i++){

                radioBtn[i].onclick = renderSt;
            }

    function renderSt(){
        let sel16 = document.querySelector('.u16-select');
        let cout16 = '';
        sel16innerHTML = '';
        
        for( let t = 0; t < radioBtn.length; t++){

            if(radioBtn[t].checked){
               
                for(let key in a11){

                    if(radioBtn[t].value == key){

                        for(let k = 0; k < a11[key].length; k++){

                            cout16 += `<option value"${a11[key][k]}">${a11[key][k]}</option>`;
                
                            }
                    }

                }
            }
        }

        sel16.innerHTML = cout16;
    }





// Task 17
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, выведите его на страницу. Конечные - обозначать 0, перехода - 1.
// a17 = {
//     "red" : [ ['Академгородок', 0] ,...],
//     "green" : 
// }

    let a17 = {
        "red" : [['Академгородок',0], ['Житомирська'], ['Святошин'], ['Нивки'], ['Берестейська'], ['Шулявська'], ['Политех'], ['Вокзальная'], ['Университет'], ['Театральная',1], ['Хрещатик',1], ['Арсенальная'], ['Днепр'], ['Гидропарк'], ['Левобережна'], ['Дарница'], ['Чернігівіська'], ['Лисова',0]],

        "green" : [['Сырец',0], ['Дорогожичи'], ['Лукьяновская'], ['Золотые ворота',1], ['Дворец спорта',1], ['Кловская'], ['Печерская'], ['Дружбы народов'], ['Выдубичи'],[ 'Славутич'], ['Осокорки'], ['Позняки'], ['Харьковская'], ['Вырлица'], ['Бориспольская'], ['Красный хутор',0]],

        "blue" : [['Героев Днепра',0], ['Минская'], ['Оболонь'], ['Почайна'], ['Тараса Шевченко'], ['Контрактовая площадь'], ['Почтовая площадь'], ['Площадь Независимости',1],[ 'Площадь Льва Толстого',1], ['Олимпийская'], ['Дворец Украина'], ['Лыбедская'], ['Демиевская'], ['Голосеевская'],[ 'Васильковская'], ['Выставочный центр'], ['Ипподром'], ['Теремки',0]]
    }

        let out17 = document.querySelector('.out_17');
       

        for(let key in a17){

            out17.innerHTML += `${key}:${a17[key]}<br>`;
          
        }
          



// Task 18
// Выведите на страницу только станции с переходами из массива a17.

        let out18 = document.querySelector('.out_18');
        let cout18 = '';

        for(let key in a17){

            for(let i = 0; i < a17[key].length; i++){

                for(let j = 0; j < a17[key][i].length; j++){

                    if(a17[key][i][j] == 1){

                        cout18 += `${a17[key][i]}<br>`;
                    }
                }
            }
        }
                out18.innerHTML = cout18;
// Task 19
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий название столицы, количество населения, площадь. Выведите его на страницу.


        let out19 = document.querySelector('.out_19');
        let cout19 ='';

        let asianCountries = {
            "Азербайджан": {
                "столица": 'Баку',
                "населения": 9000000,
                "территория": 86600,
                 },

            "Казахстан": {
                "столица": "Нур-Султан",
                "населения": 18000000,
                "территория": 2724902,
                    },

            "Турция": {
                "столица": "Анкара",
                "населения": 82000000,
                "территория": 783562,
                    },

            "Саудовская Аравия": {
                "столица": "Эр-Рияд",
                "населения": 33000000,
                "территория": 2149690,
                    },

            "Малайзия": {
                "столица": "Куала-Лумпур",
                "населения": 32382300,
                "территория": 329758,
                    }
         }

        for(let key in asianCountries){

            for(let kei in asianCountries[key]){

                cout19 += `${asianCountries[key][kei]}<br>`
            }
        }
         
        out19.innerHTML += cout19;


// Task 20
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация подтягивалась на страницу.

        let selectCountries = document.querySelector('.selectCountries');
        let out20 = document.querySelector('.out_20');
     
        selectCountries.onchange = function(){
            let cout20 = '';
            let sValueCountr = selectCountries.value;

            for(let key in asianCountries){

                if(sValueCountr == key){
                    
                    for(let kei in asianCountries[key]){
    
                        cout20 += `${asianCountries[key][kei]}<br>`
                    }
                }
                
            }
               out20.innerHTML = cout20;
        }


