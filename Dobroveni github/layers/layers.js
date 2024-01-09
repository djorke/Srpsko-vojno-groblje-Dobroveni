var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Гугл Сателит',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr__1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ортофото",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2404266.479047, 5004672.142427, 2404335.723941, 5004731.540069]
                            })
                        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Без Имена'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Споменици'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4,
maxResolution:0.015402456383744084,
 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Имена'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__2.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'naziv': 'naziv', });
lyr__2.set('fieldImages', {'fid': 'Hidden', 'naziv': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'Hidden', 'naziv': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'naziv': 'TextEdit', });
lyr__2.set('fieldLabels', {'naziv': 'no label', });
lyr__3.set('fieldLabels', {'naziv': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'naziv': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});