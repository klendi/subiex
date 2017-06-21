try {

	function getRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function generateLoremText(num) {
		var points = [',', '.', '?', '!', '?!']
		var wordsArray = []

		var loremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, sunt laborum eum adipisci odio doloribus sit officia expedita. Nihil porro hic, sint voluptate unde accusantium molestias tenetur, laudantium reprehenderit amet dolore voluptas? Laudantium sunt autem aliquam nesciunt maxime nostrum ipsum alias doloribus. Numquam animi veniam impedit recusandae, deserunt facere. Debitis.";

		var word = ""

		for (var i = 0; i < num; i++) {
			if (i === 1) {
				word += "Lorem"
				word += " ipsum "
			}

			if (i > 2) {
				var wArray = []
				wArray = loremText.split('')
				word += wArray[getRandom(2, num)]
				var rand = getRandom(1, 30)
				if (rand === 10) {
					word += points[getRandom(0, points.length)]
				}
			}
		}

		return word;
	}
}
catch (ex) {
	console.log('Error at lorem ipsum generator ' + ex.stack)
}