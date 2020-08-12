from django.http import HttpResponse, HttpResponseRedirect
from .forms import LoginForm, WorkingSetForm, RecordForm
from django.shortcuts import render, redirect
from .models import User, Record, Machine
import requests, json, datetime

URL = "http://syureu.iptime.org:29002/"

def index(request):
    return render(request, 'rasp_server/index.html',{})

def access(request):
    return render(request,'rasp_server/access.html',{})

def main(request):
    set_cnt = 0
    cnt = 0
    
    if request.method == 'POST':
        form = WorkingSetForm(request.POST)
        print('-----------')
        print(request.POST)
        print('-----------')
        print(form.is_valid())
        if(form.is_valid()):
            set_cnt = form.cleaned_data['set_cnt']
            cnt = form.cleaned_data['cnt']

    setted_info = {
        'set': set_cnt,
        'cnt': cnt,
    }
    
    username = User.objects.all()[0].username
    machine_name = Machine.objects.all()[0].machine_name
    context ={
        'username': username,
        'machine_name': machine_name,
        'setted_info': setted_info
    }

    return render(request, 'rasp_server/main.html',context)

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

                machine_list = Machine.objects.all()

                context ={
                    'username': username,
                    'machine_list': machine_list, 
                }

                return render(request, 'rasp_server/setting.html',context)
            ## 로그인 실패
            else :
                return render(request, 'rasp_server/access.html',{'msg' : '로그인 실패'})

    return render(request, 'rasp_server/access.html', {'msg': '로그인 실패'})

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        #print("--------------")
        #print(request.POST.values)
        #print("--------------")
        if form.is_valid():
            username=form.cleaned_data['username']
            password=form.cleaned_data['password']

            user = {
                'username': username,
                'password': password,
            }
            print(user)
            res = requests.post(URL + 'login',data=json.dumps(user))
            
            ## 로그인 성공
            if res.status_code == 200:
                ## 로그인 이후 정보 얻기 위해 필요한 개인 키
                auth_key = res.headers["authorization"]
                ##print(auth_key)

                headers = {'authorization': auth_key}
                getRole_res = requests.get(URL + 'api/users/roles',headers=headers)

                role = getRole_res.json()[0]

                user = User(username=username,
                password = password,
                auth_key= auth_key,
                login_date= datetime.datetime.now(),
                role = role)

                user.save()
                
                machine_name = Machine.objects.get(selected=True).machine_name

                return render(request, 'rasp_server/main.html', {'username': username, 'role': role, 'machine_name': machine_name})
        ## 로그인 실패
        return render(request, 'rasp_server/user_login.html',{'msg': '로그인 실패'})
    else :
        return render(request, 'rasp_server/user_login.html',{})

def selected(request, machine_name):
    print(machine_name)
    try:
        machine = Machine.objects.get(selected=True)
        machine.selected=False
        machine.save()
    except Machine.DoesNotExist:
        print("There is no machine had seleted")
    finally :
        machine = Machine.objects.get(machine_name=machine_name)
        machine.selected=True
        machine.save()

        User.objects.all().delete()
        return HttpResponseRedirect('../../user_login')

def user_logout(request):
    form = RecordForm(request.POST)

    if(form.is_valid()):
        username = form.cleaned_data["username"]
        set_cnt = form.cleaned_data["set_cnt"]
        cnt = form.cleaned_data["cnt"]

        print(set_cnt + cnt)

        if set_cnt + cnt > 0 : 
            machine = Machine.objects.get(selected=True)

            record = Record(
                auth_key=User.objects.get(username=username).auth_key,
                date_record = datetime.datetime.now(),
                machine_name=machine.machine_name,
                machine_id=machine.machine_id,
                set_cnt=set_cnt,
                cnt=cnt
            )

            record.save()

        User.objects.filter(username=username).delete()
    return HttpResponseRedirect('../user_login')

def manager_logout(request, username):
    User.objects.filter(username=username).delete()
    return render(request, 'rasp_server/index.html', {})

# db 완료되면 하기
def set_machine_list(): 
    
    return None