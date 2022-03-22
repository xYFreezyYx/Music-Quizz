let QUESTION_IMG = document.querySelector(".img-question");
let QUESTION = document.querySelector(".question");
let ANSWER_AREA = document.querySelector(".answer-area");
let EXAMPLE = document.querySelector(".example");
let SCORE = document.querySelector(".score");
let ANSWER = null;
let used = [];
let P = 0;
let Q;
Question();

function SubmitAnswer(){
    let answer_area = ANSWER_AREA.value;
    let answer = ANSWER;
    
    if(answer_area == answer){
        console.log("Corrent!");
        ANSWER_AREA.value = null;
        P++;
        SCORE.innerText = P + "/35";
        Question();
    }else{
        console.error("Wrong!");
        ANSWER_AREA.value = null;
        P--;
        SCORE.innerText = P + "/35";
    }
}

function RNGQuestion(min, max){
    let rng = Math.floor((Math.random() * (max - min + 1)) + min).toFixed();

    rng = Number(rng);

    if(!used.includes(rng)){
        used.push(rng);
        return rng;
    }else{
        if(used.length < max){
            return RNGQuestion(1, 35);
        }else{
            QUESTION_IMG.style.display = "none";
            QUESTION.innerText = "Tavs Rezultāts: " + SCORE.innerText;
            ANSWER_AREA.style.display = "none";
            document.querySelector("#submit").style.display = "none";
            document.querySelector("#reload").style.display = "flex";
            SCORE.innerText = null;
            EXAMPLE.innerText = null;
            ANSWER.innerText = null;
            console.log("No more Questions!");
        }
    }
}

function Question(){
    Q = RNGQuestion(1, 35);

    if(Q == "1"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kad dibināta grupa Remix?";
        EXAMPLE.innerText = "Piemērs: 1999";
        ANSWER = "1985";
    }else if(Q == "2"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kādu mūzikas vēstures stilu pārstāv A. Vivaldi?";
        EXAMPLE.innerText = "Piemērs: stils";
        ANSWER = "baroks";
    }else if(Q == "3"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Cik dalībnieki ir grupā Remix?";
        EXAMPLE.innerText = "Piemērs: 1";
        ANSWER = "7";
    }else if(Q == "4"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Latvijas Radio galvenais mūzikas redaktors 1985. gadā?";
        EXAMPLE.innerText = "Piemērs: Raimonds Ozoliņš";
        ANSWER = "Raimonds Pauls";
    }else if(Q == "5"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas aizvietoja Jevgēņiju Ščapovu pēc viņa aiziešanas?";
        EXAMPLE.innerText = "Piemērs: Raimonds Ozoliņš";
        ANSWER = "Eduards Glotovs";
    }else if(Q == "6"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kad grupa Remix beidza savu darbību?";
        EXAMPLE.innerText = "Piemērs: 1999";
        ANSWER = "1993";
    }else if(Q == "7"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kura ir populārākā grupas Remix dziesma?";
        EXAMPLE.innerText = "Piemērs: dziesmas nosaukums";
        ANSWER = "...pie Laika";
    }else if(Q == "8"){
        QUESTION_IMG.style.display = "flex";
        QUESTION_IMG.src = 'Images/Remix.png';
        QUESTION_IMG.style.width = '250px';
        QUESTION.innerText = "Kas šī par grupu?";
        EXAMPLE.innerText = "Piemērs: grupas nosaukums";
        ANSWER = "Remix";
    }else if(Q == "9"){
        QUESTION_IMG.style.display = "flex";
        QUESTION_IMG.src = 'Images/Vivaldi.png';
        QUESTION_IMG.style.width = '250px';
        QUESTION.innerText = "Kas viņš ir?";
        EXAMPLE.innerText = "Piemērs: Raimonds Ozoliņš";
        ANSWER = "Antonio Vivaldi";
    }else if(Q == "10"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "No kura līdz kuram gadam dzīvoja Antonio Vivaldi?";
        EXAMPLE.innerText = "Piemērs: 1999-1999";
        ANSWER = "1678-1741";
    }else if(Q == "11"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kāds ir Antonio Vivaldi slavenākais darbs?";
        EXAMPLE.innerText = "Piemērs: nosaukums";
        ANSWER = "Četri gadalaiki";
    }else if(Q == "12"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Cik gados Antonio Vivaldi iemācījās spēlēt vijoli?";
        EXAMPLE.innerText = "Piemērs: 1";
        ANSWER = "10";
    }else if(Q == "13"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kādā pilsētā Antonio Vivaldi pavadīja savas dzīves pēdējos mirkļus?";
        EXAMPLE.innerText = "Piemērs: Rīgā";
        ANSWER = "Vīnē";
    }else if(Q == "14"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kurā gadā tapa koncertu kopa Četri gadalaiki?";
        EXAMPLE.innerText = "Piemērs: 1999";
        ANSWER = "1723";
    }else if(Q == "15"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Cik vijoļkoncerti ir koncert kopā Četri gadalaiki?";
        EXAMPLE.innerText = "Piemērs: 1";
        ANSWER = "4";
    }else if(Q == "16"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kā sauca Antonio Vivaldi tēvu?";
        EXAMPLE.innerText = "Piemērs: Raimonds";
        ANSWER = "Džovanni";
    }else if(Q == "17"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas pēc profesijas bija Antonio Vivaldi tēvs?";
        EXAMPLE.innerText = "Piemērs: programmētājs";
        ANSWER = "bārddzinis";
    }else if(Q == "18"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kurā gadā tika dibināts Latvijas Radio?";
        EXAMPLE.innerText = "Piemērs: 1999";
        ANSWER = "1925";
    }else if(Q == "19"){
        QUESTION_IMG.style.display = "flex";
        QUESTION_IMG.src = 'Images/LV-Radio.png';
        QUESTION_IMG.style.width = '250px';
        QUESTION.innerText = "Kuram radio ir šis logo?";
        EXAMPLE.innerText = "Piemērs: Skonto";
        ANSWER = "Latvijas Radio";
    }else if(Q == "20"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Cik Radio programmas ir Latvijas Radio?";
        EXAMPLE.innerText = "Piemērs: 1";
        ANSWER = "6";
    }else if(Q == "21"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Ar kādu pārraidi tika atklāts Latvijas Radio?";
        EXAMPLE.innerText = "Piemērs: mūzika";
        ANSWER = "Madame Butterfly";
    }else if(Q == "22"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Cik stundas dienā Latvijas Radio raidīja propogandu PSRS okupācijas laikā?";
        EXAMPLE.innerText = "Piemērs: 1";
        ANSWER = "12";
    }else if(Q == "23"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kura ir vienīgā klasiskās mūzikas radiostacija Latvijā?";
        EXAMPLE.innerText = "Piemērs: Latvijas Radio 1";
        ANSWER = "Latvijas Radio 3";
    }else if(Q == "24"){
        QUESTION_IMG.style.display = "flex";
        QUESTION_IMG.src = 'Images/LV-Radio-5-Pieci.lv.png';
        QUESTION_IMG.style.width = '250px';
        QUESTION.innerText = "Kuram radio ir šis logo?";
        EXAMPLE.innerText = "Piemērs: Latvijas Radio 1";
        ANSWER = "Latvijas Radio 5";
    }else if(Q == "25"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kādai auditorijai radīts Pieci.lv?";
        EXAMPLE.innerText = "Piemērs: senioru";
        ANSWER = "jauniešu";
    }else if(Q == "26"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Par ko uzskata miera vēstnešus visā pasaulē?";
        EXAMPLE.innerText = "Piemērs: Melnās vārnas";
        ANSWER = "Baltie baloži";
    }else if(Q == "27"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas sakrālajā mākslā ir Svētais Gars?";
        EXAMPLE.innerText = "Piemērs: Vārna";
        ANSWER = "Balodis";
    }else if(Q == "28"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas ir putnu karalis?";
        EXAMPLE.innerText = "Piemērs: Balodis";
        ANSWER = "Ērglis";
    }else if(Q == "29"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas ir Latvijas nacionālais putns?";
        EXAMPLE.innerText = "Piemērs: Melnā vārna";
        ANSWER = "Baltā cielava";
    }else if(Q == "30"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas ir Igainijas nacionālais putns?";
        EXAMPLE.innerText = "Piemērs: Vārna";
        ANSWER = "Bezdelīga";
    }else if(Q == "31"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kas ir Anglijas nacionālais putns?";
        EXAMPLE.innerText = "Piemērs: Vārna";
        ANSWER = "Sarkanrīklīte";
    }else if(Q == "32"){
        QUESTION_IMG.style.display = "flex";
        QUESTION_IMG.src = 'Images/baltā-cielava.png';
        QUESTION_IMG.style.width = '250px';
        QUESTION.innerText = "Kas šis par putnu?";
        EXAMPLE.innerText = "Piemērs: Melnā vārna";
        ANSWER = "Baltā cielava";
    }else if(Q == "33"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Ko nozīmē saīsinājums LR?";
        EXAMPLE.innerText = "Piemērs: saīsinājuma iztūlkojums";
        ANSWER = "Latvijas Radio";
    }else if(Q == "34"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kāds ir Dānijas nacionālais putns?";
        EXAMPLE.innerText = "Piemērs: Kalnu vārna";
        ANSWER = "Lauku cīrulis";
    }else if(Q == "35"){
        QUESTION_IMG.style.display = "none";
        QUESTION.innerText = "Kāds ir Norvēģijas nacionālais putns?";
        EXAMPLE.innerText = "Piemērs: Vārna";
        ANSWER = "Ūdensstrazds";
    }
}

// Vivaldi 65-66 123 120 13
// Putni 69 73 70
// LV Radio 
// Remix 