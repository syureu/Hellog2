from django.http import HttpResponse
from .forms import LoginForm
from django.shortcuts import render, redirect
from .models import User, Record
import requests, json, datetime

URL = "http://syureu.iptime.org:29002/"

def index(request):
    return render(request, 'rasp_server/index.html',{})

def access(request):
    return render(request,'rasp_server/access.html',{})

def main(request):
    return render(request, 'rasp_server/main.html',{})

def setting(request):
    return render(request, 'rasp_server/setting.html',{})

def unconnected(request):
    return render(request, 'rasp_server/unconnected.html',{})

def select(request):
    return render(request, 'rasp_server/select.html',{})

def test(request):
    return render(request, 'rasp_server/test.html',{})

def working_set(request):
    return render(request, 'rasp_server/working_set.html',{})

def manager_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username=form.cleaned_data['username']
            password=form.cleaned_data['password']

            user = {
                'username': username,
                'password': password,
            }

            res = requests.post(URL + 'login',data=json.dumps(user))

            ## 로그인 성공
            if res.status_code == 200:
                ## 로그인 이후 정보 얻기 위해 필요한 개인 키
                auth_key = res.headers["authorization"]
                
                headers = {'authorization': auth_key}
                getRole_res = requests.get(URL + 'api/users/roles',headers=headers)

                if 'ADMIN' == getRole_res.json()[0]:
                    role = 'ADMIN'
                else :
                    return render(request, 'rasp_server/access.html',{'msg' : '관리자만 로그인 가능합니다.'})

                user = User(username=username,
                password = password,
                auth_key= auth_key,
                login_date= datetime.datetime.now(),
                role = role)

                user.save()

                return render(request, 'rasp_server/setting.html',{'username': username})
            ## 로그인 실패
            else :
                return render(request, 'rasp_server/access.html',{'msg' : '로그인 실패'})

    return render(request, 'rasp_server/setting.html', {})

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        print("--------------")
        print(request.POST.values)
        print("--------------")
        if form.is_valid():
            username=form.cleaned_data['username']
            password=form.cleaned_data['password']

            user = {
                'username': username,
                'password': password,
            }
            print(user)
            ## headers = {'Content-Type': 'application/json; charset=utf-8'}
            res = requests.post(URL + 'login',data=json.dumps(user))
            
            ## 로그인 성공
            if res.status_code == 200:
                ## 로그인 이후 정보 얻기 위해 필요한 개인 키
                auth_key = res.headers["authorization"]
                ##print(auth_key)
                msg =  'login success'

                headers = {'authorization': auth_key}
                getRole_res = requests.get(URL + 'api/users/roles',headers=headers)

                role = getRole_res.json()[0]

                user = User(username=username,
                password = password,
                auth_key= auth_key,
                login_date= datetime.datetime.now(),
                role = role)

                user.save()
                
                return render(request, 'rasp_server/main.html', {'username': username, 'role': role})
        ## 로그인 실패
        return render(request, 'rasp_server/user_login.html',{'msg': '로그인 실패'})
    else :
        return render(request, 'rasp_server/user_login.html',{})