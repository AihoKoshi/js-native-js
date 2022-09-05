import React from "react";
// типы данных
// number, string, boolean, null, undefined, NaN, BigInt, Infinity, Symbol
//проверить тип данных можно оператором typeof, но можно и с помощью Number.isNaN(NaN) или Number.idFinite(number: 45)
// еде есть типы
// object, array, function
// {} - это литрал объекта, синтаксис для создания нового объекта.
// новый объект также можно создать при помощи вот такой вот функции - new Object() - это олдскульный способ, еще применяется в ООП

export const Main = () => {
    console.log(typeof 7)
    console.log(Number.isNaN(NaN))
    console.log(Number.isFinite(45))
    console.log(Array.isArray([]))

    let user = {
        name: 'Alex',
        age: 23,
        isStudent: true,
    }

    let newUser = user;
    newUser.name = 'Bob';
    console.log(user)

    // user => copy the user => change the copy of user =>  use the copy of user with the changes
    let copyUser = {};
    copyUser.name = user.name;
    copyUser.age = user.age;
    copyUser.isStudent = user.isStudent;
    copyUser.name = 'Martin';
    copyUser.age = 18;
    copyUser.isStudent = false;
    console.log(user)
    console.log(copyUser)
    console.log(user === copyUser)
    const copyOfCopyUser = {...copyUser}; // для создания копии объекта есть более олдскульный способ
                                            // например Object.assign() - позволяет делать копии объектов
                                            // есть вариант с JSON - погуглить
                                            // мы будем использовать самый удобный способ - спред оператор - {...}
    copyOfCopyUser.name = 'Jessica';
    copyOfCopyUser.age = 25;
    copyOfCopyUser.isStudent = false;
    console.log(copyOfCopyUser)

    // const users = [
    //     {name: 'Bob'},
    //     {name: 'Alex'},
    //     {name: 'Ann'},
    //     {name: 'Marry'},
    //     // name: 'Donald'},
    // ]

    // const copyUsers = [...users, {name: 'Donald'}];
    // console.log(copyUsers)

    // const copyUsers = users.map((user) => {
    //     if (user.name === 'Bob') {
    //         return {...user, name: 'Helge'}
    //     }
    //     return user
    // })
    // const copyUsers = users.map((user) => user.name === 'Bob' ? {...user, name: 'Helge'} : user)
    // console.log(copyUsers)

    // const users = [
    //     {
    //         name: 'Bob',
    //         friends: [],
    //     },
    //     {
    //         name: 'Alex',
    //         friends: [],
    //     },
    //     {
    //         name: 'Donald',
    //         friends: [],
    //     },
    //     {
    //         name: 'Ann',
    //         friends: [],
    //     },
    // ]

    // const copyUsers = [...users] // поверхностная копия
    // const deepCopyUsers = users.map((u) => ({...u, friends: [...u.friends]})) // глубокая копия
    // console.log(deepCopyUsers)
    // console.log(copyUsers)

    const users2 = [
        {
            name: 'John',
            age: 20,
            friends: [
                {
                    name: 'Bob',
                    age: 21.
                },
                {
                    name: 'Ann',
                    age: 22,
                }
            ]
        },
        {
            name: 'Bob',
            age: 21,
            friends: [
                {
                    name: 'John',
                    age: 20,
                },
                {
                    name: 'Ann',
                    age: 22,
                }
            ]
        },
        {
            name: 'Ann',
            age: 22,
            friends: [
                {
                    name: 'Bob',
                    age: 21,
                },
                {
                    name: 'John',
                    age: '20',
                }
            ]
        },
    ];
    const copyUsers2 = [...users2];
    const deepCopyUsers2 = users2.map((m) => ({...m, friends: [...m.friends]}));

    const addFriend = users2.map((u) => (u.name === 'John' ? {...u, friends: [u.friends, {name:'Stephan', age: 23}]} : u));
    console.log(addFriend);
    // console.log(copyUsers2[0] === users2[0]);
    // console.log(deepCopyUsers2[0] === users2[0]);

    return (
        <>

        </>
    )
}