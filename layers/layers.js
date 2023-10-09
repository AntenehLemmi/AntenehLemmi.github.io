var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Adama_MI_CornerPoint_1 = new ol.format.GeoJSON();
var features_Adama_MI_CornerPoint_1 = format_Adama_MI_CornerPoint_1.readFeatures(json_Adama_MI_CornerPoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adama_MI_CornerPoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adama_MI_CornerPoint_1.addFeatures(features_Adama_MI_CornerPoint_1);
var lyr_Adama_MI_CornerPoint_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adama_MI_CornerPoint_1, 
                style: style_Adama_MI_CornerPoint_1,
                interactive: true,
                title: '<img src="styles/legend/Adama_MI_CornerPoint_1.png" /> Adama_MI_CornerPoint'
            });
var format_Adama_MI_ParcelBoundary_2 = new ol.format.GeoJSON();
var features_Adama_MI_ParcelBoundary_2 = format_Adama_MI_ParcelBoundary_2.readFeatures(json_Adama_MI_ParcelBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adama_MI_ParcelBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adama_MI_ParcelBoundary_2.addFeatures(features_Adama_MI_ParcelBoundary_2);
var lyr_Adama_MI_ParcelBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adama_MI_ParcelBoundary_2, 
                style: style_Adama_MI_ParcelBoundary_2,
                interactive: true,
                title: '<img src="styles/legend/Adama_MI_ParcelBoundary_2.png" /> Adama_MI_ParcelBoundary'
            });
var format_Adama_MI_Plots_3 = new ol.format.GeoJSON();
var features_Adama_MI_Plots_3 = format_Adama_MI_Plots_3.readFeatures(json_Adama_MI_Plots_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adama_MI_Plots_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adama_MI_Plots_3.addFeatures(features_Adama_MI_Plots_3);
var lyr_Adama_MI_Plots_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adama_MI_Plots_3, 
                style: style_Adama_MI_Plots_3,
                interactive: true,
                title: '<img src="styles/legend/Adama_MI_Plots_3.png" /> Adama_MI_Plots'
            });
var format_AdamaKebele_4 = new ol.format.GeoJSON();
var features_AdamaKebele_4 = format_AdamaKebele_4.readFeatures(json_AdamaKebele_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamaKebele_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamaKebele_4.addFeatures(features_AdamaKebele_4);
var lyr_AdamaKebele_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdamaKebele_4, 
                style: style_AdamaKebele_4,
                interactive: true,
                title: '<img src="styles/legend/AdamaKebele_4.png" /> AdamaKebele'
            });
var format_AdamaRoad1_5 = new ol.format.GeoJSON();
var features_AdamaRoad1_5 = format_AdamaRoad1_5.readFeatures(json_AdamaRoad1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamaRoad1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamaRoad1_5.addFeatures(features_AdamaRoad1_5);
var lyr_AdamaRoad1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdamaRoad1_5, 
                style: style_AdamaRoad1_5,
                interactive: true,
                title: '<img src="styles/legend/AdamaRoad1_5.png" /> AdamaRoad1'
            });
var format_AdamaRoadCenterline_6 = new ol.format.GeoJSON();
var features_AdamaRoadCenterline_6 = format_AdamaRoadCenterline_6.readFeatures(json_AdamaRoadCenterline_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamaRoadCenterline_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamaRoadCenterline_6.addFeatures(features_AdamaRoadCenterline_6);
var lyr_AdamaRoadCenterline_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdamaRoadCenterline_6, 
                style: style_AdamaRoadCenterline_6,
                interactive: true,
                title: '<img src="styles/legend/AdamaRoadCenterline_6.png" /> AdamaRoadCenterline'
            });
var format_AdamaSubcity_7 = new ol.format.GeoJSON();
var features_AdamaSubcity_7 = format_AdamaSubcity_7.readFeatures(json_AdamaSubcity_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdamaSubcity_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdamaSubcity_7.addFeatures(features_AdamaSubcity_7);
var lyr_AdamaSubcity_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdamaSubcity_7, 
                style: style_AdamaSubcity_7,
                interactive: true,
                title: '<img src="styles/legend/AdamaSubcity_7.png" /> AdamaSubcity'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Adama_MI_CornerPoint_1.setVisible(true);lyr_Adama_MI_ParcelBoundary_2.setVisible(true);lyr_Adama_MI_Plots_3.setVisible(true);lyr_AdamaKebele_4.setVisible(true);lyr_AdamaRoad1_5.setVisible(true);lyr_AdamaRoadCenterline_6.setVisible(true);lyr_AdamaSubcity_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Adama_MI_CornerPoint_1,lyr_Adama_MI_ParcelBoundary_2,lyr_Adama_MI_Plots_3,lyr_AdamaKebele_4,lyr_AdamaRoad1_5,lyr_AdamaRoadCenterline_6,lyr_AdamaSubcity_7];
lyr_Adama_MI_CornerPoint_1.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'ORIG_FID': 'ORIG_FID', });
lyr_Adama_MI_ParcelBoundary_2.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Length': 'Length', });
lyr_Adama_MI_Plots_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'GlobalID': 'GlobalID', 'UPID': 'UPID', 'X_Centroid': 'X_Centroid', 'Y_Centroid': 'Y_Centroid', 'InvestorNa': 'InvestorNa', 'Gender_1': 'Gender_1', 'Phone': 'Phone', 'FixedNumbe': 'FixedNumbe', 'Email_1': 'Email_1', 'Nationalit': 'Nationalit', 'EthnicGrou': 'EthnicGrou', 'SourceOfIn': 'SourceOfIn', 'InvestorTy': 'InvestorTy', 'FormOfInve': 'FormOfInve', 'ProjectLoc': 'ProjectLoc', 'Region_1': 'Region_1', 'RegionCode': 'RegionCode', 'Zone_1': 'Zone_1', 'CityName': 'CityName', 'CityCode_1': 'CityCode_1', 'SubCity': 'SubCity', 'Wereda_1': 'Wereda_1', 'Kebele_1': 'Kebele_1', 'KebeleCode': 'KebeleCode', 'Neighborho': 'Neighborho', 'BlockNo_1': 'BlockNo_1', 'UniPIN': 'UniPIN', 'DecisionBo': 'DecisionBo', 'DecisionDa': 'DecisionDa', 'DecidedLan': 'DecidedLan', 'LandHoldin': 'LandHoldin', 'LandLease_': 'LandLease_', 'MainSector': 'MainSector', 'SubSector': 'SubSector', 'ProposedCa': 'ProposedCa', 'LevelOfEnt': 'LevelOfEnt', 'ProposalPe': 'ProposalPe', 'ProposalTe': 'ProposalTe', 'ProjectTyp': 'ProjectTyp', 'Investment': 'Investment', 'Lease_Rent': 'Lease_Rent', 'DurationOf': 'DurationOf', 'DueDate_1': 'DueDate_1', 'BudjectYea': 'BudjectYea', 'LeaseRate_': 'LeaseRate_', 'TitleDeedD': 'TitleDeedD', 'AreaOnTitl': 'AreaOnTitl', 'AreaOnTheG': 'AreaOnTheG', 'AreaDiffer': 'AreaDiffer', 'DateOfSite': 'DateOfSite', 'DateOfCons': 'DateOfCons', 'DateOfStar': 'DateOfStar', 'DateOfFini': 'DateOfFini', 'DateOfUseP': 'DateOfUseP', 'DateOfSt_1': 'DateOfSt_1', 'ProjectSta': 'ProjectSta', 'LicenseNo': 'LicenseNo', 'DateOfLice': 'DateOfLice', 'LicensingO': 'LicensingO', 'ActualCapi': 'ActualCapi', 'PermanentJ': 'PermanentJ', 'Permanen_1': 'Permanen_1', 'Temporarry': 'Temporarry', 'Temporar_1': 'Temporar_1', 'TypesOfPro': 'TypesOfPro', 'Production': 'Production', 'ExportedPr': 'ExportedPr', 'NoOfProduc': 'NoOfProduc', 'ProductDes': 'ProductDes', 'DollarEarn': 'DollarEarn', 'Remark': 'Remark', });
lyr_AdamaKebele_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KebeleName': 'KebeleName', 'Sheet1__Ke': 'Sheet1__Ke', 'Kebele_Cod': 'Kebele_Cod', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AdamaRoad1_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ST_HIERARC': 'ST_HIERARC', 'SU_MATERIA': 'SU_MATERIA', 'STREETHIER': 'STREETHIER', 'AREA': 'AREA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AdamaRoadCenterline_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Center_Lin': 'Center_Lin', 'Width': 'Width', 'Roadcenter': 'Roadcenter', 'Material': 'Material', 'Full_Width': 'Full_Width', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AdamaSubcity_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Sheet1__Su': 'Sheet1__Su', 'Subcity_Co': 'Subcity_Co', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Adama_MI_CornerPoint_1.set('fieldImages', {'LEFT_FID': '', 'RIGHT_FID': '', 'ORIG_FID': '', });
lyr_Adama_MI_ParcelBoundary_2.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Length': 'TextEdit', });
lyr_Adama_MI_Plots_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'GlobalID': 'TextEdit', 'UPID': 'TextEdit', 'X_Centroid': 'TextEdit', 'Y_Centroid': 'TextEdit', 'InvestorNa': 'TextEdit', 'Gender_1': 'TextEdit', 'Phone': 'TextEdit', 'FixedNumbe': 'TextEdit', 'Email_1': 'TextEdit', 'Nationalit': 'TextEdit', 'EthnicGrou': 'TextEdit', 'SourceOfIn': 'TextEdit', 'InvestorTy': 'TextEdit', 'FormOfInve': 'TextEdit', 'ProjectLoc': 'TextEdit', 'Region_1': 'TextEdit', 'RegionCode': 'TextEdit', 'Zone_1': 'TextEdit', 'CityName': 'TextEdit', 'CityCode_1': 'TextEdit', 'SubCity': 'TextEdit', 'Wereda_1': 'TextEdit', 'Kebele_1': 'TextEdit', 'KebeleCode': 'TextEdit', 'Neighborho': 'TextEdit', 'BlockNo_1': 'TextEdit', 'UniPIN': 'TextEdit', 'DecisionBo': 'TextEdit', 'DecisionDa': 'TextEdit', 'DecidedLan': 'TextEdit', 'LandHoldin': 'TextEdit', 'LandLease_': 'TextEdit', 'MainSector': 'TextEdit', 'SubSector': 'TextEdit', 'ProposedCa': 'TextEdit', 'LevelOfEnt': 'TextEdit', 'ProposalPe': 'TextEdit', 'ProposalTe': 'TextEdit', 'ProjectTyp': 'TextEdit', 'Investment': 'TextEdit', 'Lease_Rent': 'TextEdit', 'DurationOf': 'TextEdit', 'DueDate_1': 'TextEdit', 'BudjectYea': 'TextEdit', 'LeaseRate_': 'TextEdit', 'TitleDeedD': 'TextEdit', 'AreaOnTitl': 'TextEdit', 'AreaOnTheG': 'TextEdit', 'AreaDiffer': 'TextEdit', 'DateOfSite': 'TextEdit', 'DateOfCons': 'TextEdit', 'DateOfStar': 'TextEdit', 'DateOfFini': 'TextEdit', 'DateOfUseP': 'TextEdit', 'DateOfSt_1': 'TextEdit', 'ProjectSta': 'TextEdit', 'LicenseNo': 'TextEdit', 'DateOfLice': 'TextEdit', 'LicensingO': 'TextEdit', 'ActualCapi': 'TextEdit', 'PermanentJ': 'TextEdit', 'Permanen_1': 'TextEdit', 'Temporarry': 'TextEdit', 'Temporar_1': 'TextEdit', 'TypesOfPro': 'TextEdit', 'Production': 'TextEdit', 'ExportedPr': 'TextEdit', 'NoOfProduc': 'TextEdit', 'ProductDes': 'TextEdit', 'DollarEarn': 'TextEdit', 'Remark': 'TextEdit', });
lyr_AdamaKebele_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KebeleName': 'TextEdit', 'Sheet1__Ke': 'TextEdit', 'Kebele_Cod': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AdamaRoad1_5.set('fieldImages', {'OBJECTID': '', 'ST_HIERARC': '', 'SU_MATERIA': '', 'STREETHIER': '', 'AREA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AdamaRoadCenterline_6.set('fieldImages', {'OBJECTID': '', 'Center_Lin': '', 'Width': '', 'Roadcenter': '', 'Material': '', 'Full_Width': '', 'SHAPE_Leng': '', });
lyr_AdamaSubcity_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Sheet1__Su': 'TextEdit', 'Subcity_Co': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Adama_MI_CornerPoint_1.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'ORIG_FID': 'no label', });
lyr_Adama_MI_ParcelBoundary_2.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'Length': 'inline label', });
lyr_Adama_MI_Plots_3.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'GlobalID': 'no label', 'UPID': 'inline label', 'X_Centroid': 'no label', 'Y_Centroid': 'no label', 'InvestorNa': 'inline label', 'Gender_1': 'no label', 'Phone': 'no label', 'FixedNumbe': 'no label', 'Email_1': 'no label', 'Nationalit': 'no label', 'EthnicGrou': 'no label', 'SourceOfIn': 'inline label', 'InvestorTy': 'inline label', 'FormOfInve': 'no label', 'ProjectLoc': 'no label', 'Region_1': 'no label', 'RegionCode': 'no label', 'Zone_1': 'no label', 'CityName': 'no label', 'CityCode_1': 'no label', 'SubCity': 'no label', 'Wereda_1': 'no label', 'Kebele_1': 'no label', 'KebeleCode': 'no label', 'Neighborho': 'no label', 'BlockNo_1': 'no label', 'UniPIN': 'no label', 'DecisionBo': 'no label', 'DecisionDa': 'no label', 'DecidedLan': 'no label', 'LandHoldin': 'inline label', 'LandLease_': 'no label', 'MainSector': 'no label', 'SubSector': 'no label', 'ProposedCa': 'no label', 'LevelOfEnt': 'no label', 'ProposalPe': 'no label', 'ProposalTe': 'no label', 'ProjectTyp': 'no label', 'Investment': 'no label', 'Lease_Rent': 'no label', 'DurationOf': 'no label', 'DueDate_1': 'no label', 'BudjectYea': 'no label', 'LeaseRate_': 'no label', 'TitleDeedD': 'no label', 'AreaOnTitl': 'no label', 'AreaOnTheG': 'no label', 'AreaDiffer': 'no label', 'DateOfSite': 'no label', 'DateOfCons': 'no label', 'DateOfStar': 'no label', 'DateOfFini': 'no label', 'DateOfUseP': 'no label', 'DateOfSt_1': 'no label', 'ProjectSta': 'no label', 'LicenseNo': 'no label', 'DateOfLice': 'no label', 'LicensingO': 'no label', 'ActualCapi': 'no label', 'PermanentJ': 'no label', 'Permanen_1': 'no label', 'Temporarry': 'no label', 'Temporar_1': 'no label', 'TypesOfPro': 'no label', 'Production': 'no label', 'ExportedPr': 'no label', 'NoOfProduc': 'no label', 'ProductDes': 'no label', 'DollarEarn': 'no label', 'Remark': 'no label', });
lyr_AdamaKebele_4.set('fieldLabels', {'OBJECTID': 'no label', 'KebeleName': 'inline label', 'Sheet1__Ke': 'no label', 'Kebele_Cod': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AdamaRoad1_5.set('fieldLabels', {'OBJECTID': 'no label', 'ST_HIERARC': 'no label', 'SU_MATERIA': 'no label', 'STREETHIER': 'no label', 'AREA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AdamaRoadCenterline_6.set('fieldLabels', {'OBJECTID': 'no label', 'Center_Lin': 'no label', 'Width': 'no label', 'Roadcenter': 'no label', 'Material': 'inline label', 'Full_Width': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AdamaSubcity_7.set('fieldLabels', {'OBJECTID': 'no label', 'Sheet1__Su': 'inline label', 'Subcity_Co': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AdamaSubcity_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});