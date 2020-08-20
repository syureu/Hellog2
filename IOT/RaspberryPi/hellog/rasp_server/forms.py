from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label='username', max_length=100)
    password = forms.CharField(label='password', max_length=100)

class WorkingSetForm(forms.Form):
    set_cnt = forms.IntegerField(label='set_cnt', max_value=100)
    cnt = forms.IntegerField(label='cnt', max_value=100)

class RecordForm(forms.Form):
    username = forms.CharField(label='username', max_length=100)
    set_cnt = forms.IntegerField(label='set_cnt', max_value=100)
    cnt = forms.IntegerField(label='cnt', max_value=100)