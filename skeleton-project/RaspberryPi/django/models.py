from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    auth_key = models.CharField(max_length=200)
    login_date = models.DateTimeField('date published')
    role = models.CharField(max_length=100)

class Record(models.Model):
    auth_key = models.CharField(max_length=200)
    date_record = models.CharField(max_length=100)
    machine_id = models.IntegerField(default=0)
    machine_name = models.CharField(max_length=100)
    set_cnt = models.IntegerField(default=0)
    cnt = models.IntegerField(default=0)

class Machine(models.Model):
    machine_id = models.IntegerField()
    machine_name = models.CharField(max_length=50)
    selected = models.BooleanField(default=False)
