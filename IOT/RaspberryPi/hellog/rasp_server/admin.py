from django.contrib import admin

from .models import User, Record, Machine

admin.site.register(User)
admin.site.register(Record)
admin.site.register(Machine)
