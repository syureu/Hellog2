import time
import os
import requests

try:
    from watchdog.observers import Observer
    from watchdog.events import FileSystemEventHandler
except ModuleNotFoundError as e:
    print (e)
    os.system("pip install watchdog")

class Handler(FileSystemEventHandler):
    def on_created(self, event):
        print (f'event type : {event.event_type}\n'
               f'event src_path : {event.src_path}')
        if event.is_directory:
            print ("Make Directory")
        else:
           Fname, Extension = os.path.splitext(os.path.basename(event.src_path))
           if Extension == '.mfd':
               #response = requests.get("http://192.168.137.159:8888/rasp_server/watch/")
               response = requests.get("http://127.0.0.1:8888/rasp_server/watch/")
               print ("Make MFD File")

    def on_deleted(self, event):
        print ("Delete Event")

    def on_moved(self, event):
        print (f'event type : {event.event_type}\n')


class Watcher:
    def __init__(self, path):
        print ("Watching ... ")
        self.event_handler = None
        self.observer = Observer()
        self.target_directory = path
        self.currentDirectorySetting()

    def currentDirectorySetting(self):
        print ("==================================")
        print ("Current Working Directory : ", end=" ")
        os.chdir(self.target_directory)
        print ("{cwd}".format(cwd = os.getcwd()))
        print ("==================================")

    def run(self):
        self.event_handler = Handler()
        self.observer.schedule(
            self.event_handler,
            self.target_directory,
            recursive=False
        )
        self.observer.start()
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt as e:
            print ("Stop Watching ... ")
            self.observer.stop()

myWatcher = Watcher("/home/pi/Hash")
myWatcher.run()
