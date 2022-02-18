var x = Math.floor((Math.random() * 100) + 5);
var DLevel = x - 2 + 15;
var CLevel = x * 9 /5;
var BLevel = x ** 18 + 150;
var ALevl = x+55**22-8
var XLevl = x*22.5+11.2**2;


let questions = [{
        numb: 1,
        question: "x - 2 + 15 = "+DLevel,
        answer: x,
        options: [
            x+20,
            x+10,
            x-10,
            x,
        ]
    },
    {
        numb: 2,
        question: "x * 9 / 5 = "+CLevel,
        answer: x,
        options: [
            x/2,
            x,
            x*20,
            x+5,
        ]
    },
    {
        numb: 3,
        question: "x ** 18 + 150 = "+BLevel,
        answer: x,
        options: [
            x,
            x+90,
            x-2,
            x*7,
        ]
    },
    {
        numb: 4,
        question: "x + 55 ** 22 - 8 = "+ALevl,
        answer: x,
        options: [
            x*7,
            x-45,
            x,
            x+11,
        ]
    },
    {
        numb: 5,
        question: "x * 22.5 + 11.2 ** 2 = "+XLevl,
        answer: x,
        options: [
            x +9,
            x*3,
            x**2,
            x,
        ]
    },
];