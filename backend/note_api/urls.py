from django.urls import path

from note_api.views import get_note_list

urlpatterns = [
    path('notes/', get_note_list, name='get_list'),
]