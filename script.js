const dotenv = require('dotenv');
const connection = require('./config/connection');
dotenv.config();

const Article = require("./models/Article");
const Comment = require("./models/Comment");

connection();

const article = async(title, text) => {
    const article = new Article({ title, text})
    const output = await article.save();

    console.log(output);
}

const comment = async(name, text, article) => {
    const comment = new Comment({ name, text, article })
    const output = await comment.save();

    console.log(output);
}

const comments = async() => {
    const output = await Comment.find().populate("article").select();

    console.log(output);
}

// Articles ============================================================
// article("Karas", "Užpulta Ukraina.");
// article("KITM Egzaminas", "Kovo gale, rengiamas egzaminas.");
// article("JavaScript", "Greitu metu išeis ES22");
// article("Pascal", "Mirštanti programavimo kalba.");
// article("Straipsnis", "Straipsnio turinys");

// Comments ============================================================
// comment("Agnė", "Senai žinojau.", "6218fd7a905215c4b9023688");
// comment("Petras", "Nenaujiena.", "6218fd7a905215c4b902368a");
// comment("Juozas", "Senas straipsnis.", "6218fd7a905215c4b902368b");
// comment("Jolita", "Ir ką?", "6218fd7a905215c4b9023688");
// comment("Martynas", "Nesąmonės.", "6218fd7a905215c4b902368a");
// comment("Ervinas", "Nieko panašaus.", "6218fd7a905215c4b902368b");
// comment("Aušra", "Taip taip, patikėjau..", "6218fd7a905215c4b9023688");
// comment("Mindaugas", "Nebūna taip.", "6218fd7a905215c4b902368a");
// comment("Ona", "Šaunu!", "6218fd7a905215c4b902368a");
// comment("Vytautas", "Skaičiau jau apie tai.", "6218fd7a905215c4b9023688");
// comment("Kęstas", "Bus dar geriau!", "6218fd7a905215c4b902368a");
// comment("Andrius", "Nepasisekė..", "6218fd7a905215c4b902368b");
// comment("Jolanta", "Būna ir įdomiau.", "6218fd7a905215c4b9023688");
// comment("Tomas", "Visiškai nedomina..", "6218fd7a905215c4b902368a");
// comment("Mantas", "Seni bajeriai", "6218fd7a905215c4b902368b");
// comment("Kazys", "Nejuokaukit", "6218fd7a905215c4b9023688");

// Get Articles
comments();