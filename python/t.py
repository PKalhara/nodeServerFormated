#!/usr/bin/python
import subprocess
import json
import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

subprocess.call('node index.js', shell=True)
file = open("/tmp/test", "r") 
x = file.read()
my_list = []

d = json.loads(x)

for i in d['applications']:
	my_list.append(i['name'])
	
with open("/tmp/output.txt", "w") as outfile:
    json.dump(my_list, outfile)
