class Person {
  constructor(name, surname, gender, dob) {
    this.Name = name.toUpperCase();
    this.Surname = surname.toUpperCase();
    this.Gender = gender.toUpperCase();
    this.Dob = dob;
  }
}



const GetFirstLetters = (string, isConsonants) => {
  var vowels = ["A","E","I","O","U"];
  var firstLetters = "";
  for(var i in string) {
    if(firstLetters.length > 3) {
      firstLetters = firstLetters[0] + firstLetters[2] + firstLetters[3]
      break;
    }
    if (isConsonants && vowels.indexOf(string[i]) == -1) {
      firstLetters = firstLetters + string[i];
    }
    else if(!isConsonants && vowels.indexOf(string[i]) >= 0)
      firstLetters = firstLetters + string[i];
  }
  return firstLetters;
}

const NameSurnameFormatter = (string) =>
   (GetFirstLetters(string, true)
  + GetFirstLetters(string, false)
  + "XXX").slice(0,3);

const DobGenderFormatter = (dob, gender) => {
  const months = { 1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"H",
                   7:"L", 8:"M", 9:"P", 10:"R", 11:"S", 12:"T"}
  const dobArray  = dob.split("/");
  return dobArray[2].slice(-2)
  + months[dobArray[1]]
  + (gender == "M" ? dobArray[1].length == 2 ? dobArray[0] : "0" + dobArray[1] : parseInt(dobArray[0]) + 40);
}

const GetFiscalCode = (human) =>
    NameSurnameFormatter(human.Surname)
  + NameSurnameFormatter(human.Name)
  + DobGenderFormatter(human.Dob, human.Gender);

function TestLogger(human) {
  console.log(human);
  console.log(GetFiscalCode(human));
}

TestLogger(new Person("Matt", "Edabit", "M", "1/1/1900"));		//dbtmtt00a01
TestLogger(new Person("Helen", "Yu", "F", "1/12/1950"));		//yuxhln50t41
TestLogger(new Person("Sam", "Newmenn", "M", "21/5/1728"));		//nmnsma28e05
TestLogger(new Person("Cassandra", "Comenada", "F", "08/11/2001"))	//cndcsn01s48
