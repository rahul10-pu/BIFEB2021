var student={
    Name:"Gaurav",
    Address:"Google", 
    RollNumber: 12, 
    isGraduated: false, 
    details: function(){
        console.log(this.Name)
        console.log(this.Address)
        console.log(this.RollNumber)
        console.log(this.isGraduated)
    },
    getName: (LastName)=>{
            return Name+" "+LastName
    }
   };
// student.company="vkhhv"
   class Student{
       constructor(name, address, rollNumber,isGraduated){
           this.name=name
           this.address=address
           this.rollNumber=rollNumber
           this.isGraduated=isGraduated
       }
       details(){
        console.log(this.name)
        console.log(this.address)
        console.log(this.rollNumber)
        console.log(this.isGraduated)
    }
    getName(lastName){
        return this.name+" "+lastName
    }
   }

   var student1= new Student("rajveer","google",12,false)
   console.log(student1.name)
   student1.details()
   var fullname=student1.getName("Bighot")
console.log(fullname)