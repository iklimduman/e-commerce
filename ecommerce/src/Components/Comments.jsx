import axios from "axios";
import React from "react";

const BASE_URI = "https://random-data-api.com/api/";

async function getRandomUser() {
    try {
        const data = await axios.get(BASE_URI + "users/random_user?size=4");
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

export const Comments = () => {
    const randomData = getRandomUser();

    var userArr = [] ;
    const currentYear = new Date().getFullYear() ;

    Promise.resolve(randomData).then((value) => {
        value.data.forEach(element => {
            var randomUser = {
                firstName : element.first_name , 
                lastName : element.last_name , 
                gender : element.gender , 
                age : currentYear - parseInt(element.date_of_birth.split("-")[0])
            }
            userArr.push(randomUser) ;
        });
    });

    console.log(userArr) ;

    return (
        <div>

        </div>
    )

}