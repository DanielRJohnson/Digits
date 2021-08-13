from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' 
from tensorflow import keras

from services.image_util import prepare_image, show_prepared_image

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

class HelloWorld(Resource):
    def post(self):
        model = keras.models.load_model('models/DigitModel')
        prepared_img = prepare_image(request.json["base64img"])
        #show_prepared_image(prepared_img)
        return jsonify({"prediction": model.predict(prepared_img).tolist()})

api.add_resource(HelloWorld, '/api/getPrediction')

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=False)