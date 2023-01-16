from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.
from rest_framework import generics
from .models import Note
from .serializers import NoteSerializer, UserSerializer
from rest_framework import permissions

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer



class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer