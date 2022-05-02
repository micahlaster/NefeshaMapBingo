var winners = [
    ['a1','b1','c1','d1','e1'],
    ['a2','b2','c2','d2','e2'],
    ['a3','b3','c3','d3','e3'],
    ['a4','b4','c4','d4','e4'],
    ['a5','b5','c5','d5','e5'],
	['a1','a2','a3','a4','a5'],
    ['b1','b2','b3','b4','b5'],
    ['c1','c2','c3','c4','c5'],
    ['d1','d2','d3','d4','d5'],
    ['e1','e2','e3','e4','e5'],
    ['a1','b2','c3','d4','e5'],
    ['a5','b4','c3','d2','e1']
	];
var selected = [];
function toggle(id) {
	var marker = document.getElementById(id);
	if(marker.style.display === '')
	{
		marker.style.display = 'block';
		selected.push(id);
	}else{
		marker.style.display = '';
		var index = selected.findIndex(v => v === id);
		selected.splice(index,1);
	}
	bingoCount()
}
function bingoCount() {
	var bingos = 0;
	for(let i = 0; i < winners.length; i++)
	{
		var contains = winners[i].every(element => {
			return selected.indexOf(element) !== -1;
		});
		if(contains){
			bingos=bingos+1;
		}
	}
	var bingoTotal = document.getElementById("bingos");
	bingoTotal.innerHTML = bingos;
}