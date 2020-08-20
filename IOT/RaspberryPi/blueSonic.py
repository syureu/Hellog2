from bluetooth import *
import requests
import subprocess as sp

client_socket=BluetoothSocket(RFCOMM)

client_socket.connect(("98:D3:31:F7:48:CD",1))
print("bluetooth connected!")

stdoutdata=sp.getoutput("hcitool con")

if "98:D3:31:F7:48:CD" in stdoutdata.split():
    print("bluetooth device is connected")

while True:
    msg = client_socket.recv(1024)
    if msg != b'1':
        response = requests.get('http://127.0.0.1:8888/rasp_server/up/')
        #response = requests.get('http://192.168.137.159:8888/rasp_server/up/')
        print(response.status_code)
        print("recived message : {}".format(msg))

print("Finished")
client_socket.close()
