const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '09e9c01d8emsh05877fad47074f5p1b892djsna4b056d6f9ca',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};





// ================================
//  Dummy data to comment our later (start)
// ================================

// let myPost = {
// 	name : "Lee Sung Kyung",
// 	queryUrl : "search?q=%22Lee+Sung+Kyung%22",
// 	volume: 31799,
// 	followers : 3895734
// }

// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers);

// let graphData = [
// 	{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
//     {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// ]

// console.table(graphData);
// console.table(graphData[0].name);
// console.table(graphData[1].name);

// graphData.push(myPost);
// console.table(graphData);


// // ================================
// //  Copy paste to fetch request (start)
// // ================================

// console.log(graphData.length);

// // for loops are used to do forward 
// // to print each individual element in the graphdata array 
// for (let i = 0; i < graphData.length; i++) {
// 	console.log(graphData[i]);
// 	console.log(graphData[i].name);
// 	console.log(graphData[i].queryUrl);
// 	console.log(graphData[i].volume);
// }

// const topics = graphData.map(Object => {
// 	console.log(Object);
// 	console.log(Object.name);

// })

// let volumes = graphData.map(Object => {

// })

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

let graphData = [];
fetch(url,options).then(res=> res.json())
.then(data => {
	// console.log(graphData.length);

// for loops are used to do forward 
// to print each individual element in the graphdata array 
for (let i = 0; i < 25; i++) {
	graphData.push({
		"name" : data.trends[i].name,
		"volume" : data.trends[i].volume
	})
}

const topics = graphData.map(Object => {
	console.log(Object);
	console.log(Object.name);
	return Object.name;

})

let volumes = graphData.map(Object => {
	return Object.volume
})

	const myChart = document.getElementById('myChart');

 let barChart =  new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of Votes',
        data: volumes,
        borderWidth: 2,
        backgroundColor : [
        	'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor : [
        	'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        hoverBackgroundColor : [
        	'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ]
      }]
    },
    options: {
      indexAxis : "y",
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})

 