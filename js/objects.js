const myInfo = {
    name: "Bhaskar Neupane",
    address: "Bhaktapur",
    emails: ["bhaskar.neupane.58@gmail.com"],
    interests: ["photography", "programming"],
    education: [
        {
            name: "Little Angels English School",
            enrolledDate: 2005
        },
        {
            name: "British Model College",
            enrolledDate: 2018
        }
    ]
}


for (let i = 0; i < myInfo.education.length; i++) {
    const educationDetail = myInfo.education[i];

    console.log("Name:", educationDetail["name"], "Date:", educationDetail["enrolledDate"])
}


