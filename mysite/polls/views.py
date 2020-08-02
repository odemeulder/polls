from django.shortcuts import HttpResponse

from rest_framework import viewsets

from .serializers import PollQuestionSerializer, PollChoiceSerializer
from .models import Question, Choice

def index(request):
    return HttpResponse("hello world")

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = PollQuestionSerializer

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = PollChoiceSerializer