const customers = [
    {
        name: "Nick Walczak",
        email: "nickwalczak@gmail.com",
        purchases: ["apple", "orange"]
    },
    {
        name: "Jaime Dove",
        email: "jaimedove@gmail.com",
        purchases: ["pear", "strawberry"]
    },
    {
        name: "Miriam Kush",
        email: "miriamkush@gmail.com", 
        purchases: ["orange", "pear"]
    }
];

console.log("initial customers:", customers);   

customers.push({
    name: "Kaylee Harris",
    email: "kayleeharris@gmail.com",    
    purchases: ["apple", "strawberry"]
});

customers.shift({
    name: "Nick Walczak",
    email: "nickwalczak@gmail.com",
    purchases: ["apple", "orange"]
});

console.log("updated customers:", customers);

customers[0].email = "newemail@gmail.com";
customers[1].purchases=["grape", "melon"];

console.log("final customers:", customers);

customers.forEach(customer => {
    console.log(customer.name);
    console.log(customer.email);
    console.log(customer.purchases);
});