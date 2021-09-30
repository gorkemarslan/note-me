from django.urls import path

from note_api import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('notes/', views.get_note_list, name='note_list'),
    path('notes/<int:pk>/', views.get_note_detail, name='note_detail'),
]
