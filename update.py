import requests # postman api

# set up filter
import geojson, json
from operator import contains
from shapely.geometry import shape
from shapely.geometry.point import Point

url = "https://kobo.humanitarianresponse.info/api/v2/assets/aMuGfJGwdnva8aWdQEp8WW/data/?format=geojson"

payload={}
headers = {
  'Authorization': 'Basic eb6da470d80f12db9dd0949b36ccd6dc0ad497ce'
}

response = requests.request('GET', url, headers=headers, data=payload)
myfile = open("originaltreedata.geojson", "w")
myfile.write(response.text)
myfile.close()
print("done")

# setting up the filer to ensure all trees are within Ontario
ontarioraw = open("ontario.geojson", "r")
ontario = json.load(ontarioraw)
treedataraw = open("originaltreedata.geojson", "r")
treedata = json.load(treedataraw)
output = open("treedata.geojson", "w")

feature_collection = {"type": "FeatureCollection",
                      "name": "Significant Native Trees in Ontario",
                      "features": []
                      }

for tree in treedata["features"]: 
    newtree = tree["geometry"]["coordinates"] 
    for feature in ontario["features"]:
        boundary = shape(feature["geometry"]) # read the geometry of the Ontario boundary polygon 
        if boundary.contains(Point(newtree)): # if the new tree is inside the polygon, add to the geojson
            feature_collection["features"].append(tree)

geojson.dump(feature_collection, output) #

#########################################################################
badtrees = ["garbage", "Garbage", "Dumpster", "dumpster", "Buckthorn", "Buck Thorn", "Oak", "buckthorn", "buck thorn", "poison", "Poison", "Sumac", "sumac", "Blue Beech", "blue beech"]
geoPoints = open(r"validation\kobo.geojson", "r")
criteriaPoints = open(r"validation\RefinedPolygonSmooth.geojson", "r")
regionPoints = open(r"validation\RefinedSMWSmooth.geojson", "r")
geodict = json.load(geoPoints)
criteriadict = json.load(criteriaPoints)
regiondict = json.load(regionPoints)
resultPoints = open(r"validation\result.geojson", "w")

feature_collection = {"type": "FeatureCollection",
                      "name": "Collab",
                      "features": []
                      }

for feat in geodict["features"]:
    myPoint = feat["geometry"]["coordinates"]
    if feat["properties"]["Species"] == "Other":
      for i in badtrees:
        if i not in feat["properties"]["OtherTreeName"]:
          if feat["properties"]["Public"] == "Uknown":
            for feature in criteriadict["features"]:
              polygon = shape(feature["geometry"])
              if polygon.contains(Point(myPoint)):
                feature_collection["features"].append(feat)
          else:
            for feature in regiondict["features"]:
              polygon = shape(feature["geometry"])
              if polygon.contains(Point(myPoint)):
                feature_collection["features"].append(feat)

    if feat["properties"]["Public"] == "Uknown":
      for feature in criteriadict["features"]:
          polygon = shape(feature["geometry"])
          if polygon.contains(Point(myPoint)):
              feature_collection["features"].append(feat)
    else:
      for feature in regiondict["features"]:
        polygon = shape(feature["geometry"])
        if polygon.contains(Point(myPoint)):
          feature_collection["features"].append(feat)

geojson.dump(feature_collection, resultPoints)
print("done")