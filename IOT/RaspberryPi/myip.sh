#!/bin/bash

#IP=`ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'`

#echo http://$IP:8888/

DISPLAY=:0 chromium-browser --kiosk http://127.0.0.1:8888/rasp_server/
