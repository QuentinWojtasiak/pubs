var datas = require("../mocks/pubs.json");

function listPub() {
    return datas;
}

function listPubOpen(day) {
    var pubs=[];
    datas.forEach(element => {
        if(element.openDays.includes(day)){
            pubs.push(element);}
    });
    return pubs;
}

module.exports = {
    listPub: listPub,
    listPubOpen: listPubOpen
};