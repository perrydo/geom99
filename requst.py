import requests

url = "https://kobo.humanitarianresponse.info/api/v2/assets/aE2gVwsxEMCPrQGdUDziiG/data/?format=geojson"

payload={}
headers = {
  'Authorization': 'Basic ZnJ1aXR0cmVlbWFwOkZvb2RTZWN1cml0eTIwMjE='
}

response = requests.request('GET', url, headers=headers, data=payload)
myfile = open(r"treedata2.geojson", "w")
myfile.write(response.text)
myfile.close()
