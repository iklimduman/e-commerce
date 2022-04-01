import axios from "axios";
import React from "react";

const BASE_URI = "https://randomuser.me/api/";

async function getRandomUser() {
    try {
        const data = await axios.get(BASE_URI + "?format=json");
        return data ;
    }
    catch (err) {
        console.log(err);
    }
}

export const Comments = () => {
    const randomData = getRandomUser() ;
    console.log(randomData) ;

    var userArr = [];

    Promise.resolve(randomData).then((value) => {
        var tempUser = {
            firstName : value.data.results[0].name.first ,
            lastName : value.data.results[0].name.last ,
            gender : value.data.results[0].gender , 
            age : value.data.results[0].dob.age ,
            img : value.data.results[0].picture.medium
        }
        userArr.push(tempUser) ;
    })

    console.log(userArr) ;

    return (
        <div>

        </div>
    )

}