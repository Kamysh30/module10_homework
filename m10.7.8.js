let myMap = new Map();
myMap.set('mercedes','e200');
myMap.set('audi','A5');
myMap.set('BMW','325i');
myMap.set('Volkswagen','passat');
myMap.set('Skoda','octavia');
for(let car of myMap) {
    console.log(`Ключ = ${car[0]}, Значение = ${car[1]}`);
}

// Забыли закрывающую скобку после for. В остальном задание выполнено верно.