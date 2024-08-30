function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs textarea');
      input = JSON.parse(input.value);
      let avgSalary = 0;
      let bestSalary = 0;
      let bestRestaurant = '';
      let bestAvg = 0;
      

      let obj = {};

      for (let restaurantName of input) {
         let [restaurant, workers] = restaurantName.split(' - ');
         let salary = 0;
         let workersCount = 0;

         if(!obj.hasOwnProperty(restaurant)) {
         obj[restaurant] = {};
         }

         for (let worker of workers.split(', ')) {  
            workersCount++;
            let workerName = worker.split(' ')[0];
            let workerSalary = Number(worker.split(' ')[1]);

            obj[restaurant][workerName] = workerSalary;

            if(workerSalary > bestSalary){
               bestSalary = workerSalary;
            }
            salary += Number(workerSalary); 
         } 
         avgSalary = salary / workersCount;

         if(avgSalary > Number(bestAvg)){
            bestRestaurant = restaurant;
            bestAvg = avgSalary;
         }
      }

     let array = Object.entries(obj[bestRestaurant])
     let sorted = array.sort((a, b) => b[1] - a[1])
     let restaurantBestSalary = sorted[0][1]
     let restaurantBestAvg = 0;

     let workersArr = [];
     for (const el of sorted) {
      workersArr.push(`Name: ${el[0]} With Salary: ${Number(el[1])}`);
      restaurantBestAvg += Number(el[1]);
     }

     restaurantBestAvg = restaurantBestAvg / sorted.length

     let restaurantElement = document.querySelector('#outputs #bestRestaurant p');
     restaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${restaurantBestAvg.toFixed(2)} Best Salary: ${restaurantBestSalary.toFixed(2)}`
     let workersElement = document.querySelector('#outputs #workers p');
     workersElement.textContent = workersArr.join(' ')
   }
}