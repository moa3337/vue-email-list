

casual_eMail = [];

for (let i = 0; i < 10; i++) {
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
            casual_eMail.push(result.data.reponse);

            console.log(casual_eMail);
            if (casual_eMail.length >= 10) {
            }
        });
};