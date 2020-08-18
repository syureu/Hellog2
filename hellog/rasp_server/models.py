from django.db import models


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    auth_key = models.CharField(max_length=200)
    login_date = models.DateTimeField('date published')
    role = models.CharField(max_length=100)


class Record(models.Model):
    rid = models.IntegerField(default=0)
    auth_key = models.CharField(max_length=200)
    equipmentExerciseId = models.CharField(max_length=100)
    sett = models.IntegerField(default=0)
    countt = models.IntegerField(default=0)
    weight = models.IntegerField(default=0)
    startTime = models.CharField(max_length=100)
    endTime = models.CharField(max_length=100)


class Machine(models.Model):
    machine_id = models.IntegerField()
    machine_name = models.CharField(max_length=50)
    selected = models.BooleanField(default=False)
