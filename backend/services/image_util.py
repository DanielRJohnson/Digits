import base64
import io
from PIL import Image, ImageOps
import numpy as np

def decode_img(msg):
    print(msg)
    msg = base64.b64decode(msg)
    buf = io.BytesIO(msg)
    img = Image.open(buf)
    return img

def img_to_greyscale(img):
    return ImageOps.grayscale(img)

def scale_image_array_to_array(imgarr):
    return np.ceil(np.array(imgarr) / 255.0)

def prepare_image(base64str):
    return scale_image_array_to_array(img_to_greyscale(decode_img(base64str))).reshape(1,28,28,1)

def show_prepared_image(imgarr):
    img = Image.fromarray(imgarr.reshape(28,28) * 255)
    img.show()