define(function (require) {

	//loading bootstrap 3 and fuel 3
	require('bootstrap');
	require('fuelux');

	//loading boostrap 2 and fuel 3 components individually
	require('fuelux2/loader');


	//FUELUX V3 TREE INSTANTIATED
	$('#myTree').tree({
		folderSelect: false,
		dataSource: function (parentData, callback) {
			callback({
				data: [
					{
						"name": "Ascending and Descending",
						"type": "folder",
						"attr": {
							"id": "folder1"
						}
					},
					{
						"name": "Sky and Water I (with custom icon)",
						"type": "item",
						"attr": {
							"id": "item1",
							"data-icon": "glyphicon glyphicon-file"
						}
					},
					{
						"name": "Drawing Hands",
						"type": "folder",
						"attr": {
							"id": "folder2"
						}
					},
					{
						"name": "Waterfall",
						"type": "item",
						"attr": {
							"id": "item2"
						}
					}
				]
			});
		}
	});

	//FUELUX V2 TREE INSTANTIATED

	var fuel3Constructor = $.fn.tree;
	$.fn.tree.noConflict();
	$('#ex-tree').tree({
		dataSource: {
			data: function(parentData, callback){
				callback({
					data: [
						{ name: 'Test Folder 1', type: 'folder', additionalParameters: { id: 'F1' } },
						{ name: 'Test Folder 2', type: 'folder', additionalParameters: { id: 'F2' } },
						{ name: 'Test Item 1', type: 'item', additionalParameters: { id: 'I1' } },
						{ name: 'Test Item 2', type: 'item', additionalParameters: { id: 'I2' } }
					]
				})
			}
		},
		loadingHTML: '<div class="static-loader">Loading...</div>',
		multiSelect: true,
		cacheItems: true
	});

	$.fn.tree = fuel3Constructor;

	//FUELUX V3 TREE INSTANTIATED
	$('#myTree2').tree({
		folderSelect: false,
		dataSource: function (parentData, callback) {
			callback({
				data: [
					{
						"name": "Ascending and Descending",
						"type": "folder",
						"attr": {
							"id": "folder1"
						}
					},
					{
						"name": "Sky and Water I (with custom icon)",
						"type": "item",
						"attr": {
							"id": "item1",
							"data-icon": "glyphicon glyphicon-file"
						}
					},
					{
						"name": "Drawing Hands",
						"type": "folder",
						"attr": {
							"id": "folder2"
						}
					},
					{
						"name": "Waterfall",
						"type": "item",
						"attr": {
							"id": "item2"
						}
					}
				]
			});
		}
	});

	fuel3Constructor = $.fn.checkbox;
	$.fn.checkbox.noConflict();
	$('#checkbox2').checkbox();

	$.fn.checkbox = fuel3Constructor;

	//var bootstrap2Constructor = $.fn.dropdown;
	//$.fn.dropdown.noConflict();
	//$('#combobox3').dropdown();
	$('#combobox3').combobox();
	//$.fn.dropdown = bootstrap2Constructor;

	fuel3Constructor = $.fn.combobox;
	$.fn.combobox.noConflict();
	$('#combobox2').combobox();

	$.fn.combobox = fuel3Constructor;

	//FUEL 2 WIZARD
	fuel3Constructor = $.fn.wizard;
	$.fn.wizard.noConflict();
	$('#MyWizard').wizard();

	$.fn.wizard = fuel3Constructor;

	//FUEL 2 PILLBOX
	fuel3Constructor = $.fn.pillbox;
	$.fn.pillbox.noConflict();
	$('#MyPillbox2').pillbox();

	$.fn.pillbox = fuel3Constructor;

	//FUEL 3 REPEATER
	var data = {
		infiniteScroll: {
			content:	'<p>Hodor, hodor. Hodor. Hodor, hodor hodor hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor - hodor hodor hodor? Hodor hodor HODOR! Hodor hodor, hodor. Hodor hodor... Hodor hodor hodor hodor?! Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor hodor! Hodor hodor - hodor... Hodor hodor hodor, hodor, hodor hodor. Hodor hodor - hodor; hodor hodor hodor hodor?! Hodor, HODOR hodor, hodor hodor? Hodor! Hodor hodor, hodor, hodor. Hodor hodor? </p>' +
				'<p>Hodor hodor HODOR! Hodor hodor hodor - hodor, hodor, hodor hodor. Hodor. Hodor hodor - hodor?! Hodor HODOR hodor, hodor hodor. Hodor. Hodor hodor - hodor HODOR hodor, hodor hodor hodor! Hodor. Hodor hodor hodor hodor hodor?! Hodor hodor HODOR! Hodor hodor hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor, hodor, hodor hodor. </p>' +
				'<p>Hodor hodor hodor - hodor? Hodor hodor hodor hodor hodor hodor! Hodor! Hodor hodor, hodor, hodor. Hodor hodor; hodor hodor - hodor. Hodor. Hodor hodor hodor. Hodor! Hodor hodor, hodor - hodor? </p>' +
				'<p>Hodor hodor HODOR! Hodor hodor hodor; hodor hodor hodor! Hodor. Hodor hodor... Hodor hodor hodor hodor. Hodor, hodor, hodor. Hodor hodor - HODOR hodor, hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor - hodor. Hodor hodor, hodor. Hodor hodor?! Hodor hodor... Hodor hodor hodor - hodor. Hodor. </p>' +
				'<p>Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor HODOR hodor, hodor hodor hodor, hodor. Hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor? Hodor hodor - hodor... Hodor hodor hodor?! Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! </p>',
			delays: ['300', '600', '900', '1200']
		},
		repeater: {
			listData: [
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				},
				{
					appearance: 'small, usually furry, domesticated carnivorous mammal',
					commonName: 'cat',
					latinName: 'Felis catus',
					sound: 'Meow meow!'
				},
				{
					appearance: 'four-legged mammal with large head',
					commonName: 'cow',
					latinName: 'Bos primigenius taurus',
					sound: 'Moo moo!'
				},
				{
					appearance: 'four-legged, highly varied appearance based on breed',
					commonName: 'dog',
					latinName: 'Canis lupus familiaris',
					sound: 'Woof woof!'
				},
				{
					appearance: 'feathered, waddles on two webbed feet',
					commonName: 'mallard',
					latinName: 'Anas platyrhynchos',
					sound: 'Quack quack!'
				},
				{
					appearance: 'short-haired, four-legged, curly-tailed mammal',
					commonName: 'pig',
					latinName: 'Sus scrofa domesticus',
					sound: 'Oink oink!'
				},
				{
					appearance: 'large ears and big bushy tail',
					commonName: 'fox',
					latinName: 'Vulpes vulpes',
					sound: '???'
				}
			]
		},
		tree: [
			{
				"name": "Aquire",
				"type": "folder",
				"dataAttributes": { "id": "aquire-folder" },
				"children": [
					{
						"name": "POS Receipt",
						"type": "item"
					},
					{
						"name": "Confirm Subscription",
						"type": "item"
					},
					{
						"name": "Thanks for Signing Up",
						"type": "item"
					}
				]
			},
			{
				"name": "Onboard",
				"type": "folder"
			},
			{
				"name": "Engage",
				"type": "folder",
				"dataAttributes": { "id": "engage-folder" },
				"children":[
					{
						"name": "Abandoned Cart",
						"type": "folder",
						"children": [
							{
								"name": "Archive",
								"type": "folder"
							}
						]
					},
					{
						"name": "Transactional",
						"type": "folder",
						"children": [
							{
								"name": "Archive",
								"type": "folder"
							}
						]
					}
				]
			},
			{
				"name": "Retain",
				"type": "folder"
			}
		]
	};

	function initRepeater() {
		// simulate network latency
		var loadDelays = ['300', '600', '900', '1200'];

		// list view setup
		var list = function (options, callback) {
			// build dataSource based with options
			var resp = {
				count: data.repeater.listData.length,
				items: [],
				page: options.pageIndex
			};

			// get start and end limits for JSON
			var i, l;
			resp.pages = Math.ceil(resp.count / (options.pageSize || 50));

			i = options.pageIndex * (options.pageSize || 50);
			l = i + (options.pageSize || 50);
			l = (l <= resp.count) ? l : resp.count;
			resp.start = i + 1;
			resp.end = l;

			// setup columns for list view
			resp.columns = [
				{
					label: 'Common Name',
					property: 'commonName',
					sortable: true
				},
				{
					label: 'Latin Name',
					property: 'latinName',
					sortable: true
				},
				{
					label: 'Appearance',
					property: 'appearance',
					sortable: true
				},
				{
					label: 'Sound',
					property: 'sound',
					sortable: true
				}
			];

			// add sample items to datasource
			for (i; i < l; i++) {
				// from data.js
				resp.items.push(data.repeater.listData[i]);
			}

			//if(options.search){
			//resp.items = [];
			//}

			// call and simulate latency
			setTimeout(function () {
				callback(resp);
			}, loadDelays[Math.floor(Math.random() * 4)]);
		};


		// thumbnail view setup
		var thumbnail = function (options, callback) {
			var sampleImageCategories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nature', 'technics', 'transport'];
			var numItems = 200;

			// build dataSource based with options
			var resp = {
				count: numItems,
				items: [],
				pages: (Math.ceil(numItems / (options.pageSize || 30))),
				page: options.pageIndex
			};

			// get start and end limits for JSON
			var i, l;
			i = options.pageIndex * (options.pageSize || 30);
			l = i + (options.pageSize || 30);
			resp.start = i + 1;
			resp.end = l;

			// add sample items to datasource
			for (i; i < l; i++) {
				resp.items.push({
					name: ('Thumbnail ' + (i + 1)),
					src: 'http://lorempixel.com/65/65/' + sampleImageCategories[Math.floor(Math.random() * 9)] + '/?_=' + i
				});
			}

			//if(options.search){
			//resp.items = [];
			//}

			// call and simulate latency
			setTimeout(function () {
				callback(resp);
			}, loadDelays[Math.floor(Math.random() * 4)]);
		};

		// initialize repater
		$('#myRepeater').repeater({
			dataSource: function (options, callback) {
				if (options.view === 'list') {
					list(options, callback);
				} else if (options.view === 'thumbnail') {
					thumbnail(options, callback);
				}
			},
			list_selectable: 'multi',
			list_noItemsHTML: 'no items found',
			thumbnail_noItemsHTML: 'no items found',
			thumbnail_infiniteScroll: {
				hybrid: true
			}
		});
	}
	initRepeater();


	// FUEL UX 2 DATAGRID

	var StaticDataSource = function (options) {
		this._formatter = options.formatter;
		this._columns = options.columns;
		this._delay = options.delay || 0;
		this._data = options.data;
	};

	StaticDataSource.prototype = {

		columns: function () {
			return this._columns;
		},

		data: function (options, callback) {
			var self = this;

			setTimeout(function () {
				var data = $.extend(true, [], self._data);

				// SEARCHING
				if (options.search) {
					data = _.filter(data, function (item) {
						var match = false;

						_.each(item, function (prop) {
							if (_.isString(prop) || _.isFinite(prop)) {
								if (prop.toString().toLowerCase().indexOf(options.search.toLowerCase()) !== -1) match = true;
							}
						});

						return match;
					});
				}

				// FILTERING
				if (options.filter) {
					data = _.filter(data, function (item) {
						switch(options.filter.value) {
							case 'lt5m':
								if(item.population < 5000000) return true;
								break;
							case 'gte5m':
								if(item.population >= 5000000) return true;
								break;
							default:
								return true;
								break;
						}
					});
				}

				var count = data.length;

				// SORTING
				if (options.sortProperty) {
					data = _.sortBy(data, options.sortProperty);
					if (options.sortDirection === 'desc') data.reverse();
				}

				// PAGING
				var startIndex = options.pageIndex * options.pageSize;
				var endIndex = startIndex + options.pageSize;
				var end = (endIndex > count) ? count : endIndex;
				var pages = Math.ceil(count / options.pageSize);
				var page = options.pageIndex + 1;
				var start = startIndex + 1;

				data = data.slice(startIndex, endIndex);

				if (self._formatter) self._formatter(data);

				callback({ data: data, start: start, end: end, count: count, pages: pages, page: page });

			}, this._delay)
		}
	};

	var dataSource = new StaticDataSource({
		columns: [
			{
				property: 'toponymName',
				label: 'Name',
				sortable: true
			},
			{
				property: 'countrycode',
				label: 'Country',
				sortable: true
			},
			{
				property: 'population',
				label: 'Population',
				sortable: true
			},
			{
				property: 'fcodeName',
				label: 'Type',
				sortable: true
			}
		],
		data: [{
			"fcodeName": "capital of a political entity",
			"toponymName": "Mexico City",
			"countrycode": "MX",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Mexico City",
			"wikipedia": "",
			"lng": -99.12766456604,
			"fcode": "PPLC",
			"geonameId": 3530597,
			"lat": 19.428472427036,
			"population": 12294193
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Manila",
			"countrycode": "PH",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Manila",
			"wikipedia": "",
			"lng": 120.9822,
			"fcode": "PPLC",
			"geonameId": 1701668,
			"lat": 14.6042,
			"population": 10444527
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Dhaka",
			"countrycode": "BD",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Dhaka",
			"wikipedia": "",
			"lng": 90.40743827819824,
			"fcode": "PPLC",
			"geonameId": 1185241,
			"lat": 23.710395616597037,
			"population": 10356500
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Seoul",
			"countrycode": "KR",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Seoul",
			"wikipedia": "",
			"lng": 126.977834701538,
			"fcode": "PPLC",
			"geonameId": 1835848,
			"lat": 37.5682561388953,
			"population": 10349312
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Jakarta",
			"countrycode": "ID",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Jakarta",
			"wikipedia": "",
			"lng": 106.84513092041016,
			"fcode": "PPLC",
			"geonameId": 1642911,
			"lat": -6.214623197035775,
			"population": 8540121
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Tokyo",
			"countrycode": "JP",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Tokyo",
			"wikipedia": "",
			"lng": 139.69171,
			"fcode": "PPLC",
			"geonameId": 1850147,
			"lat": 35.6895,
			"population": 8336599
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Taipei",
			"countrycode": "TW",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Taipei",
			"wikipedia": "",
			"lng": 121.531846,
			"fcode": "PPLC",
			"geonameId": 1668341,
			"lat": 25.047763,
			"population": 7871900
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Beijing",
			"countrycode": "CN",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Beijing",
			"wikipedia": "",
			"lng": 116.397228240967,
			"fcode": "PPLC",
			"geonameId": 1816670,
			"lat": 39.9074977414405,
			"population": 7480601
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Bogotá",
			"countrycode": "CO",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Bogotá",
			"wikipedia": "",
			"lng": -74.08175468444824,
			"fcode": "PPLC",
			"geonameId": 3688689,
			"lat": 4.609705849789108,
			"population": 7102602
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Hong Kong",
			"countrycode": "HK",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Hong Kong",
			"wikipedia": "",
			"lng": 114.157691001892,
			"fcode": "PPLC",
			"geonameId": 1819729,
			"lat": 22.2855225817732,
			"population": 7012738
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Bangkok",
			"countrycode": "TH",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "The City of Angels",
			"wikipedia": "",
			"lng": 100.501444,
			"fcode": "PPLC",
			"geonameId": 1609350,
			"lat": 13.753979,
			"population": 5104476
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Singapore",
			"countrycode": "SG",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Singapore",
			"wikipedia": "",
			"lng": 103.850069046021,
			"fcode": "PPLC",
			"geonameId": 1880252,
			"lat": 1.28966883937733,
			"population": 3547809
		}, {
			"fcodeName": "capital of a political entity",
			"toponymName": "Pyongyang",
			"countrycode": "KP",
			"fcl": "P",
			"fclName": "city, village,...",
			"name": "Pyongyang",
			"wikipedia": "",
			"lng": 125.75431823730469,
			"fcode": "PPLC",
			"geonameId": 1871859,
			"lat": 39.033852842708576,
			"population": 3222000
		}],
		delay: 250
	});

	//FUEL 2 DATAGRID
	$('#MySelectStretchGrid').datagrid({
		dataSource: dataSource,
		stretchHeight: true,
		noDataFoundHTML: '<b>Sorry, nothing to display.</b>',
		enableSelect: true,
		primaryKey: 'geonameId',
		multiSelect: false
	});


});