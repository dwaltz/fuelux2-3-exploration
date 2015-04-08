define(function (require) {

	//loading boostrap 2 and fuel 3 components individually
	require('fuelux2/loader');

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
});