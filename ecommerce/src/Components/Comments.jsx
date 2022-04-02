import axios from "axios";
import React from "react";
import styled from "styled-components";

const BASE_URI = "https://randomuser.me/api/";

async function getRandomUser() {
    var userArr = [] ;
    try {
        const data = await fetch(BASE_URI + "?results=4")
            .then((res) => res.json())
            .then((res) => console.log(res.results))
            .then((res) => {
                res.results.forEach(element => {
                    console.log("---") ;
                    console.log(element)
                });
            })
            .then((response) => {
                return response ;
            })
            .catch(err => console.log(err));
    }
    catch (err) {
        console.log(err);
    }
}

const ParseAndPush = (pushArr, randomData) => {
    console.log(randomData);
    Promise.resolve(randomData).then((value) => {
        var tempUser = {
            firstName: value.data.results[0].name.first,
            lastName: value.data.results[0].name.last,
            gender: value.data.results[0].gender,
            age: value.data.results[0].dob.age,
            img: value.data.results[0].picture.medium
        }
        pushArr.push(tempUser);
    })
}

async function fillArray(userArr) {

    for (var i = 0; i < 5; i++) {
        const randomData = getRandomUser();
        ParseAndPush(userArr, randomData);
    }
}

async function testFunction () {
    var randomUser = await getRandomUser() ;
    console.log(randomUser) ;
}

export const Comments = () => {

    var userArr = [];

    /* fillArray(userArr) ;*/

    testFunction() ;

    return (
        <div style={{ width: "100px", height: "100px" }}>
            {userArr.map((user) => (<span>{user.firstName}</span>))}
        </div>
    )

}