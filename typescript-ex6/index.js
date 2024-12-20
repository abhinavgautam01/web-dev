"use strict";
//union types : object
//must contain all the properties of one of the object type..!
let dog = {
    name: "Buddy",
    barks: true,
    wags: true
};
let cat = {
    name: "Bella",
    purrs: true
};
let hybridAnimal = {
    name: "Buddy",
    barks: true,
    wags: true,
    purrs: true
};
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        case "failed":
            return `Error ${state.code}`;
        case "success":
            return `Downloading ${state.response}`;
    }
}
let hybridAnimal2 = {
    name: "Max",
    color: "white",
    purrs: false,
    barks: true
};
