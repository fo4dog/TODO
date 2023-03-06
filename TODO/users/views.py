from rest_framework import mixins, viewsets
from rest_framework.viewsets import ModelViewSet
from .serializers import UserModelSerializer
from .models import User



class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserModelSerializer
    queryset = User.objects.all()