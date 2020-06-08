var fruits = ['apple', 'banana', 'strawberry'];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("обхождане на елементите на масива последователно:");
for (var i = 0; i < fruits.length; i++) {
	console.log(`Елемент ${i}: ${fruits[i]}`);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("\nобхождане на елементите на масива в обратен ред:");
for (var i = fruits.length-1; i >= 0; i--) {
	console.log(`Елемент ${i}: ${fruits[i]}`);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("\nсъздаване на двумерен масив:");
var matrix = [
	[ 'а', 'б', 'в' ],
	[ 'г', 'д', 'е' ],
	[ 'ж', 'з', 'и' ],
];
console.log("matrix:", matrix);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("\nдостъп до елемент от двумерен масив:");
console.log("row 0, col 2: ", matrix[0][2]);
console.log("row 1, col 1: ", matrix[1][1]);
console.log("row 2, col 0: ", matrix[2][0]);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("\nобхождане на елементите на двумерен масив (по редове и колони)");
var rows = matrix.length;
var cols = matrix[0].length;

for (var i = 0; i < rows; i++) {
	console.log("row:", i);
	for (var j = 0; j < cols; j++) {
		console.log( matrix[i][j] + ',');
	}
}