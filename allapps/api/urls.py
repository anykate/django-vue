from django.urls import path

from . import views

app_name = "api"

urlpatterns = [
    path("", views.index_view, name="index"),
    path("login/", views.login_view, name="api-login"),
    path("logout/", views.logout_view, name="api-logout"),
    path("session/", views.session_view, name="api-session"),
    path("whoami/", views.whoami_view, name="api-whoami"),
]
