from django.urls import path
from .views import PersonalList

name = 'personal'

urlpatterns = [
    path('personal_list', PersonalList.as_view(), name='personal_list'),
]