console.log("=======================Задание 1 и задание 2========================");

{
  const randomArray = (length,max,min) =>{
    
    const newArray = [...Array(length)].fill().map(()=>Math.floor(Math.random() * (max - min + 1)) + min);
      newArray.sort(function(a,b){
        return a - b;
      });
      return newArray;
  }
  console.log('Всего элементов тут 60, максимальное число 100, а минимальное 1')
  console.log(randomArray(60,100,1));
  console.log('Всего элементов тут 40, максимальное число 0, а минимальное -5')
  console.log(randomArray(40,0,-5));
}



console.log("=======================Задание 3========================");

{
  const randomArray = (length,max,min,evenOrNot) =>{
    
    const newArray = [...Array(length)].fill().map(()=>Math.floor(Math.random() * (max - min + 1)) + min);
    newArray.sort(function(a,b){
      return a - b;
    });
      if (evenOrNot === "even") {
      evenArray = newArray.filter( function (num) {
        return num % 2 === 0 || num === 0;

      })
      const uniqEven = [...new Set(evenArray)]
      console.log(`Четные уникальные числа`+ ' ' + uniqEven); 
      return evenArray;
      } else if (evenOrNot === "odd") {
        oddArray = newArray.filter( function (num) {
          return num % 2 === 1;
        })
        const uniqOdd = [...new Set(oddArray)]
      console.log(`НЕЧетные уникальные числа`+ ' ' + uniqOdd); 
        return oddArray;
      }
      
  }
  
  console.log( ` Все Четные Числа:` + ' ' +randomArray(60,100,1,"even"));
  console.log( ` Все НЕЧетные Числа:` + ' ' +randomArray(60,100,1,"odd"));
  
}

console.log("=======================Задание 4========================");

function checkYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
     return year;
  } else {
     return false;
    }
}

function getYears(from,to) {
  const years = [];
  for (let i = from; i <= to; i++) {        
       years.push(i);
  }
  const result = [];

years.forEach(function(year) {
  if (checkYear(year))
  result.push(year);
});

return result;
}

console.log(getYears(1812,1945))





