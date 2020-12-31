from django.db import models
from django.utils import timezone

# Create your models here.
NOS_CHOICES=[(1,'One'),(2,'Two'),(3,'Three'),(4,'Four'),(6,'Six'),(8,'Eight'),(10,'Ten')]


class Table(models.Model):
    underName=models.CharField(max_length=300)
    location=models.CharField(max_length=300)
    numberOfSits=models.IntegerField(choices=NOS_CHOICES)
    reservationTime=models.DateTimeField(default=timezone.now)


    def _str_(self):
        return (self.underName)
