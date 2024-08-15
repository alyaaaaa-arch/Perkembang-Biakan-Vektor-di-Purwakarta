ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.415168, -6.533760, 107.473944, -6.494657]);
var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1 = new ol.format.GeoJSON();
var features_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1 = format_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.readFeatures(json_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.addFeatures(features_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1);
var lyr_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1, 
                style: style_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1,
                popuplayertitle: "Adm_Desa Mulyamekar dan Ciwareng — gadm41_idn_4",
                interactive: true,
                title: '<img src="styles/legend/Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.png" /> Adm_Desa Mulyamekar dan Ciwareng — gadm41_idn_4'
            });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var format_UTMPERINDUKAN3alya_waypoints__waypoints_3 = new ol.format.GeoJSON();
var features_UTMPERINDUKAN3alya_waypoints__waypoints_3 = format_UTMPERINDUKAN3alya_waypoints__waypoints_3.readFeatures(json_UTMPERINDUKAN3alya_waypoints__waypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTMPERINDUKAN3alya_waypoints__waypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMPERINDUKAN3alya_waypoints__waypoints_3.addFeatures(features_UTMPERINDUKAN3alya_waypoints__waypoints_3);
var lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMPERINDUKAN3alya_waypoints__waypoints_3, 
                style: style_UTMPERINDUKAN3alya_waypoints__waypoints_3,
                popuplayertitle: "UTM PERINDUKAN (3) — alya_waypoints__waypoints",
                interactive: true,
                title: '<img src="styles/legend/UTMPERINDUKAN3alya_waypoints__waypoints_3.png" /> UTM PERINDUKAN (3) — alya_waypoints__waypoints'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1,lyr_Buffered_2,lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3];
lyr_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Buffered_2.set('fieldAliases', {'Name': 'Name', 'timestamp': 'timestamp', });
lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3.set('fieldAliases', {'Name': 'Name', 'timestamp': 'timestamp', });
lyr_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Buffered_2.set('fieldImages', {'Name': 'TextEdit', 'timestamp': 'DateTime', });
lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3.set('fieldImages', {'Name': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Adm_DesaMulyamekardanCiwarenggadm41_idn_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Buffered_2.set('fieldLabels', {'Name': 'inline label - always visible', 'timestamp': 'no label', });
lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3.set('fieldLabels', {'Name': 'inline label - always visible', 'timestamp': 'no label', });
lyr_UTMPERINDUKAN3alya_waypoints__waypoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});