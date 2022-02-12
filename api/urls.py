from django.urls import re_path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path(r'^room/$', views.RoomView.as_view()),
    re_path(r'^create-room/', views.CreateRoomView.as_view())
] 

#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_DIR)