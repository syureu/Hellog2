from bluetooth import *

client_socket = BluetoothSocket(RFCOMM)


client_socket.connect(("98:D3:31:F7:48:CD", 1))

while True:
    msg = client_socket.recv(2048)
    print("recived message : {}".format(msg))

print("Finished")
client_socket.close()
