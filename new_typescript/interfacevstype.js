//difference between type aliases and interfaces-all feature of interface are available in type , the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable
var hello = { dbId: 546, email: "h@lnaad", userId: 166, githubToken: "github",
    role: "admin",
    startTrail: function () {
        return "trial";
    },
    getDiscount: function (name, off) {
        return 10;
    }
};
hello.email = "kasbdda.com";
hello.dbId == 33;
