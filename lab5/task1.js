class person {
  constructor(name, surname, gender, dob) {
    this.Name = name.toUpperCase();
    this.Surname = surname.toUpperCase();
    this.Gender = gender.toUpperCase();
    this.Dob = dob;
  }
}



const getFirstLetters = (string, isConsonants) => {
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

const nameFormatter = (string) =>
   (getFirstLetters(string, true)
  + getFirstLetters(string, false)
  + "XXX").slice(0,3);

const dateFormatter = (date, gender) => {
  const months = { 1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"H",
                   7:"L", 8:"M", 9:"P", 10:"R", 11:"S", 12:"T"}
  const dateArray  = date.split("/");
  return dateArray[2].slice(-2)
  + months[dateArray[1]]
  + (gender == "M" ? dateArray[1].length == 2 ? dateArray[0] : "0" + dateArray[1] : parseInt(dateArray[0]) + 40);
}

const getFiscalCode = (human) =>
    nameFormatter(human.Surname)
  + nameFormatter(human.Name)
  + dateFormatter(human.Dob, human.Gender);

function TestLogger(human) {
  console.log(human);
  console.log(getFiscalCode(human));
}

TestLogger(new person("Matt", "Edabit", "M", "1/1/1900"));		//dbtmtt00a01
TestLogger(new person("Helen", "Yu", "F", "1/12/1950"));		//yuxhln50t41
TestLogger(new person("Sam", "Newmenn", "M", "21/5/1728"));		//nmnsma28e05
TestLogger(new person("Cassandra", "Comenada", "F", "08/11/2001"))	//cndcsn01s48
