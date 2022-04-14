# set up filter
import geojson, json
from operator import contains
from shapely.geometry import shape
from shapely.geometry.point import Point

# postman codes
# https://web.postman.co/workspace/My-Workspace~953f9657-81e0-4eb2-83c3-7363e50075ff/request/20375094-b8e6047d-6031-452b-94b5-c21d7c9db98f?ctx=code

import requests

url = "https://kobo.humanitarianresponse.info/api/v2/assets/aMuGfJGwdnva8aWdQEp8WW/data/?format=geojson"

payload={}
headers = {
  'Authorization': 'eb6da470d80f12db9dd0949b36ccd6dc0ad497ce'
}

response = requests.request('GET', url, headers=headers, data=payload)
myfile = open("originaltreedata.geojson", "w")
myfile.write(response.text)
myfile.close()
print("done")

# setting up the filer to ensure all trees are within Ontario
ontarioraw = open("ontario.geojson", "r")
ontario = json.load(ontarioraw) # boundary of Ontario
treedataraw = open("originaltreedata.geojson", "r")
treedata = json.load(treedataraw) # data pulled directly from kobo toolbox
output = open("treedata.geojson", "w") # data after being put through the filter

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

geojson.dump(feature_collection, output) 