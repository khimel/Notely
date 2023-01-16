from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Note
        fields = ('id', 'title', 'content','owner')


class UserSerializer(serializers.ModelSerializer):
    

    notes = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Note.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'notes')