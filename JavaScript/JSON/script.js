let jsonRes = '{"fact":"Lions are the only cats that live in groups, called prides. Every female within the pride is usually related.","length":109}'

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact); 

let student = {
    name : 'Aftab',
    marks : 85,
};

let validStudent = JSON.stringify(student);
console.log(validStudent);