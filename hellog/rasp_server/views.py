from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .forms import LoginForm, WorkingSetForm, RecordForm
from django.shortcuts import render, redirect
from .models import User, Record, Machine
from django.views.decorators.csrf import csrf_exempt
import requests
import json
import datetime
import os

URL = "http://i3d203.p.ssafy.io:29001/"
g_cnt = 0


def index(request):
    return render(request, 'rasp_server/index.html', {})


def access(request):
    return render(request, 'rasp_server/access.html', {})


def main(request):
    set_cnt = 0
    cnt = 0
    global g_cnt

    if request.method == 'POST':
        form = WorkingSetForm(request.POST)
        print('-----------')
        print(request.POST)
        print('-----------')
        print(form.is_valid())
        # if(form.is_valid()):
        # set_cnt = form.cleaned_data['set_cnt']
        # cnt = form.cleaned_data['cnt']

    cur_user = User.objects.all()[0]
    username = cur_user.username
    role = cur_user.role
    machine_name = Machine.objects.all()[0].machine_name
    context = {
        'username': username,
        'machine_name': machine_name,
        'role': role,
        'value': g_cnt
    }

    return render(request, 'rasp_server/main.html', context)


def setting(request):
    return render(request, 'rasp_server/setting.html', {})


def unconnected(request):
    return render(request, 'rasp_server/unconnected.html', {})


def select(request):
    return render(request, 'rasp_server/select.html', {})


def test(request):
    return render(request, 'rasp_server/test.html', {})


def working_set(request):
    return render(request, 'rasp_server/working_set.html', {})


def manager_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = {
                'username': username,
                'password': password,
            }

            res = requests.post(URL + 'login', data=json.dumps(user))

            # 로그인 성공
            if res.status_code == 200:
                # 로그인 이후 정보 얻기 위해 필요한 개인 키
                auth_key = res.headers["authorization"]

                headers = {'authorization': auth_key,
                           'Content-Type': 'application/json; charset=utf-8'}
                getRole_res = requests.get(
                    URL + 'api/users/roles', headers=headers)
                role = getRole_res.json()[0]
                if 'USER' == getRole_res.json()[0]:
                    return render(request, 'rasp_server/access.html', {'msg': '일반회원은 로그인 할 수 없습니다.'})

                user = User(username=username,
                            password=password,
                            auth_key=auth_key,
                            login_date=datetime.datetime.now(),
                            role=role)

                user.save()

                machine_list = Machine.objects.all()

                context = {
                    'username': username,
                    'machine_list': machine_list,
                    'msg': "해당하는 기구의 이름을 선택하세요."
                }

                return render(request, 'rasp_server/setting.html', context)
            # 로그인 실패
            else:
                return render(request, 'rasp_server/access.html', {'msg': '로그인 실패'})

    return render(request, 'rasp_server/access.html', {'msg': '로그인 실패'})


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        # print("--------------")
        # print(request.POST.values)
        # print("--------------")
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']

            user = {
                'username': username,
                'password': password,
            }
            print(user)
            res = requests.post(URL + 'login', data=json.dumps(user))

            # 로그인 성공
            if res.status_code == 200:
                # 로그인 이후 정보 얻기 위해 필요한 개인 키
                auth_key = res.headers["authorization"]
                # print(auth_key)

                headers = {'authorization': auth_key}
                getRole_res = requests.get(
                    URL + 'api/users/roles', headers=headers)

                role = getRole_res.json()[0]

                user = User(username=username,
                            password=password,
                            auth_key=auth_key,
                            login_date=datetime.datetime.now(),
                            role=role)

                user.save()

                machine_name = Machine.objects.get(selected=True).machine_name

                return render(request, 'rasp_server/main.html', {'username': username, 'role': role, 'machine_name': machine_name})
        # 로그인 실패
        return render(request, 'rasp_server/user_login.html', {'msg': '로그인 실패'})
    else:
        return render(request, 'rasp_server/user_login.html', {})


def selected(request, machine_name):
    print(machine_name)
    try:
        machine = Machine.objects.get(selected=True)
        machine.selected = False
        machine.save()
    except Machine.DoesNotExist:
        print("There is no machine had seleted")
    finally:
        machine = Machine.objects.get(machine_name=machine_name)
        machine.selected = True
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

        if set_cnt + cnt > 0:
            machine = Machine.objects.get(selected=True)

            record = Record(
                auth_key=User.objects.get(username=username).auth_key,
                date_record=datetime.datetime.now(),
                machine_name=machine.machine_name,
                machine_id=machine.machine_id,
                set_cnt=set_cnt,
                cnt=cnt
            )

            record.save()

        User.objects.all().delete()
    return HttpResponseRedirect('../user_login')


def manager_logout(request):
    User.objects.all().delete()
    return render(request, 'rasp_server/index.html', {})


def up(request):
    global g_cnt
    g_cnt += 1
    data = {
        'cnt': g_cnt
    }
    return JsonResponse(data)


def check(request):
    global g_cnt
    data = {
        'cnt': g_cnt
    }
    return JsonResponse(data)


def watch(request):
    f = open("/home/pi/Hash/result.mfd", "r")
    str = f.readline()
    os.remove("/home/pi/Hash/result.mfd")
    return


def count_clear(request):
    global g_cnt
    g_cnt = 0
    data = {
        'cnt': g_cnt
    }
    return JsonResponse(data)


@csrf_exempt
def set_list(request):
    if request.method == 'POST':
        request.session['set_list'] = request.POST.get("set_list")
        print(request.POST.get("set_list"))
        request.session.modified = True
        return JsonResponse({"msg": "성공"})
    else:
        return JsonResponse({"msg": "실패"})


def renew_machines(request):
    Machine.objects.all().delete()

    user = User.objects.all()[0]
    auth_key = user.auth_key
    headers = {'authorization': auth_key}

    response = requests.get(
        URL + "api/gyms/mygym/equipments", headers=headers)

    machine_list = []
    if(response.status_code == 200):
        msg = "해당하는 기구의 이름을 선택하세요."
        # res_content = response.content.decode('utf-8').json()
        res_content = response.json()
        for machine in res_content:
            print(machine['name'])
            machine_list.append({
                "machine_name": machine['name']
            })
            new_machine = Machine(
                machine_id=machine['equipmentId'],
                machine_name=machine['name'],
                selected=False
            )
            new_machine.save()

    elif(response.status_code/100 == 5):
        msg = "서버 내부 오류 발생"
    else:
        msg = "서버 연결 오류 발생"

    context = {
        "msg": msg,
        "machine_list": machine_list,
    }

    return render(request, "rasp_server/setting.html", context)


def get_past_record(request, btn_name):
    user = User.objects.all()[0]
    auth_key = user.auth_key
    headers = {'authorization': auth_key,
               'Content-type': 'application/json', 'Accept': 'application/json'}
    if(btn_name == "machine"):
        machine = Machine.objects.get(selected=True)
        equipmentId = str(machine.machine_id)
        response = requests.get(
            URL + "api/records/myrecord/equipment/" + equipmentId, headers=headers)
    else:
        response = requests.get(
            URL + "api/records/myrecord/today/", headers=headers)

    record_list = response.json()

    data = {
        "record_list": record_list
    }
    return JsonResponse(data)


@csrf_exempt
def finish_work(request):
    if(request.method == "POST"):
        auth_key = User.objects.all()[0].auth_key
        # print(auth_key)
        machine = Machine.objects.get(selected=True)

        headers = {'authorization': auth_key,
                   'Content-type': 'application/json', 'Accept': 'application/json'}

        # id 설정
        myinfo = requests.get(URL + 'api/users/myinfo/', headers=headers)
        # print(myinfo.content.decode('utf-8'))
        id = myinfo.json()['id']

        equipmentExerciseId = machine.machine_id

        today_list = request.POST
        list_size = int(request.POST.get('size'))
        # print(today_list)
        for i in range(0, list_size):
            set_str = today_list.get(
                'today_list[' + str(i) + '][set_cnt]').split()
            set_cnt = int(set_str[0][:1])
            weight = int(set_str[1].split("kg")[0])
            cnt = int(today_list.get('today_list[' + str(i) + '][cnt]'))
            startTime = str(today_list.get(
                'today_list[' + str(i) + '][startTime]'))[:23] + "+09:00"
            endTime = str(today_list.get(
                'today_list[' + str(i) + '][endTime]'))[:23] + "+09:00"

            today_record = {
                "id": id,
                "equipmentExerciseId": equipmentExerciseId,
                "sett": set_cnt,
                "weight": weight,
                "countt": cnt,
                "startTime": startTime,
                "endTime": endTime
            }
            # print(today_record)
            res_record = requests.post(
                URL + 'api/records/record', headers=headers, data=json.dumps(today_record))

            # print(res_record.json)
            if(res_record.status_code == 200):
                msg = "운동기록을 성공적으로 전송하였습니다."
                result = True
            else:
                msg = "서버 문제로 기기 내부에 저장됩니다. <br> 서버 정상 작동시 데이터가 전송됩니다."
                result = False
    data = {
        "msg": msg,
        "result": result
    }
    return JsonResponse(data)