function friends(a,b){
    this.city=a;
    this.skill=b;
    this.talent=function(){
        console.log(this.skill)
    }
 
 }
 var amar=new friends("Goa","singer")
 var akbar=new friends("Mumbai","chef")
 var anthony=new friends("Kashmir","magician")
 
 console.log(amar,akbar,anthony)
 
 amar.talent.call(akbar)
 anthony.talent.call(amar)
 akbar.talent.call(anthony)
 
 