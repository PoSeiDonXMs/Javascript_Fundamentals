const user = {
    username : "madhav",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }
} 
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()  // basically the context has been changes matlab values change kar di to output bhi change ho jaayega