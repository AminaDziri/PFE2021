from flask import Flask, request, jsonify
from pymongo import MongoClient
import json


app=Flask(__name__)

#Connection to Mongodb
client = MongoClient("mongodb+srv://BD_EnovaSartex:12829158@cluster0.nxo9v.mongodb.net/test")

#import database
db = client.get_database('user')

#import collections
Robot = db.get_collection('Robot')
model = db.get_collection('model')
sartex_user = db.get_collection('sartex_user')
trajectory= db.get_collection('trajectory')