from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'questions', views.QuestionViewSet)
router.register(r'choices', views.ChoiceViewSet)


urlpatterns = [

    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]