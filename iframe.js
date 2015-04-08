define(function (require) {

	//loading bootstrap 3 and fuel 3
	require('bootstrap');
	require('fuelux');

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
});