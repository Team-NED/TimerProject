from django.db import models

# Create your models here.
class Account(models.Model):
    name = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=13)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']