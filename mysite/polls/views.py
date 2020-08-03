from django.shortcuts import HttpResponse

from rest_framework import viewsets

from .serializers import PollQuestionSerializer, PollChoiceSerializer
from .models import Question, Choice


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = PollQuestionSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = PollChoiceSerializer