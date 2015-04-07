define(function (require) {

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

	console.log(fuel3Constructor);
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

});