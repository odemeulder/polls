from rest_framework import serializers

from .models import Question, Choice

class PollChoiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Choice
        fields = ['question', 'choice_text', 'votes']

class PollQuestionSerializer(serializers.HyperlinkedModelSerializer):
    choices = PollChoiceSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['question_text', 'pub_date', 'choices']

