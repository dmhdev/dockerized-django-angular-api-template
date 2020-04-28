from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from api import views

router = routers.DefaultRouter()
router.register(r'items', views.ItemViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
