//Задание 1
{
console.log("==================Задание 1====================");

const students = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const failedstudents = ['Сидоров','Смирнов','Попов'];

const getStudents = function(students,failedstudents) {
    const filter =students.reduce ( (acc,item)=>{
        if (!failedstudents.includes(item)) {
            acc.push(item);
        } 
        return acc;
       
    }, []);
    return filter;
}
console.log('Список сдавших экзамены студентов :'  + getStudents(students,failedstudents))
console.log("==================Конец задания====================");
}

//Задание 2
{
    console.log("==================Задание 2====================");

    const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    const getAverageValue = ()=>{
        let reduceResult = allCashbox.reduce((acc,elem)=>{
            return acc + elem;
        },0)
        
        const itog = reduceResult / allCashbox.length;
        return Math.floor(itog);
    }
    console.log(getAverageValue(allCashbox));
    console.log("==================Конец задания====================");

}



    //Задание 2
{


    console.log("==================Задание 3====================");

    const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    const addPrefix = (names, prefix) => {
        for (i in names) {
            names[i] = prefix + ' ' + names[i];
          }
          return names;
    }
      
      console.log(addPrefix(names, "Mr"));
      console.log("==================Конец задания====================");

}




