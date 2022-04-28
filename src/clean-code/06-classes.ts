(()=>{
 
    type Gender = 'M'|'F';

class Person {
        constructor(
           public name:string, 
           public gender:Gender, 
           public birthdate:Date){}

    }
 
    const newPerson = new Person('Alex','M', new Date('1985-06-01')); 
    console.log({newPerson});
})();