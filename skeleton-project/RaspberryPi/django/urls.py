from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('access/', views.access, name='access'),
    path('main/', views.main, name='main'),
    path('setting/', views.setting, name='setting'),
    path('unconnected/', views.unconnected, name='unconnected'),
    path('select/', views.select, name='select'),
    path('user_login/', views.user_login, name='user_login'),
    path('test/', views.test, name='test'),
    path('working_set/' , views.working_set, name="working_set"),
    path('manager_login/', views.manager_login, name="manager_login"),
]