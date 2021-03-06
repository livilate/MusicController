from django.urls import re_path, path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path(r"^room", views.RoomView.as_view()),
    re_path(r"^create-room/", views.CreateRoomView.as_view()),
    path("get-room", views.GetRoom.as_view()),
    path("join-room", views.JoinRoom.as_view()),
    path("user-in-room", views.UserInRoom.as_view()),
    path("leave-room", views.LeaveRoom.as_view()),
]

# + static(settings.MEDIA_URL, document_root=settings.MEDIA_DIR)
