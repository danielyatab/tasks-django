from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    #FOR READING  THE TITLE IN THE ADMIN PANEL 
    def __str__(self) -> str:
        return self.title