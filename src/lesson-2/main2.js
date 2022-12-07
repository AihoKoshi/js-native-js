import React from 'react';

export const Main2 = () => {

    let students = [
        {
            name: 'Bob',
            age: 22,
            isMarried: true,
            scores: 85,
            isStudent: false,
        },
        {
            name: 'Alex',
            age: 21,
            isMarried: true,
            scores: 89,
            isStudent: false
        },
        {
            name: 'Nick',
            age: 20,
            isMarried: false,
            scores: 100,
            isStudent: false
        },
        {
            name: 'John',
            age: 18,
            isMarried: false,
            scores: 95,
            isStudent: false
        },
    ]

    const getName = (obj) => obj.name;
    const getScores = (obj) => obj.scores;
    const getStudent = (obj) => ({...obj, isStudent: true});

    // const getStudentsNames = (arr) => {
    //     const result = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         result[i] = foo(arr[i])
    //     }
    //     return result
    // }
    //
    // const getStudentsScores = (arr) => {
    //     const result = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         result[i] = foo(arr[i])
    //     }
    //     return result;
    // }
    //
    // const getStudentsStatus = (arr) => {
    //     const result = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         result[i] = foo(arr[i])
    //     }
    //     return result
    // }
    // console.log(getStudentsStatus(students))

    // метод map
    const getMappedArray = (arr, func) => {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result[i] = func(arr[i])
        }
        return result
    }
    console.log(getMappedArray(students, getName));
    console.log(getMappedArray(students, (obj) => obj.scores));
    console.log(students.map((obj) => ({...obj, isStudent: true})))

    //Метод массива (Виктор: "Вариант расширения прототипа массива = харам" wtf???)
    function selfMadeMap(func) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result[i] = func(this[i])
        }
        return result
    }

    Array.prototype.selfMadeMap = selfMadeMap; // Array - это объект. В нативном JS объект встречается в трех сущностях - это null, массив, функция и сам объект. Вот этот Array - это функция, специальная функция конструктор, которая призвана создавать новые массивы
    console.log(students.selfMadeMap(getStudent))
    console.log([])
    console.log(new Array()) // вот так создавать массивы - не камильфо (устаревший способ)

    //метод filter
    const getFilteredArray = (arr, func) => { // func(arr[i]) => true || false
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i]) === true) {
                result.push(arr[i])
            }
        }
        return result
    }

    console.log(getFilteredArray(students, st => st.age >= 21))
    console.log(students.filter(st => st.age >= 21))

    // метод push
    const addElementToEndOfArray = (arr, el) => {
        arr[arr.length] = el;
        return arr.length
    }

    const arr = [1, 2, 3, 4, 5]

    console.log(addElementToEndOfArray(arr, 10 ))
    console.log(arr)

    return (
        <div>
            {}
        </div>
    );
};