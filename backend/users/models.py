from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    bio = models.TextField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    mobile = models.IntegerField(blank=True, null=True, unique=True)
    
    def __str__(self):
        return self.username
