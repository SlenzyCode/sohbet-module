const { Hercai } = require("hercai");
const herc = new Hercai();

const messages = {
    "sa": 'Aleykümselam, nasılsın?',
    "merhaba": 'Merhaba, nasılsın?',
    "günaydın": 'Günaydın, nasılsın?',
    "nbr": 'İyidir senden naber?',
    "naber": 'İyidir senden naber?',
    "adın": 'Benim adım SlenzyCode senin adın nedir?',
    "evet": "hmm.",
    "hayr": "hmm.",
    "ne yapıyorsun": 'İyiyim sen?',
    "seni seviyorum": 'Bende seni seviyorum.',
    "tatlısın": 'Ayy, sende çok tatlısın.',
    "iyi": 'Güzel.',
    "kurucu": 'Benim sahibim "slenzycode".',
    "yapımcı": 'Benim yapımcım "slenzycode".',
};

exports.gpt = function (soru) {
    return new Promise(async (resolve, reject) => {
        if (!soru) {
            return console.log("Lütfen, bir soru giriniz!");
        }

        const res = messages[soru.toLowerCase()];
        if (res) {
            resolve(res);
        } else {
            try {
                const response = await herc.question({ model: "v3-beta", content: soru });
                resolve(response.reply);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        }
    });
};
