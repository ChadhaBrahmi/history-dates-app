var currentQuestion = 0;
var totalScore = 0;
var cQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var splashSecreen = document.getElementById('start');
var quizScreen = document.getElementById('quiz-secreen');
var x = 0;
var resultSecreen = document.getElementById('resultSecreen');
var timeLeft = document.getElementById('timeLeft');
var score = document.getElementById('score');
var question = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var btn = document.getElementsByClassName('btn');
var next = document.getElementById('next');
var bar;

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

var quizQuestions = [
    
    {
      question: "7 Mai 1945",
      choice1: "إعلان مبدأ جدانوف",
      choice2: "سقوط المانيا و نهاية ح ع 2 في أوروبا", 
      choice3: "توقيع معاهدة سالت 2",
      choice4: "إنشاء حلف وارسو",
      ans: "سقوط المانيا و نهاية ح ع 2 في أوروبا",
    },
    
    {
      question: "4-11 Février 1945",
      choice1: "مؤتمر يالطا", 
      choice2: "تأميم قناة السويس",
      choice3: "إنشاء الحلف المركزي",
      choice4: "تهديم جدار برلين",
      ans: "مؤتمر يالطا",
    },
    
    {
      question: "17 Juillet - 2 Août 1945",
      choice1: "بداية العدوان الثلاثي على مصر",
      choice2: "نجاح الثورة الشيوعية في الصين",
      choice3: "مؤتمر بوتسدام", 
      choice4: "إعلان حرب النجوم",
      ans: "مؤتمر بوتسدام",
    },
    
    {
      question: "6 Août 1945",
      choice1: "حل مكتب الكومنفورم",
      choice2: "إلقاء القنبلة الذرية على هيروشيما", 
      choice3: "عقد مؤتمر ألماآتا و تفكك الاتحاد السوفييتي",
      choice4: "إنشاء حلف بغداد",
      ans: "إلقاء القنبلة الذرية على هيروشيما",
    },
    
    {
      question: "9 Août 1945",
      choice2: "إلقاء القنبلة الذرية على ناكازاكي", 
      choice1: "نجاح تجربة سبيريا",
      choice3: "إعلان هيئة الأمم المتحدة",
      choice4: "عقد مؤتمر باريس",
      ans: "إلقاء القنبلة الذرية على ناكازاكي",
    },
    
    {
      question: "2 Septembre 1945",
      choice1: "نهاية ح ع 2", 
      choice2: "وصول غورباتشوف للحكم على رأس الاتحاد السوفييتي",
      choice3: "إنشاء حلف جنوب شرق آسيا",
      choice4: "تهديم جدار برلين",
      ans: "نهاية ح ع 2",
    },
    
    {
      question: "24 Octobre 1945",
      choice3: "إعلان هيئة الأمم المتحدة", 
      choice2: "توقيع معاهدة سالت 1",
      choice1: "عقد مؤتمر بلغراد و تأسيس حركة عدم الانحياز",
      choice4: "أزمة الصواريخ",
      ans: "إعلان هيئة الأمم المتحدة",
    },
    
    {
      question: "12 Mars 1947",
      choice1: "إعلان مبدأ ترومان", 
      choice2: "إنشاء الخط الأحمر الهاتفي",
      choice3: "بناء جدار برلين",
      choice4: "توقيع معاهدة سالت 2",
      ans: "إعلان مبدأ ترومان",
    },
    
    {
      question: "5 Juin 1947",
      choice4: "إعلان مشروع مارشال", 
      choice2: "توحيد الألمانيتين",
      choice3: "إنشاء الحلف المركزي",
      choice1: "مشروع أيزنهاور",
      ans: "إعلان مشروع مارشال",
    },
    
    {
      question: "22 Septembre 1947",
      choice2: "إعلان مبدأ جدانوف", 
      choice1: "إنشاء مكتب الكومنفورم",
      choice3: "تأميم قناة السويس",
      choice4: "وفاة ستالين",
      ans: "إعلان مبدأ جدانوف",
    },
    
    {
      question: "6 Octobre 1947",
      choice1: "إنشاء مكتب الكومنفورم", 
      choice2: "عقد مؤتمر ألماآتا و تفكك الاتحاد السوفييتي",
      choice3: "إنشاء حلف بغداد",
      choice4: "إعلان حرب النجوم",
      ans: "إنشاء مكتب الكومنفورم",
    },
    
    {
      question: "25 Janvier 1949",
      choice3: "إنشاء منظمة الكومكون", 
      choice2: "إنشاء حلف وارسو",
      choice1: "توقيع معاهدة سالت 1",
      choice4: "مؤتمر مالطا و نهاية الحرب الباردة",
      ans: "إنشاء منظمة الكومكون",
    },
    
    {
      question: "4 Avril 1949",
      choice1: "إنشاء حلف الشمال الأطلسي", 
      choice2: "عقد مؤتمر باندونغ",
      choice3: "حل مكتب الكومنفورم",
      choice4: "إعلان مشروع مارشال",
      ans: "إنشاء حلف الشمال الأطلسي",
    },
    
    {
      question: "21 Septembre 1949",
      choice2: "نجاح تجربة سبيريا", 
      choice1: "توقيع معاهدة سالت 2",
      choice3: "بداية العدوان الثلاثي على مصر",
      choice4: "إعلان مبدأ ترومان",
      ans: "نجاح تجربة سبيريا",
    },
    
    {
      question: "1 Octobre 1949",
      choice3: "نجاح الثورة الشيوعية في الصين", 
      choice2: "إنشاء حلف وارسو",
      choice1: "إنشاء الحلف المركزي",
      choice4: "تهديم جدار برلين",
      ans: "نجاح الثورة الشيوعية في الصين",
    },
    
    {
      question: "5 Mars 1953",
      choice1: "وفاة ستالين", 
      choice2: "إنشاء حلف بغداد",
      choice3: "عقد مؤتمر بلغراد و تأسيس حركة عدم الانحياز",
      choice4: "تأميم قناة السويس",
      ans: "وفاة ستالين",
    },
    
    {
      question: "8 Septembre 1954",
      choice3: "إنشاء حلف جنوب شرق آسيا", 
      choice2: "إنشاء حلف وارسو",
      choice1: "إعلان مبدأ جدانوف",
      choice4: "توقيع معاهدة سالت 1",
      ans: "إنشاء حلف جنوب شرق آسيا",
    },
    
    {
      question: "14 Mai 1955",
      choice1: "إنشاء حلف وارسو", 
      choice2: "إلقاء القنبلة الذرية على ناكازاكي",
      choice3: "مؤتمر بوتسدام",
      choice4: "عقد مؤتمر ألماآتا و تفكك الاتحاد السوفييتي",
      ans: "إنشاء حلف وارسو",
    },
    
    {
      question: "24 Février 1955",
      choice4: "إنشاء حلف بغداد", 
      choice2: "إعلان هيئة الأمم المتحدة",
      choice3: "نجاح تجربة سبيريا",
      choice1: "توقيع معاهدة سالت 2",
      ans: "إنشاء حلف بغداد",
    },
    
    {
      question: "18-24 Avril 1955",
      choice1: "عقد مؤتمر باندونغ", 
      choice2: "إنشاء حلف وارسو",
      choice3: "إعلان مبدأ جدانوف",
      choice4: "توقيع معاهدة سالت 1",
      ans: "عقد مؤتمر باندونغ",
    },
    
    {
      question: "26 Juillet 1956",
      choice4: "تأميم قناة السويس", 
      choice2: "إعلان حرب النجوم",
      choice3: "مشروع أيزنهاور",
      choice1: "وفاة ستالين",
      ans: "تأميم قناة السويس",
    },
    
    {
      question: "29 Octobre 1956",
      choice2: "بداية العدوان الثلاثي على مصر", 
      choice1: "إنشاء حلف وارسو",
      choice3: "إنشاء الحلف المركزي",
      choice4: "توقيع معاهدة سالت 1",
      ans: "بداية العدوان الثلاثي على مصر",
    },
    
    {
      question: "17 Avril 1956",
      choice4: "حل مكتب الكومنفورم", 
      choice2: "عقد مؤتمر باريس",
      choice3: "تهديم جدار برلين",
      choice1: "توقيع معاهدة سالت 2",
      ans: "حل مكتب الكومنفورم",
    },
    {
      question: "5 Janvier 1957",
      choice1: "مشروع أيزنهاور", 
      choice2: "إنشاء حلف وارسو",
      choice3: "نجاح الثورة الشيوعية في الصين",
      choice4: "إعلان مبدأ ترومان",
      ans: "مشروع أيزنهاور",
    },
    
    {
      question: "11 Août 1959",
      choice3: "إنشاء الحلف المركزي", 
      choice2: "إعلان حرب النجوم",
      choice1: "توقيع معاهدة سالت 1",
      choice4: "عقد مؤتمر ألماآتا و تفكك الاتحاد السوفييتي",
      ans: "إنشاء الحلف المركزي",
    },
    
    {
      question: "13 Août 1961",
      choice2: "بناء جدار برلين", 
      choice1: "تأميم قناة السويس",
      choice3: "إعلان مبدأ جدانوف",
      choice4: "مؤتمر مالطا و نهاية الحرب الباردة",
      ans: "بناء جدار برلين",
    },
    
    {
      question: "1-6 Septembre 1961",
      choice1: "عقد مؤتمر بلغراد و تأسيس حركة عدم الانحياز", 
      choice2: "إنشاء حلف وارسو",
      choice3: "توقيع معاهدة سالت 2",
      choice4: "إعلان مشروع مارشال",
      ans: "عقد مؤتمر بلغراد و تأسيس حركة عدم الانحياز",
    },
    
    {
      question: "22-28 Octobre 1962",
      choice3: "أزمة الصواريخ", 
      choice2: "إلقاء القنبلة الذرية على هيروشيما",
      choice1: "إنشاء حلف بغداد",
      choice4: "توحيد الألمانيتين",
      ans: "أزمة الصواريخ",
    },
    
    {
      question: "20 Juin 1963",
      choice4: "إنشاء الخط الأحمر الهاتفي", 
      choice2: "عقد مؤتمر باندونغ",
      choice3: "حل مكتب الكومنفورم",
      choice1: "توقيع معاهدة سالت 1",
      ans: "إنشاء الخط الأحمر الهاتفي",
    },
    
    {
      question: "26 Mai 1972",
      choice1: "توقيع معاهدة سالت 1", 
      choice2: "إعلان مبدأ جدانوف",
      choice3: "تهديم جدار برلين",
      choice4: "مشروع أيزنهاور",
      ans: "توقيع معاهدة سالت 1",
    },
    
    {
      question: "18 Juin 1979",
      choice3: "توقيع معاهدة سالت 2", 
      choice2: "إنشاء حلف وارسو",
      choice1: "إعلان هيئة الأمم المتحدة",
      choice4: "عقد مؤتمر باريس",
      ans: "توقيع معاهدة سالت 2",
    },
    
    {
      question: "23 Mars 1983",
      choice2: "إعلان حرب النجوم", 
      choice1: "نجاح الثورة الشيوعية في الصين",
      choice3: "إنشاء الحلف المركزي",
      choice4: "تأميم قناة السويس",
      ans: "إعلان حرب النجوم",
    },
    
    {
      question: "11 Mars 1985",
      choice1: "وصول غورباتشوف للحكم على رأس الاتحاد السوفييتي", 
      choice2: "إنشاء حلف وارسو",
      choice3: "إعلان مبدأ جدانوف",
      choice4: "توقيع معاهدة سالت 1",
      ans: "وصول غورباتشوف للحكم على رأس الاتحاد السوفييتي",
    },
    
    {
      question: "3-4 Décembre 1989",
      choice4: "مؤتمر مالطا و نهاية الحرب الباردة", 
      choice2: "إنشاء حلف وارسو",
      choice3:  "حل مكتب الكومنفورم",
      choice1: "تأميم قناة السويس",
      ans: "مؤتمر مالطا و نهاية الحرب الباردة",
    },
    
    {
      question: "9 Novembre 1989",
      choice2: "تهديم جدار برلين", 
      choice1: "بناء جدار برلين",
      choice3: "إعلان مبدأ جدانوف",
      choice4: "أزمة الصواريخ",
      ans: "تهديم جدار برلين",
    },
    
    {
      question: "19-20 Novembre 1990",
      choice3: "عقد مؤتمر باريس", 
      choice2:  "تهديم جدار برلين",
      choice1:  "إنشاء الخط الأحمر الهاتفي",
      choice4:  "مشروع أيزنهاور",
      ans: "عقد مؤتمر باريس",
    },
    
    {
      question: "3 Octobre 1990",
      choice2: "توحيد الألمانيتين", 
      choice1: "إنشاء حلف وارسو",
      choice3: "إعلان مبدأ جدانوف",
      choice4: "تأميم قناة السويس",
      ans: "توحيد الألمانيتين",
    },

    {
      question: "21-25 Décembre 1991",
      choice3: "عقد مؤتمر ألماآتا و تفكك الاتحاد السوفييتي", 
      choice2:  "تهديم جدار برلين",
      choice1:" نجاح الثورة الشيوعية في الصين",
      choice4: "إعلان حرب النجوم",
      ans: "عقد مؤتمر ألماآتا و تفكك الاتحاد السوفييتي",
    },
  ];
shuffleQuestions(quizQuestions);

totalQuestions.textContent = quizQuestions.length;
function nextQuestion(no) {
  resetButtonColors();
  cQuestion.textContent = no + 1;
  question.textContent = quizQuestions[no].question;
  opt1.textContent = quizQuestions[no].choice1;
  opt2.textContent = quizQuestions[no].choice2;
  opt3.textContent = quizQuestions[no].choice3;
  opt4.textContent = quizQuestions[no].choice4;

  startTimer(15000);
}

var z = setInterval(function () {
  if (x == 1) {
    clearInterval(z);
    splashSecreen.style.display = "none";
    quizScreen.style.display = "block";
    nextQuestion(currentQuestion);
  }
  x++;
}, 2000);

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    for (var j = 0; j < btn.length; j++) {
      btn[j].disabled = true;
    }
    if (this.textContent == quizQuestions[currentQuestion].ans) {
      totalScore++;
      this.style.backgroundColor = "green";
    } else {
      this.style.backgroundColor = "red";
      showCorrectAnswer();
    }
    clearInterval(bar);
    setTimeout(function () {
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        nextQuestion(currentQuestion);
        for (var j = 0; j < btn.length; j++) {
          btn[j].disabled = false;
        }
      } else {
        endScreen();
      }
    }, 2000);
  };
}

function showCorrectAnswer() {
  for (var i = 0; i < btn.length; i++) {
    if (btn[i].textContent == quizQuestions[currentQuestion].ans) {
      btn[i].style.backgroundColor = "green";
    }
  }
}

function resetButtonColors() {
  for (var i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = "";
  }
}

function endScreen() {
  quizScreen.style.display = "none";
  resultSecreen.style.display = "block";
  score.textContent = totalScore;
}

function startTimer(set) {
  var statusTime = set;
  timeLeft.style.width = "100%";
  bar = setInterval(function () {
    if (statusTime <= 0) {
      clearInterval(bar);
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        nextQuestion(currentQuestion);
      } else {
        endScreen();
      }
    }
    timeLeft.style.width = (statusTime / set) * 100 + "%";
    statusTime -= 100;
  }, 100);
}

next.onclick = function () {
  clearInterval(bar);
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    nextQuestion(currentQuestion);
  } else {
    endScreen();
  }
};




