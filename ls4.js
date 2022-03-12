// let answer = ' - '
// for (let i = 0; i < 5; i++) {
//   console.log(answer);
//   answer= '*' + answer

// }
// {+}{+}{+}{+}{+}{+}{+}{+}{+}{+}
// {+}{+}                     {+}
// {+}  {+}                   {+}  
// {+}    {+}                 {+} 
// {+}       {+}              {+} 
// {+}          {+}           {+}    
// {+}             {+}        {+} 
// {+}                {+}     {+} 
// {+}                   {+}  {+} 
// {+}                     {+}{+} 
// {+}{+}{+}{+}{+}{+}{+}{+}{+}{+}



let num = +prompt ("Kvadrat tomonlarini kirit" )

for (let i = 0; i < 8; i++) {
  let total = ""
   
  for (let j = 0; j < 8; j++) {
    if (i == 0 || i == 8 - 1 || j == 0 || j == 8 - 1 || j == i) {
      total += "{+}"
    } else {
      total += "   "

    }

  }
  console.log(total);
  total = ''

}