#!/bin/bash

HOME=/home/pi
DATE=`date '+%Y-%m-%d'`

echo 'Hellog Project Start'
{
python $HOME/project/hellog/manage.py runserver 0.0.0.0:8888 > $HOME/hellog_log/django/$DATE.txt 2>&1 &
python $HOME/my-watch/watch.py &
$HOME/libnfc-1.7.1/utils/nfc-mfultrasonic r $HOME/Hash/result.mfd 2>&1 &
python3 $HOME/my-blue-soinc/blueSonic.py > $HOME/hellog_log/bluetooth/$DATE.txt 2>&1 &
$HOME/project/myip.sh 
}
